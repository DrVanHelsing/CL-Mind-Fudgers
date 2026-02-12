import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { streams, modes, durationOptions, groupSizeOptions, weekSchedule } from '../data/activities';

/* ── Stream pills ──────────────────── */
const streamPill = {
  CL: { on: 'bg-cl-dim text-cl border-cl-subtle', off: 'bg-surface text-body border-edge hover:bg-surface-hover hover:border-edge-hover' },
  AL: { on: 'bg-al-dim text-al border-al-subtle', off: 'bg-surface text-body border-edge hover:bg-surface-hover hover:border-edge-hover' },
  QL: { on: 'bg-ql-dim text-ql border-ql-subtle', off: 'bg-surface text-body border-edge hover:bg-surface-hover hover:border-edge-hover' },
};

function FilterBar({
  search, setSearch,
  activeStream, setActiveStream,
  activeMode, setActiveMode,
  activeDuration, setActiveDuration,
  activeGroupSize, setActiveGroupSize,
  activeWeek, setActiveWeek,
  resultCount,
}) {
  const [expanded, setExpanded] = useState(false);

  const hasFilters = activeStream || activeMode || activeDuration || activeGroupSize || activeWeek || search;

  const clearAll = () => {
    setSearch('');
    setActiveStream('');
    setActiveMode('');
    setActiveDuration('');
    setActiveGroupSize('');
    setActiveWeek('');
  };

  return (
    <div className="glass-panel-soft overflow-hidden">
      {/* ── Top row: search + stream pills ── */}
      <div className="p-3 flex flex-col sm:flex-row gap-2.5">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search activities..."
            className="w-full pl-10 pr-4 py-2 rounded-lg glass-element text-heading text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
          />
        </div>

        {/* Stream pills */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveStream('')}
            className={`px-3 py-2 rounded-lg border text-[12px] font-medium transition-all duration-150 ${
              !activeStream
                ? 'bg-accent-dim text-accent border-accent-subtle'
                : 'glass-pill text-body border-edge hover:bg-surface-hover hover:border-edge-hover'
            }`}
          >
            All
          </button>
          {Object.keys(streams).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStream(activeStream === s ? '' : s)}
              className={`px-3 py-2 rounded-lg border text-[12px] font-medium transition-all duration-150 ${
                activeStream === s ? streamPill[s].on : streamPill[s].off
              }`}
            >
              {s}
            </button>
          ))}

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 p-2 rounded-lg glass-element text-body"
            title="More filters"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── CL Timeline ──────────────────── */}
      <AnimatePresence>
        {(activeStream === 'CL' || activeWeek) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-2.5 pt-2 border-t border-divider">
              <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Weekly Timeline</label>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                <button
                  onClick={() => setActiveWeek('')}
                  className={`shrink-0 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all duration-150 ${
                    !activeWeek
                      ? 'bg-cl-dim text-cl border-cl-subtle'
                      : 'glass-pill text-body border-edge hover:bg-surface-hover'
                  }`}
                >
                  All Weeks
                </button>
                {weekSchedule.map((w) => (
                  <button
                    key={w.week}
                    onClick={() => setActiveWeek(activeWeek === String(w.week) ? '' : String(w.week))}
                    title={`${w.topic}\nAI Focus: ${w.ai}`}
                    className={`shrink-0 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all duration-150 ${
                      activeWeek === String(w.week)
                        ? 'bg-cl-dim text-cl border-cl-subtle'
                        : 'glass-pill text-body border-edge hover:bg-surface-hover'
                    }`}
                  >
                    <span className="font-bold">W{w.week}</span>
                    <span className="hidden sm:inline text-muted ml-1">· {w.topic.length > 18 ? w.topic.slice(0, 18) + '…' : w.topic}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Expanded filters ─────────────── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 border-t border-divider grid sm:grid-cols-3 gap-3">
              {/* Mode */}
              <div>
                <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Mode</label>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(modes).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveMode(activeMode === m ? '' : m)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all duration-150 ${
                        activeMode === m
                          ? 'bg-accent-dim text-accent border-accent-subtle'
                          : 'glass-pill text-body border-edge hover:bg-surface-hover'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Max Duration</label>
                <select
                  value={activeDuration}
                  onChange={(e) => setActiveDuration(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg glass-element text-body text-[12px] focus:outline-none focus:border-accent appearance-none"
                >
                  <option value="">Any</option>
                  {durationOptions.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>

              {/* Group Size */}
              <div>
                <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Group Size</label>
                <select
                  value={activeGroupSize}
                  onChange={(e) => setActiveGroupSize(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg glass-element text-body text-[12px] focus:outline-none focus:border-accent appearance-none"
                >
                  <option value="">Any</option>
                  {groupSizeOptions.map((g) => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer: result count + clear ── */}
      <div className="px-3 py-2 border-t border-divider flex items-center justify-between bg-surface rounded-none">
        <span className="text-[11px] text-muted">
          {resultCount} {resultCount === 1 ? 'activity' : 'activities'} found
        </span>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-[11px] text-danger hover:text-danger/80 transition-colors"
          >
            <X className="w-3 h-3" /> Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
