import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  Users,
  Target,
  Package,
  ListOrdered,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Printer,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
  ClipboardCheck,
  MessageSquare,
  Wrench,
  Award,
  LayoutGrid,
  Footprints,
} from 'lucide-react';

import {
  HeroIllustration,
  SkillsRadar,
  DurationTimeline,
  DifficultyMeter,
  GroupSizeVisual,
  StatsAtGlance,
  ProcedureFlowDiagram,
  StepIllustration,
  FacilitationGantt,
  RubricChart,
  LearningJourneyMap,
  MaterialsVisualGrid,
  EngagementCurve,
  TipsVisual,
  MisconceptionsDiagram,
} from './ActivityVisuals';

/* ── stream colour maps ───────────── */
const topGradient = {
  CL: 'from-cl to-cl/30',
  AL: 'from-al to-al/30',
  QL: 'from-ql to-ql/30',
};
const streamBadge = {
  CL: 'bg-cl-dim text-cl border border-cl-subtle',
  AL: 'bg-al-dim text-al border border-al-subtle',
  QL: 'bg-ql-dim text-ql border border-ql-subtle',
};
const streamIcon = {
  CL: 'bg-cl-dim border-cl-subtle text-cl',
  AL: 'bg-al-dim border-al-subtle text-al',
  QL: 'bg-ql-dim border-ql-subtle text-ql',
};

/* ═══════════════════════════════════════
   Main Popup
   ═══════════════════════════════════════ */
function ActivityPopup({ activity, isOpen, onClose, initialTab = 'overview' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [expandedStep, setExpandedStep] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => { if (isOpen) setActiveTab(initialTab); }, [isOpen, initialTab]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  if (!activity) return null;

  const tabs = [
    { id: 'overview',  label: 'Overview',       icon: Target },
    { id: 'procedure', label: 'Procedure',      icon: ListOrdered },
    { id: 'student',   label: 'Student Guide',  icon: GraduationCap },
    { id: 'lecturer',  label: 'Lecturer Guide', icon: BookOpen },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-[9000] flex items-center justify-center glass-overlay p-3 sm:p-4"
        >
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-[96vw] max-w-6xl h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] flex flex-col glass-popup border border-divider rounded-[14px] shadow-modal overflow-hidden"
          >
            {/* ── Thin stream colour bar ─── */}
            <div className={`h-0.5 flex-shrink-0 bg-gradient-to-r ${topGradient[activity.stream]}`} />

            {/* ── Header ────────────────── */}
            <div className="flex items-start justify-between gap-3 px-4 pt-3.5 pb-3 border-b border-divider bg-surface glass-card rounded-t-[13px]">
              <div className="flex items-start gap-3 min-w-0">
                <div className={`w-10 h-10 rounded-[10px] border flex-shrink-0 flex items-center justify-center ${streamIcon[activity.stream]}`}>
                  <Target className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.06em] ${streamBadge[activity.stream]}`}>
                      {activity.stream}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-raised text-[10px] font-medium text-body border border-edge">
                      {activity.mode}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-raised text-[10px] font-semibold text-muted font-mono border border-edge shadow-[0_2px_0_var(--theme-edge)]">
                      {activity.difficulty}
                    </span>
                  </div>
                  <h2 className="text-[17px] font-bold text-heading tracking-[-0.01em] leading-snug">{activity.title}</h2>
                  <div className="flex items-center gap-4 mt-1.5 text-[12px] text-body">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {activity.durationMin} min</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {activity.groupSize}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 no-print">
                <button onClick={() => window.print()} className="w-8 h-8 rounded-lg bg-surface glass-card border border-edge flex items-center justify-center text-muted hover:text-body transition-all" title="Print">
                  <Printer className="w-4 h-4" />
                </button>
                <button onClick={onClose} className="w-8 h-8 rounded-lg bg-surface glass-card border border-edge flex items-center justify-center text-muted hover:bg-danger-dim hover:text-danger transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Tabs ──────────────────── */}
            <div className="flex gap-0.5 px-4 border-b border-divider bg-surface glass-card no-print flex-shrink-0 overflow-x-auto scrollbar-thin">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const on = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 text-[11px] sm:text-[12px] font-medium border-b-2 whitespace-nowrap transition-all duration-150 ${
                      on
                        ? 'text-accent border-accent'
                        : 'text-body border-transparent hover:text-heading'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ── Content ───────────────── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
              <AnimatePresence mode="wait">
                {activeTab === 'overview'  && <OverviewTab  key="o" activity={activity} />}
                {activeTab === 'procedure' && <ProcedureTab key="p" activity={activity} expanded={expandedStep} setExpanded={setExpandedStep} />}
                {activeTab === 'student'   && <StudentTab   key="s" activity={activity} />}
                {activeTab === 'lecturer'  && <LecturerTab  key="l" activity={activity} />}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Section helper ───────────────── */
function Section({ icon: Icon, title, accent = 'text-accent', iconBg = 'bg-accent-dim border-accent-subtle', children }) {
  return (
    <section className="mb-5 last:mb-0 rounded-[10px] bg-surface glass-card border border-edge p-3.5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-7 h-7 rounded-[8px] border flex items-center justify-center ${iconBg} ${accent}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-[13px] font-bold text-body uppercase tracking-[0.06em]">{title}</h3>
      </div>
      {children}
    </section>
  );
}

/* ── Callout helper ───────────────── */
function Callout({ tag, children, variant = 'accent' }) {
  const styles = {
    accent:  'bg-accent-dim border-l-accent/25',
    warning: 'bg-warning-dim border-l-warning/40',
    success: 'bg-success-dim border-l-success/40',
    danger:  'bg-danger-dim border-l-danger/40',
  };
  const tagColor = {
    accent:  'text-accent-muted',
    warning: 'text-warning/55',
    success: 'text-success/55',
    danger:  'text-danger/55',
  };
  return (
    <div className={`p-3 rounded-[6px] border-l-[3px] bg-surface border border-edge ${styles[variant]}`}>
      {tag && <span className={`block text-[10px] font-bold uppercase tracking-[0.05em] mb-0.5 ${tagColor[variant]}`}>{tag}</span>}
      <div className="text-[12px] text-body leading-relaxed">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════
   OVERVIEW TAB
   ═══════════════════════════════════════ */
function OverviewTab({ activity }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

      {/* Stats at a glance — compact row */}
      <div className="mb-4">
        <StatsAtGlance activity={activity} />
      </div>

      {/* Hero illustration — compact */}
      <HeroIllustration heroGraphic={activity.heroGraphic} stream={activity.stream} className="mb-4" />

      <Section icon={Target} title="Objective">
        <p className="text-[14px] text-heading leading-relaxed">{activity.objective}</p>
      </Section>

      {/* Skills radar + Difficulty + Group size — 2-col with stacked right */}
      <div className="grid sm:grid-cols-[1.4fr_1fr] gap-2.5 mb-5">
        <SkillsRadar skills={activity.skills} stream={activity.stream} />
        <div className="flex flex-col gap-2.5">
          <DifficultyMeter difficulty={activity.difficulty} />
          <GroupSizeVisual groupSize={activity.groupSize} stream={activity.stream} />
        </div>
      </div>

      {/* Duration timeline */}
      <div className="mb-5">
        <DurationTimeline procedure={activity.procedure} stream={activity.stream} />
      </div>

      <Section icon={Package} title="Materials Required">
        <MaterialsVisualGrid materials={activity.materials} stream={activity.stream} />
      </Section>

      <Section icon={ListOrdered} title="Setup">
        <div className="space-y-2">
          {activity.setup.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-dim text-accent text-[13px] font-bold font-mono flex items-center justify-center">
                {i + 1}
              </div>
              <span className="text-[12.5px] text-body pt-1">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={GraduationCap} title="Learning Outcomes" accent="text-warning" iconBg="bg-warning-dim border-warning/20">
        <LearningJourneyMap learningOutcomes={activity.learningOutcomes} stream={activity.stream} />
      </Section>

      <Section icon={ClipboardCheck} title="Replicability" accent="text-success" iconBg="bg-success-dim border-success/20">
        <div className="space-y-2">
          <Callout tag="Key Question" variant="accent">{activity.replicabilityCheck.question}</Callout>
          <Callout tag="Success Criteria" variant="success">{activity.replicabilityCheck.successCriteria}</Callout>
          <Callout tag="If Unsuccessful" variant="danger">{activity.replicabilityCheck.failureAnalysis}</Callout>
        </div>
      </Section>

      <Section icon={MessageSquare} title="Debrief Questions">
        <div className="space-y-2">
          {activity.debriefQuestions.map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-[10px] bg-surface glass-card border border-edge">
              <HelpCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-[12.5px] text-body">{q}</span>
            </div>
          ))}
        </div>
      </Section>

      {activity.variations && activity.variations.length > 0 && (
        <Section icon={LayoutGrid} title="Variations">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {activity.variations.map((v, i) => (
                <div key={i} className="p-4 rounded-[10px] transition-all duration-150 bg-surface glass-card border border-edge">
                <h4 className="text-[14px] font-semibold text-heading mb-1">{v.name}</h4>
                <p className="text-[12px] text-body leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   PROCEDURE TAB
   ═══════════════════════════════════════ */
function ProcedureTab({ activity, expanded, setExpanded }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

      {/* Overview flow diagram */}
      <ProcedureFlowDiagram procedure={activity.procedure} stream={activity.stream} />

      {/* Duration timeline */}
      <div className="mb-4">
        <DurationTimeline procedure={activity.procedure} stream={activity.stream} />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[12px] font-bold text-body uppercase tracking-[0.06em] flex items-center gap-2">
          <Footprints className="w-3.5 h-3.5 text-accent" /> Step-by-Step Procedure
        </h3>
        <span className="text-[10px] text-muted font-mono">Total {activity.durationMin} min</span>
      </div>

      {/* Timeline */}
      <div className="relative ml-3">
        {activity.procedure.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.2 }}
            className="relative pl-7 pb-4 last:pb-0"
          >
            {/* connector */}
            {i < activity.procedure.length - 1 && (
              <div className="absolute left-[9px] top-6 w-px h-[calc(100%-10px)] bg-gradient-to-b from-accent/30 to-edge" />
            )}

            {/* dot */}
            <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-accent text-invert text-[10px] font-bold font-mono flex items-center justify-center">
              {step.step}
            </div>

            {/* card */}
            <div
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`rounded-[8px] cursor-pointer transition-all duration-150 bg-surface glass-card border border-edge ${expanded === i ? 'border-accent/30' : ''}`}
            >
              <div className="p-3 flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-[13px] font-semibold text-heading">{step.title}</h4>
                    <span className="px-1.5 py-0.5 rounded-md bg-accent-dim text-accent text-[9px] font-medium font-mono">
                      {step.duration} min
                    </span>
                  </div>
                  <p className="text-[12px] text-body leading-relaxed">{step.description}</p>
                </div>
                {expanded === i
                  ? <ChevronUp className="w-4 h-4 text-muted flex-shrink-0 mt-1" />
                  : <ChevronDown className="w-4 h-4 text-muted flex-shrink-0 mt-1" />
                }
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-edge">
                      <StepIllustration graphic={step.graphic} stream={activity.stream} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deliverable */}
      <div className="mt-4 p-3 rounded-[8px] bg-surface glass-card border border-edge bg-accent-dim border-accent-subtle">
        <div className="flex items-center gap-2 mb-1.5">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <h4 className="text-[13px] font-bold text-heading">Expected Deliverable</h4>
        </div>
        <p className="text-[12.5px] text-body leading-relaxed">{activity.deliverable}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   STUDENT GUIDE TAB
   ═══════════════════════════════════════ */
function StudentTab({ activity }) {
  const g = activity.studentGuide;
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

      <Section icon={GraduationCap} title="What You Will Learn" accent="text-al" iconBg="bg-al-dim border-al-subtle">
        <div className="p-4 rounded-[10px] bg-al-dim border border-al-subtle">
          <p className="text-[14px] text-heading leading-relaxed font-medium">{g.whatYouLearn}</p>
        </div>
      </Section>

      {/* Learning outcomes journey map */}
      <div className="mb-5">
        <LearningJourneyMap learningOutcomes={activity.learningOutcomes} stream={activity.stream} />
      </div>

      {/* Skills radar + difficulty */}
      <div className="grid sm:grid-cols-[1.4fr_1fr] gap-2.5 mb-5">
        <SkillsRadar skills={activity.skills} stream={activity.stream} />
        <DifficultyMeter difficulty={activity.difficulty} />
      </div>

      <Section icon={Package} title="What to Bring">
        <p className="text-[12.5px] text-body">{g.whatToBring}</p>
      </Section>

      <Section icon={Lightbulb} title="Tips for Success" accent="text-warning" iconBg="bg-warning-dim border-warning/20">
        <TipsVisual tips={g.tips} stream={activity.stream} />
      </Section>

      <Section icon={MessageSquare} title="Reflection Prompts">
        <div className="space-y-2">
          {g.reflectionPrompts.map((p, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-[10px] bg-surface glass-card border border-edge">
              <HelpCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-[12.5px] text-body leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {g.extensionChallenge && (
        <div className="p-4 rounded-[10px] bg-surface glass-card border border-edge bg-accent-dim border-accent-subtle">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <h4 className="text-[14px] font-semibold text-heading">Extension Challenge</h4>
          </div>
          <p className="text-[12.5px] text-body leading-relaxed">{g.extensionChallenge}</p>
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   LECTURER GUIDE TAB
   ═══════════════════════════════════════ */
function LecturerTab({ activity }) {
  const g = activity.lecturerGuide;
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

      <Section icon={Target} title="Session Goal">
        <div className="p-4 rounded-[10px] bg-accent-dim border border-accent-subtle">
          <p className="text-[14px] text-heading leading-relaxed font-medium">{g.sessionGoal}</p>
        </div>
      </Section>

      {/* Facilitation Gantt chart */}
      <div className="mb-5">
        <FacilitationGantt
          facilitationScript={g.facilitationScript}
          totalDuration={activity.durationMin}
          stream={activity.stream}
        />
      </div>

      {/* Engagement curve + stats row */}
      <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
        <EngagementCurve procedure={activity.procedure} stream={activity.stream} />
        <GroupSizeVisual groupSize={activity.groupSize} stream={activity.stream} />
      </div>

      <Section icon={LayoutGrid} title="Room Setup">
        <p className="text-[12.5px] text-body leading-relaxed">{g.roomSetup}</p>
      </Section>

      <Section icon={Clock} title="Facilitation Timeline">
        <div className="rounded-[10px] bg-surface glass-card border border-edge overflow-hidden divide-y divide-edge">
          {g.facilitationScript.map((row, i) => (
            <div key={i} className="flex items-start gap-4 px-4 py-3 hover:bg-surface-hover transition-colors">
              <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-accent-dim text-accent text-[11px] font-semibold font-mono whitespace-nowrap mt-0.5">
                {row.time}
              </span>
              <p className="text-[12.5px] text-body leading-relaxed">{row.action}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={AlertTriangle} title="Common Misconceptions" accent="text-warning" iconBg="bg-warning-dim border-warning/20">
        <MisconceptionsDiagram misconceptions={g.commonMisconceptions} />
        <div className="space-y-2 mt-2">
          {g.commonMisconceptions.map((m, i) => (
            <Callout key={i} variant="warning">{m}</Callout>
          ))}
        </div>
      </Section>

      <Section icon={Wrench} title="Suggested Interventions" accent="text-success" iconBg="bg-success-dim border-success/20">
        <div className="space-y-2">
          {g.interventions.map((item, i) => (
            <Callout key={i} variant="success">{item}</Callout>
          ))}
        </div>
      </Section>

      <Section icon={CheckCircle2} title="Formative Checks">
        <ul className="space-y-1.5">
          {g.formativeChecks.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] text-body">
              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={Award} title="Quick Rubric" accent="text-al" iconBg="bg-al-dim border-al-subtle">
        {/* Visual rubric chart */}
        <div className="mb-4">
          <RubricChart rubricSnapshot={g.rubricSnapshot} />
        </div>
        {/* Detailed rubric table */}
        <div className="rounded-[10px] bg-surface glass-card border border-edge overflow-hidden divide-y divide-edge">
          {Object.entries(g.rubricSnapshot).map(([level, desc]) => {
            const cfg = {
              excellent:  { pill: 'bg-success-dim text-success', row: 'bg-success-dim/40' },
              good:       { pill: 'bg-accent-dim text-accent',   row: 'bg-accent-dim/40' },
              developing: { pill: 'bg-warning-dim text-warning', row: 'bg-warning-dim/40' },
              beginning:  { pill: 'bg-danger-dim text-danger',   row: 'bg-danger-dim/40' },
            }[level] || { pill: 'bg-surface text-muted', row: '' };
            return (
              <div key={level} className={`${cfg.row} px-4 py-3 flex items-start gap-3`}>
                <span className={`flex-shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.04em] capitalize ${cfg.pill}`}>
                  {level}
                </span>
                <p className="text-[12.5px] text-body">{desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="p-4 rounded-[10px] bg-surface glass-card border border-edge">
        <div className="flex items-center gap-2 mb-1.5">
          <BookOpen className="w-4 h-4 text-muted" />
          <h4 className="text-[13px] font-bold text-heading">Post-Class Reflection</h4>
        </div>
        <p className="text-[12.5px] text-body leading-relaxed">{g.postClassReflection}</p>
      </div>

      {/* Research References — Lecturer only */}
      {activity.references && activity.references.length > 0 && (
        <div className="mt-5">
          <Section icon={BookOpen} title="Research References" accent="text-muted" iconBg="bg-surface-raised border-edge">
            <div className="space-y-2">
              {activity.references.map((ref, i) => (
                <div key={i} className="p-3 rounded-[8px] bg-surface glass-card border border-edge">
                  <p className="text-[11.5px] text-body leading-relaxed">
                    <span className="font-semibold text-heading">{ref.author}</span>{' '}
                    <span className="text-muted">({ref.year}).</span>{' '}
                    <em>{ref.title}.</em>{' '}
                    <span className="text-muted">{ref.source}.</span>
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}
    </motion.div>
  );
}

export default ActivityPopup;
