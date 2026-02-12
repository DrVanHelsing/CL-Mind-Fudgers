import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Monitor, PenTool, BarChart3,
  BookOpen, SearchX, Clock, AlertTriangle,
  CheckCircle2, ArrowUpRight,
} from 'lucide-react';
import { activities } from '../data/activities';
import ActivityPopup from '../components/ActivityPopup';

const streamCfg = {
  CL: { icon: Monitor, text: 'text-cl', dim: 'bg-cl-dim', subtle: 'border-cl-subtle', pill: 'bg-cl-dim text-cl border border-cl-subtle' },
  AL: { icon: PenTool, text: 'text-al', dim: 'bg-al-dim', subtle: 'border-al-subtle', pill: 'bg-al-dim text-al border border-al-subtle' },
  QL: { icon: BarChart3, text: 'text-ql', dim: 'bg-ql-dim', subtle: 'border-ql-subtle', pill: 'bg-ql-dim text-ql border border-ql-subtle' },
};

export default function LecturerGuides() {
  const [search, setSearch] = useState('');
  const [activeStream, setActiveStream] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const guides = useMemo(() => activities.filter((a) => a.lecturerGuide), []);

  const filtered = useMemo(() => {
    return guides.filter((a) => {
      if (activeStream && a.stream !== activeStream) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [
          a.title,
          a.stream,
          a.lecturerGuide.sessionGoal,
          ...(a.lecturerGuide.commonMisconceptions || []),
          ...(a.lecturerGuide.interventions || []),
        ].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [guides, search, activeStream]);

  const totalMis = filtered.reduce((s, a) => s + (a.lecturerGuide.commonMisconceptions?.length || 0), 0);
  const totalInt = filtered.reduce((s, a) => s + (a.lecturerGuide.interventions?.length || 0), 0);

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="mb-8 glass-panel-soft p-5">
          <h1 className="text-2xl font-bold text-heading flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-accent" /> Lecturer Guides
          </h1>
          <p className="text-sm text-body max-w-2xl">
            Streamlined facilitation explorer: open any activity in a full-screen lecturer view to focus on timing,
            misconceptions, interventions, and rubric support.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          <div className="glass-element p-4 rounded-[12px]">
            <p className="text-[11px] text-muted uppercase tracking-[0.04em] mb-1">Visible Guides</p>
            <p className="text-2xl font-bold text-heading font-mono">{filtered.length}</p>
          </div>
          <div className="glass-element p-4 rounded-[12px]">
            <p className="text-[11px] text-muted uppercase tracking-[0.04em] mb-1">Misconceptions</p>
            <p className="text-2xl font-bold text-warning font-mono">{totalMis}</p>
          </div>
          <div className="glass-element p-4 rounded-[12px]">
            <p className="text-[11px] text-muted uppercase tracking-[0.04em] mb-1">Interventions</p>
            <p className="text-2xl font-bold text-success font-mono">{totalInt}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 glass-panel-soft p-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search lecturer guides..."
              className="w-full pl-9 pr-3 py-2 rounded-lg glass-element text-heading text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveStream('')}
              className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all ${!activeStream ? 'bg-accent-dim text-accent border border-accent-subtle' : 'text-muted hover:text-body glass-pill'}`}
            >
              All
            </button>
            {Object.keys(streamCfg).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStream(activeStream === s ? '' : s)}
                className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all ${activeStream === s ? streamCfg[s].pill : 'text-muted hover:text-body glass-pill'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-[14px] glass-element flex items-center justify-center mb-4">
              <SearchX className="w-7 h-7 text-muted" />
            </div>
            <h3 className="text-[15px] font-semibold text-heading mb-1">No guides found</h3>
            <p className="text-[12.5px] text-muted max-w-xs">Try adjusting your search or stream filter.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3.5">
            {filtered.map((a) => {
              const cfg = streamCfg[a.stream];
              const Icon = cfg.icon;
              const misconceptions = a.lecturerGuide.commonMisconceptions?.length || 0;
              const interventions = a.lecturerGuide.interventions?.length || 0;

              return (
                <button
                  key={a.id}
                  onClick={() => setSelectedActivity(a)}
                  className="p-4 rounded-[12px] glass-element text-left group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-[9px] border flex items-center justify-center ${cfg.dim} ${cfg.subtle} ${cfg.text}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded glass-pill text-[10px] text-muted">
                      <Clock className="w-3 h-3" /> {a.durationMin}m
                    </span>
                  </div>

                  <h3 className="text-[14px] font-semibold text-heading mb-2 line-clamp-2 group-hover:text-accent transition-colors">{a.title}</h3>
                  <p className="text-[12px] text-body line-clamp-2 mb-3">{a.lecturerGuide.sessionGoal}</p>

                  <div className="flex items-center gap-3 text-[11px] text-muted mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-warning" /> {misconceptions}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success" /> {interventions}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-accent text-[11px] font-semibold">
                    Open Guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <ActivityPopup
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
        initialTab="lecturer"
      />
    </section>
  );
}
