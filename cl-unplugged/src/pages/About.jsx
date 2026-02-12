import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Monitor, PenTool, BarChart3,
  Brain, Users, Lightbulb, Eye, RefreshCw, Puzzle,
  Sparkles, GraduationCap, Target,
  CheckCircle2, BookOpen,
} from 'lucide-react';
import { streams } from '../data/activities';

/* ── stream blocks ─────────────────── */
const streamBlocks = [
  {
    id: 'CL', title: 'Computer Literacy', icon: Monitor,
    colour: { text: 'text-cl', dim: 'bg-cl-dim', subtle: 'border-cl-subtle', badge: 'bg-cl-dim text-cl border border-cl-subtle' },
    examples: ['Binary sorting networks', 'Error-detection card games', 'Offline algorithm races'],
  },
  {
    id: 'AL', title: 'Academic Literacy', icon: PenTool,
    colour: { text: 'text-al', dim: 'bg-al-dim', subtle: 'border-al-subtle', badge: 'bg-al-dim text-al border border-al-subtle' },
    examples: ['Source-evaluation workshops', 'Collaborative outlining', 'Citation scavenger hunts'],
  },
  {
    id: 'QL', title: 'Quantitative Literacy', icon: BarChart3,
    colour: { text: 'text-ql', dim: 'bg-ql-dim', subtle: 'border-ql-subtle', badge: 'bg-ql-dim text-ql border border-ql-subtle' },
    examples: ['Estimation challenges', 'Chart-building with manipulatives', 'Data-storytelling exercises'],
  },
];

/* ── benefits ──────────────────────── */
const benefits = [
  { icon: Brain,     title: 'Deep Understanding',  text: 'Concrete activities build intuition before abstraction.' },
  { icon: Users,     title: 'Inclusive',            text: 'No devices needed — every student can participate equally.' },
  { icon: Lightbulb, title: 'Engaging',             text: 'Hands-on tasks increase motivation and retention.' },
  { icon: Eye,       title: 'Observable',           text: 'Facilitators can see thinking in real time, not just on screens.' },
  { icon: RefreshCw, title: 'Replicable',           text: 'Built-in checks ensure activities work across contexts.' },
  { icon: Puzzle,    title: 'Flexible',             text: 'Adaptable for different class sizes, durations, and streams.' },
];

/* ── pedagogical principles ────────── */
const principles = [
  { title: 'Constructivism',        text: 'Learners build knowledge through hands-on exploration rather than passive reception.' },
  { title: 'Social Learning',       text: 'Group work and peer discussion deepen understanding and develop communication skills.' },
  { title: 'Concrete Before Abstract', text: 'Physical manipulatives create mental models that transfer to digital contexts.' },
  { title: 'Reflective Practice',   text: 'Debrief prompts and guided reflection turn activities into lasting learning.' },
];

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <div>

      {/* ── HERO ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-accent/[0.03] blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
            <div className="glass-panel-soft p-8 sm:p-10">
            <motion.span variants={fade} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-dim border border-accent-subtle text-accent text-[11px] font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" /> About This Project
            </motion.span>
            <motion.h1 variants={fade} className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight mb-4">
              Why Unplugged?
            </motion.h1>
            <motion.p variants={fade} className="max-w-2xl mx-auto text-[15px] text-body leading-relaxed">
              Screen-free activities that teach computing, academic, and quantitative literacies through
              active, collaborative, and reflective learning experiences.
            </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-soft p-6 sm:p-8">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-heading mb-2">The Unplugged Advantage</h2>
            <p className="text-body text-sm max-w-md mx-auto">Research-backed reasons hands-on learning outperforms screen-first approaches.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-5 rounded-[10px] glass-element"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-accent-dim border border-accent-subtle text-accent flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-[14px] font-bold text-heading mb-1">{b.title}</h3>
                  <p className="text-[12.5px] text-body leading-relaxed">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* ── PEDAGOGICAL PRINCIPLES ──── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-heading mb-2">Pedagogical Foundations</h2>
            <p className="text-body text-sm max-w-md mx-auto">Every activity is designed around proven educational theories.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative p-5 rounded-[10px] glass-element"
              >
                <span className="absolute top-3 right-4 text-[11px] font-bold text-muted font-mono">0{i + 1}</span>
                <h3 className="text-[14px] font-bold text-heading mb-1">{p.title}</h3>
                <p className="text-[12.5px] text-body leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE STREAMS ──────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-soft p-6 sm:p-8">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold text-heading mb-2">Three Literacy Streams</h2>
            <p className="text-body text-sm max-w-md mx-auto">Complementary domains that develop well-rounded first-year students.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {streamBlocks.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-5 rounded-[10px] ${s.colour.dim} border ${s.colour.subtle} glass-card`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-[10px] border flex items-center justify-center ${s.colour.badge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-[15px] font-bold ${s.colour.text} mb-1`}>{s.title}</h3>
                      <p className="text-[12.5px] text-body leading-relaxed mb-3">{streams[s.id].description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.examples.map((ex) => (
                          <span key={ex} className="px-2 py-0.5 rounded glass-pill text-[11px] text-muted">{ex}</span>
                        ))}
                      </div>
                    </div>
                  </div>
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
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-heading mb-3">Get Started Today</h2>
            <p className="text-body text-sm max-w-md mx-auto mb-8">Browse activities, print student guides, and run your first unplugged session.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/activities"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-invert font-semibold text-sm hover:opacity-90 transition-all"
              >
                <Target className="w-4 h-4" /> Browse Activities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/student-guides"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-element text-body font-semibold text-sm hover:text-heading"
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
      </section>
    </div>
  );
}
