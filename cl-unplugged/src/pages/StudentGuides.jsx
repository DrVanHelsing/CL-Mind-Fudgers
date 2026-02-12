import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Monitor, PenTool, BarChart3,
  GraduationCap, SearchX, Clock, Target,
  ArrowUpRight,
} from 'lucide-react';
import { activities } from '../data/activities';
import ActivityPopup from '../components/ActivityPopup';

const streamConfig = {
  CL: { icon: Monitor, text: 'text-cl', dim: 'bg-cl-dim', subtle: 'border-cl-subtle', pill: 'bg-cl-dim text-cl border border-cl-subtle' },
  AL: { icon: PenTool, text: 'text-al', dim: 'bg-al-dim', subtle: 'border-al-subtle', pill: 'bg-al-dim text-al border border-al-subtle' },
  QL: { icon: BarChart3, text: 'text-ql', dim: 'bg-ql-dim', subtle: 'border-ql-subtle', pill: 'bg-ql-dim text-ql border border-ql-subtle' },
};
const streamLabels = { CL: 'Computer Literacy', AL: 'Academic Literacy', QL: 'Quantitative Literacy' };

export default function StudentGuides() {
  const [search, setSearch] = useState('');
  const [activeStream, setActiveStream] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      if (!a.studentGuide) return false;
      if (activeStream && a.stream !== activeStream) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = [a.title, a.stream, a.studentGuide.whatYouLearn, ...(a.studentGuide.tips || [])].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [search, activeStream]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((a) => { (g[a.stream] ||= []).push(a); });
    return g;
  }, [filtered]);

  const total = filtered.length;

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="mb-8 glass-panel-soft p-5">
          <h1 className="text-2xl font-bold text-heading flex items-center gap-2 mb-2">
            <GraduationCap className="w-6 h-6 text-accent" /> Student Guides
          </h1>
          <p className="text-sm text-body max-w-2xl">
            Focused guide explorer: pick an activity card and open a full-screen student guide view with visuals,
            prep, steps, and reflection prompts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 glass-panel-soft p-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search student guides..."
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
            {Object.keys(streamConfig).map((s) => (
              <button
                key={s}
                onClick={() => setActiveStream(activeStream === s ? '' : s)}
                className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all ${activeStream === s ? streamConfig[s].pill : 'text-muted hover:text-body glass-pill'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-muted ml-auto">{total} guide{total !== 1 ? 's' : ''}</span>
        </div>

        {total === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-[14px] glass-element flex items-center justify-center mb-4">
              <SearchX className="w-7 h-7 text-muted" />
            </div>
            <h3 className="text-[15px] font-semibold text-heading mb-1">No guides found</h3>
            <p className="text-[12.5px] text-muted max-w-xs">Try adjusting your search or stream filter.</p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([stream, acts]) => {
              const cfg = streamConfig[stream];
              const SIcon = cfg.icon;

              return (
                <motion.div key={stream} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-[10px] border flex items-center justify-center ${cfg.dim} ${cfg.subtle} ${cfg.text}`}>
                      <SIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-[15px] font-bold text-heading">{streamLabels[stream]}</h2>
                      <p className="text-[11px] text-muted">{acts.length} guide{acts.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3.5">
                    {acts.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setSelectedActivity(a)}
                        className="p-4 rounded-[12px] glass-element text-left group"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-[14px] font-semibold text-heading group-hover:text-accent transition-colors line-clamp-2">{a.title}</h3>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded glass-pill text-[10px] text-muted">
                            <Clock className="w-3 h-3" /> {a.durationMin}m
                          </span>
                        </div>
                        <p className={`text-[12px] ${cfg.text} mb-2 line-clamp-2`}>
                          {a.studentGuide.whatYouLearn}
                        </p>
                        <p className="text-[11px] text-body line-clamp-2 mb-3">
                          {a.studentGuide.whatToBring}
                        </p>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="inline-flex items-center gap-1.5 text-muted">
                            <Target className="w-3.5 h-3.5 text-accent" /> {(a.studentGuide.reflectionPrompts || []).length} prompts
                          </span>
                          <span className="inline-flex items-center gap-1 text-accent font-semibold">
                            Open Guide <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <ActivityPopup
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
        initialTab="student"
      />
    </section>
  );
}
