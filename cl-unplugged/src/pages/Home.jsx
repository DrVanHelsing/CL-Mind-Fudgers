import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Monitor,
  PenTool,
  BarChart3,
  BookOpen,
  Users,
  Layers,
  CheckCircle2,
  Zap,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';
import { activities, streams } from '../data/activities';

/* ── stream card data ──────────────── */
const streamCards = [
  {
    id: 'CL', title: 'Computer Literacy', icon: Monitor,
    colour: { dim: 'bg-cl-dim', border: 'border-cl-subtle', text: 'text-cl', icon: 'bg-cl-dim border-cl-subtle text-cl' },
    description: streams.CL.description,
  },
  {
    id: 'AL', title: 'Academic Literacy', icon: PenTool,
    colour: { dim: 'bg-al-dim', border: 'border-al-subtle', text: 'text-al', icon: 'bg-al-dim border-al-subtle text-al' },
    description: streams.AL.description,
  },
  {
    id: 'QL', title: 'Quantitative Literacy', icon: BarChart3,
    colour: { dim: 'bg-ql-dim', border: 'border-ql-subtle', text: 'text-ql', icon: 'bg-ql-dim border-ql-subtle text-ql' },
    description: streams.QL.description,
  },
];

const steps = [
  { icon: Layers,    title: 'Choose',  text: 'Pick an activity by stream, mode, or skill.' },
  { icon: BookOpen,  title: 'Prepare', text: 'Follow the setup guide and gather materials.' },
  { icon: Users,     title: 'Engage',  text: 'Run the hands-on activity with your students.' },
  { icon: Lightbulb, title: 'Reflect', text: 'Debrief, assess, and iterate for next time.' },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  const total     = activities.length;
  // mode counts removed — "unplugged" refers to the pedagogical approach, not mode
  const nStreams   = Object.keys(streams).length;

  return (
    <div>

      {/* ── HERO ───────────────────────── */}
      <section className="relative overflow-hidden">
        {/* decorative glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-1/4 w-[420px] h-[420px] rounded-full bg-accent/[0.04] blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-al/[0.03] blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-ql/[0.03] blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>

            <div className="glass-panel-soft p-8 sm:p-10">

            <motion.span variants={fade} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-dim border border-accent-subtle text-accent text-[11px] font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> First-Year Computer Literacy
            </motion.span>

            <motion.h1 variants={fade} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.1] mb-5 tracking-tight">
              Learn Computing<br />
              <span className="bg-gradient-to-r from-cl via-al to-ql bg-clip-text text-transparent">
                Through Problem Solving
              </span>
            </motion.h1>

            <motion.p variants={fade} className="max-w-2xl mx-auto text-[15px] text-body leading-relaxed mb-10">
              Hands-on activities that teach first-year students essential computing,
              academic, and quantitative skills through problem-solving and out-of-the-box thinking.
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/activities"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-invert font-semibold text-sm hover:opacity-90 transition-all"
              >
                Explore Activities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg glass-element text-body font-semibold text-sm hover:text-heading"
              >
                Our Approach
              </Link>
            </motion.div>

            <motion.div variants={fade} className="flex items-center justify-center gap-5 mt-10 text-[12px] text-muted">
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-warning" /> {total} Activities</span>
              <span className="w-px h-3.5 bg-edge" />
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-success" /> {nStreams} Streams</span>
              <span className="w-px h-3.5 bg-edge" />
              <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-accent" /> 13 Weeks</span>
            </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ── STREAMS ────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-soft p-6 sm:p-8">

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-heading mb-3">Three Learning Streams</h2>
            <p className="text-body text-sm max-w-md mx-auto">Each stream targets a different foundational literacy — all taught through engaging, hands-on activities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {streamCards.map((s, i) => {
              const Icon = s.icon;
              const count = activities.filter((a) => a.stream === s.id).length;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/activities?stream=${s.id}`}
                    className={`block p-5 rounded-[10px] ${s.colour.dim} border ${s.colour.border} transition-all duration-150 group glass-element`}
                  >
                    <div className={`w-10 h-10 rounded-[10px] border flex items-center justify-center mb-4 ${s.colour.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-[15px] font-bold ${s.colour.text} mb-2`}>{s.title}</h3>
                    <p className="text-[12.5px] text-body leading-relaxed mb-3">{s.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted group-hover:text-body transition-colors">
                      {count} {count === 1 ? 'activity' : 'activities'} <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-soft p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-heading mb-3">How It Works</h2>
            <p className="text-body text-sm max-w-md mx-auto">Four simple steps from choosing an activity to embedding reflective practice.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative p-5 rounded-[10px] text-center glass-element"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-accent-dim border border-accent-subtle text-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="absolute top-3 right-4 text-[11px] font-bold text-muted font-mono">0{i + 1}</span>
                  <h3 className="text-[14px] font-bold text-heading mb-1">{step.title}</h3>
                  <p className="text-[12px] text-body leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel-soft p-6 sm:p-8 bg-accent-dim border-accent-subtle">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-heading mb-3">Ready to Transform Your Classroom?</h2>
            <p className="text-body text-sm max-w-md mx-auto mb-8">Guides for students and lecturers are included with every activity.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/student-guides"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-invert font-semibold text-sm hover:opacity-90 transition-all"
              >
                <GraduationCap className="w-4 h-4" /> Student Guides
              </Link>
              <Link
                to="/lecturer-guides"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-element text-body font-semibold text-sm hover:text-heading"
              >
                <BookOpen className="w-4 h-4" /> Lecturer Guides
              </Link>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
