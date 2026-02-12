import { motion } from 'framer-motion';
import { Clock, Users, ArrowUpRight, CalendarDays } from 'lucide-react';

/* ── static style maps ─────────────── */
const streamBadge = {
  CL: 'bg-cl-dim text-cl border border-cl-subtle',
  AL: 'bg-al-dim text-al border border-al-subtle',
  QL: 'bg-ql-dim text-ql border border-ql-subtle',
};

const modeBadge = {
  Unplugged: 'bg-surface-raised text-body border border-edge',
  Digital:   'bg-surface-raised text-body border border-edge',
  Hybrid:    'bg-surface-raised text-body border border-edge',
};

const iconBg = {
  CL: 'bg-cl-dim border-cl-subtle text-cl',
  AL: 'bg-al-dim border-al-subtle text-al',
  QL: 'bg-ql-dim border-ql-subtle text-ql',
};

function ActivityCard({ activity, index = 0, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: index * 0.04, duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className="group flex flex-col gap-2 p-3.5 rounded-[10px] glass-element cursor-pointer"
    >
      {/* Top row – badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.06em] ${streamBadge[activity.stream]}`}>
          {activity.stream}
        </span>
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${modeBadge[activity.mode]}`}>
          {activity.mode}
        </span>
        {activity.stream === 'CL' && activity.week && (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-cl-dim text-cl border border-cl-subtle text-[10px] font-semibold">
            <CalendarDays className="w-2.5 h-2.5" />
            Wk {activity.week}
          </span>
        )}
        <span className="ml-auto px-2 py-0.5 rounded-md bg-surface-raised border border-edge text-[10px] font-semibold text-muted font-mono">
          {activity.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[13px] font-semibold text-heading leading-snug group-hover:text-accent transition-colors duration-150">
        {activity.title}
      </h3>

      {/* Objective */}
      <p className="text-[12px] text-body leading-relaxed line-clamp-2">
        {activity.objective}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-[11px] text-muted mt-auto pt-1">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" /> {activity.durationMin} min
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" /> {activity.groupSize}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-150" />
      </div>

      {/* Skills */}
      {activity.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-edge">
          {activity.skills.slice(0, 4).map((s) => (
            <span key={s} className="px-2 py-0.5 rounded-md bg-surface-raised text-[10px] text-muted">
              {s}
            </span>
          ))}
          {activity.skills.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-surface-raised text-[10px] text-muted">
              +{activity.skills.length - 4}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default ActivityCard;
