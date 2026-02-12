import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Triangle, ArrowRightLeft, FileText, Layers,
  BarChart2, PieChart, Shuffle, Search, BookOpen,
  Beaker, Ruler, Target, Dice5, GitBranch,
  Play, Pause, RotateCcw,
} from 'lucide-react';
import { useAnimations } from '../context/AnimationContext';

/* ═══════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════ */

/* Resolve current stream colour from CSS var for theme compat */
function streamColor(stream) {
  if (typeof window === 'undefined') return '#58a6ff';
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(`--theme-${stream.toLowerCase()}`).trim();
  return v || '#58a6ff';
}

const DIFF_CFG = {
  Beginner:     { colour: '#3fb950', label: 'BEG', pct: 33 },
  Intermediate: { colour: '#d29922', label: 'INT', pct: 66 },
  Advanced:     { colour: '#f85149', label: 'ADV', pct: 100 },
};

/* ═══════════════════════════════════════
   ANIMATION CONTROL WRAPPER
   Renders play|pause|restart controls
   ═══════════════════════════════════════ */
function AnimCtrl({ children, title, className = '' }) {
  const { enabled } = useAnimations();
  const [key, setKey] = useState(0);
  const [localPaused, setLocalPaused] = useState(false);
  const playing = enabled && !localPaused;

  return (
    <div className={`rounded-[10px] glass-element overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-3 py-1 border-b border-edge glass-inset rounded-none">
        <span className="text-[10px] font-bold text-muted uppercase tracking-[0.06em]">{title}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLocalPaused(!localPaused)}
            className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-heading glass-pill transition-all"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => { setKey(k => k + 1); setLocalPaused(false); }}
            className="w-6 h-6 rounded flex items-center justify-center text-muted hover:text-heading glass-pill transition-all"
            aria-label="Restart"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="p-2">
        <AnimatePresence mode="wait">
          <motion.div key={key}>
            {typeof children === 'function' ? children(playing) : children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   1. HERO ILLUSTRATION
   Activity-specific animated diagrams
   ═══════════════════════════════════════ */

const heroMeta = {
  'triangle-pattern':        { Icon: Triangle,      label: 'Triangle Counting' },
  'sorting-network':         { Icon: Shuffle,        label: 'Sorting Network' },
  'instruction-flow':        { Icon: FileText,       label: 'Instruction Flow' },
  'algorithm-cards':         { Icon: Layers,         label: 'Algorithm Cards' },
  'word-formatting':         { Icon: FileText,       label: 'Word Formatting' },
  'excel-cleaning':          { Icon: BarChart2,      label: 'Data Cleaning' },
  'chart-critique':          { Icon: PieChart,       label: 'Chart Selection' },
  'sorting-wall':            { Icon: ArrowRightLeft, label: 'Claim Sorting' },
  'paraphrase-relay':        { Icon: BookOpen,       label: 'Paraphrase Relay' },
  'argument-reconstruction': { Icon: GitBranch,      label: 'Argument Tree' },
  'source-credibility':      { Icon: Search,         label: 'Source Evaluation' },
  'number-line':             { Icon: Ruler,          label: 'Number Line' },
  'ratio-scaling':           { Icon: Beaker,         label: 'Ratio Scaling' },
  'probability-tokens':      { Icon: Dice5,          label: 'Probability' },
  'graph-matching':          { Icon: BarChart2,      label: 'Graph Match' },
  'sampling-bias':           { Icon: Target,         label: 'Sampling Bias' },
};

export function HeroIllustration({ heroGraphic, stream, className = '' }) {
  const cfg = heroMeta[heroGraphic] || heroMeta['triangle-pattern'];
  const c = streamColor(stream);
  const compactGraphics = new Set(['number-line', 'ratio-scaling', 'probability-tokens', 'graph-matching', 'sampling-bias']);
  const mediumGraphics = new Set(['sorting-network', 'instruction-flow', 'argument-reconstruction', 'source-credibility']);

  let maxW = '320px';
  if (compactGraphics.has(heroGraphic)) maxW = '260px';
  else if (mediumGraphics.has(heroGraphic)) maxW = '290px';

  return (
    <AnimCtrl title={cfg.label} className={className}>
      {(playing) => (
        <div className="relative w-full mx-auto" style={{ maxWidth: maxW }}>
          <HeroSVG type={heroGraphic} c={c} playing={playing} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-9 h-9 rounded-[10px] bg-panel glass-card border border-edge flex items-center justify-center" style={{ color: c }}>
              <cfg.Icon className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </AnimCtrl>
  );
}

/* ── Route to activity SVG ───────── */
function HeroSVG({ type, c, playing }) {
  switch (type) {
    case 'triangle-pattern':        return <TriangleCountSVG c={c} p={playing} />;
    case 'sorting-network':         return <SortingNetworkSVG c={c} p={playing} />;
    case 'instruction-flow':        return <InstructionFlowSVG c={c} p={playing} />;
    case 'algorithm-cards':         return <AlgorithmCardsSVG c={c} p={playing} />;
    case 'word-formatting':         return <WordFormattingSVG c={c} p={playing} />;
    case 'excel-cleaning':          return <ExcelCleaningSVG c={c} p={playing} />;
    case 'chart-critique':          return <ChartCritiqueSVG c={c} p={playing} />;
    case 'sorting-wall':            return <ClaimSortSVG c={c} p={playing} />;
    case 'paraphrase-relay':        return <ParaphraseRelaySVG c={c} p={playing} />;
    case 'argument-reconstruction': return <ArgumentTreeSVG c={c} p={playing} />;
    case 'source-credibility':      return <SourceCredSVG c={c} p={playing} />;
    case 'number-line':             return <NumberLineSVG c={c} p={playing} />;
    case 'ratio-scaling':           return <RatioScalingSVG c={c} p={playing} />;
    case 'probability-tokens':      return <ProbabilityTokensSVG c={c} p={playing} />;
    case 'graph-matching':          return <GraphMatchSVG c={c} p={playing} />;
    case 'sampling-bias':           return <SamplingBiasSVG c={c} p={playing} />;
    default:                        return <DefaultHeroSVG c={c} p={playing} />;
  }
}


/* ─────────────────────────────────────
   CL-001  Count Triangles
   Progressive highlighting of hidden
   triangles in an overlapping figure
   Reference: CS Unplugged, Bell et al.
   ───────────────────────────────────── */
function TriangleCountSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const tris = [
    [[120,18],[55,90],[185,90]],
    [[120,18],[87.5,54],[152.5,54]],
    [[87.5,54],[55,90],[120,90]],
    [[152.5,54],[120,90],[185,90]],
    [[87.5,54],[55,90],[185,90]],
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (tris.length + 2)), 1100);
    return () => clearInterval(id);
  }, [p]);
  const cur = step > 0 && step <= tris.length ? step - 1 : -1;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <polygon points="120,18 55,90 185,90" fill="none" stroke={c} strokeWidth="2" opacity={0.25} />
      <line x1="120" y1="18" x2="120" y2="90" stroke={c} strokeWidth="1.5" opacity={0.15} />
      <line x1="87.5" y1="54" x2="152.5" y2="54" stroke={c} strokeWidth="1.5" opacity={0.15} />
      {cur >= 0 && (
        <motion.polygon
          key={cur}
          points={tris[cur].map(v => v.join(',')).join(' ')}
          fill={c} stroke={c} strokeWidth="2.5"
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={{ fillOpacity: 0.18, strokeOpacity: 0.7 }}
          transition={{ duration: 0.45 }}
        />
      )}
      <rect x="195" y="8" width="38" height="22" rx="6" fill={c} fillOpacity={0.12} stroke={c} strokeOpacity={0.25} strokeWidth="1" />
      <text x="214" y="23" textAnchor="middle" fill={c} fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
        {Math.min(step, tris.length)}/{tris.length}
      </text>
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-002  Human Sorting Network
   Tokens slide along lanes, swap when
   comparator says left > right
   Reference: CS Unplugged sorting
   ───────────────────────────────────── */
function SortingNetworkSVG({ c, p }) {
  const lanes = [25, 45, 65, 85];
  const init = useMemo(() => [4, 1, 3, 2], []);
  const swaps = [[0,1],[2,3],[1,2],[0,1],[2,3],[1,2]];
  const gateX = [50, 80, 110, 140, 170, 200];
  const [phase, setPhase] = useState(0);
  const [arr, setArr] = useState([...init]);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => {
      setPhase(prev => {
        const next = (prev + 1) % (swaps.length + 2);
        if (next === 0) setArr([...init]);
        else if (next >= 1 && next <= swaps.length) {
          setArr(a => {
            const cp = [...a];
            const [u, v] = swaps[next - 1];
            if (cp[u] > cp[v]) { const t = cp[u]; cp[u] = cp[v]; cp[v] = t; }
            return cp;
          });
        }
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {lanes.map((y, i) => <line key={i} x1="20" y1={y} x2="220" y2={y} stroke={c} strokeWidth="1" opacity={0.12} />)}
      {gateX.map((gx, i) => {
        if (i >= swaps.length) return null;
        const [a, b] = swaps[i];
        return (
          <g key={`g${i}`} opacity={phase >= i + 1 ? 0.5 : 0.15}>
            <line x1={gx} y1={lanes[a]} x2={gx} y2={lanes[b]} stroke={c} strokeWidth="1.5" />
            <circle cx={gx} cy={lanes[a]} r="3.5" fill={c} fillOpacity={0.4} />
            <circle cx={gx} cy={lanes[b]} r="3.5" fill={c} fillOpacity={0.4} />
          </g>
        );
      })}
      {arr.map((val, i) => (
        <motion.g key={`tok-${i}`} layout transition={{ type: 'spring', stiffness: 120, damping: 14 }}>
          <circle cx={phase === 0 ? 28 : 214} cy={lanes[i]} r="9" fill={c} fillOpacity={0.55} stroke={c} strokeOpacity={0.3} />
          <text x={phase === 0 ? 28 : 214} y={lanes[i] + 3.5} textAnchor="middle" fill="var(--theme-invert)" fontSize="9" fontWeight="bold" fontFamily="monospace">{val}</text>
        </motion.g>
      ))}
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-003  Instruction Precision
   Split panel: code editor highlights
   instructions, canvas draws the shape
   Reference: Barefoot Computing
   ───────────────────────────────────── */
function InstructionFlowSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const cmds = ['Move right', 'Turn 90 deg', 'Move down', 'Turn 90 deg'];
  const paths = [
    'M35,38 L90,38',
    'M35,38 L90,38 L90,78',
    'M35,38 L90,38 L90,78 L35,78',
    'M35,38 L90,38 L90,78 L35,78 Z',
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (cmds.length + 1)), 1000);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Editor panel */}
      <rect x="138" y="8" width="94" height="92" rx="6" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.12} />
      <text x="148" y="22" fill="var(--theme-muted)" fontSize="7" fontFamily="monospace">Instructions:</text>
      {cmds.map((cmd, i) => (
        <g key={i}>
          <rect x="143" y={27 + i * 17} width="84" height="14" rx="2" fill={c} fillOpacity={i < step ? 0.12 : 0.025} />
          <text x="148" y={37 + i * 17} fill={i < step ? c : 'var(--theme-muted)'} fontSize="7" fontFamily="monospace">{cmd}</text>
        </g>
      ))}
      {/* Canvas panel */}
      <rect x="8" y="8" width="122" height="92" rx="6" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="12" y="22" fill="var(--theme-muted)" fontSize="7" fontFamily="monospace">Result:</text>
      {step > 0 && (
        <motion.path
          d={paths[Math.min(step - 1, paths.length - 1)]}
          fill="none" stroke={c} strokeWidth="2.5" strokeOpacity={0.7} strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.55 }}
        />
      )}
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-004  Algorithm Design Cards
   Cards fly from a hand into a
   flowchart arrangement
   Reference: Algorithmic thinking,
   BBC Bitesize
   ───────────────────────────────────── */
function AlgorithmCardsSVG({ c, p }) {
  const [placed, setPlaced] = useState(0);
  const cards = [
    { label: 'START', x: 80, y: 10 },
    { label: 'INPUT', x: 80, y: 33 },
    { label: 'PROCESS', x: 80, y: 56 },
    { label: 'OUTPUT', x: 80, y: 79 },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPlaced(prev => (prev + 1) % (cards.length + 2)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Placeholder slots */}
      {cards.map((cd, i) => (
        <rect key={`slot-${i}`} x={cd.x} y={cd.y} width="60" height="18" rx="4" fill="none" stroke={c} strokeWidth="1" strokeOpacity={0.1} strokeDasharray="3 2" />
      ))}
      {/* Arrows */}
      {[0,1,2].map(i => (
        <line key={`arr-${i}`} x1="110" y1={cards[i].y + 18} x2="110" y2={cards[i+1].y} stroke={c} strokeWidth="1" opacity={0.15} markerEnd="url(#arrowAlgo)" />
      ))}
      <defs>
        <marker id="arrowAlgo" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill={c} fillOpacity={0.3} />
        </marker>
      </defs>
      {/* Placed cards */}
      {cards.map((cd, i) => {
        if (i >= placed) return null;
        return (
          <motion.g key={`placed-${i}`} initial={{ x: 190, y: 80, opacity: 0, scale: 0.5 }} animate={{ x: cd.x, y: cd.y, opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 140, damping: 12 }}>
            <rect x="0" y="0" width="60" height="18" rx="4" fill={c} fillOpacity={0.15} stroke={c} strokeOpacity={0.3} />
            <text x="30" y="12" textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="monospace">{cd.label}</text>
          </motion.g>
        );
      })}
      {/* Hand / deck indicator */}
      <rect x="190" y="75" width="40" height="28" rx="5" fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.1} />
      <text x="210" y="92" textAnchor="middle" fill="var(--theme-muted)" fontSize="6.5" fontFamily="monospace">DECK</text>
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-005  Word Formatting
   Document page showing animated
   formatting transformations
   Reference: Digital literacy, ECDL
   ───────────────────────────────────── */
function WordFormattingSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const transforms = ['Bold', 'Heading', 'Align', 'Color'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (transforms.length + 1)), 1200);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Page outline */}
      <rect x="50" y="5" width="140" height="100" rx="4" fill={c} fillOpacity={0.03} stroke={c} strokeOpacity={0.12} />
      {/* Toolbar */}
      <rect x="55" y="9" width="130" height="12" rx="2" fill={c} fillOpacity={0.05} />
      {transforms.map((t, i) => (
        <g key={i}>
          <rect x={58 + i * 32} y="10.5" width="28" height="9" rx="1.5" fill={c} fillOpacity={step > i ? 0.2 : 0.04} stroke={c} strokeOpacity={step > i ? 0.3 : 0.06} />
          <text x={72 + i * 32} y="18" textAnchor="middle" fill={step > i ? c : 'var(--theme-muted)'} fontSize="5.5" fontWeight="bold" fontFamily="monospace">{t[0]}</text>
        </g>
      ))}
      {/* Title line */}
      <motion.rect x="60" y="28" width={step >= 2 ? 90 : 120} height="6" rx="1" fill={c}
        animate={{ fillOpacity: step >= 1 ? 0.35 : 0.12, height: step >= 2 ? 8 : 6 }}
        transition={{ duration: 0.3 }} />
      {/* Body lines */}
      {[42, 52, 62, 72, 82].map((y, i) => (
        <rect key={i} x={step >= 3 ? 70 : 60} y={y} width={80 - (i === 4 ? 30 : 0)} height="4" rx="1" fill={c} fillOpacity={0.08} />
      ))}
      {/* Active transform label */}
      {step > 0 && step <= transforms.length && (
        <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
          <rect x="85" y="92" width="70" height="14" rx="3" fill={c} fillOpacity={0.15} />
          <text x="120" y="102" textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="monospace">
            {transforms[step - 1]} applied
          </text>
        </motion.g>
      )}
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-006  Excel Data Cleaning
   Spreadsheet grid with magnifying
   glass scanning and error->fix
   Reference: Data literacy, Schield
   ───────────────────────────────────── */
function ExcelCleaningSVG({ c, p }) {
  const [scanCol, setScanCol] = useState(-1);
  const rows = 4;
  const cols = 5;
  const errors = [[1,2],[2,4],[3,1]];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setScanCol(s => (s + 1) % (cols + 2)), 700);
    return () => clearInterval(id);
  }, [p]);
  const isError = (r, cl) => errors.some(([er, ec]) => er === r && ec === cl);
  const isFixed = (r, cl) => isError(r, cl) && scanCol > cl;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Grid */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, cl) => {
          const x = 20 + cl * 40;
          const y = 15 + r * 22;
          const err = isError(r, cl);
          const fixed = isFixed(r, cl);
          return (
            <g key={`${r}-${cl}`}>
              <rect x={x} y={y} width="38" height="18" rx="2" fill={err && !fixed ? '#f85149' : c} fillOpacity={fixed ? 0.15 : err ? 0.08 : 0.03} stroke={err && !fixed ? '#f85149' : c} strokeOpacity={0.1} strokeWidth="0.8" />
              {fixed && <text x={x + 19} y={y + 12} textAnchor="middle" fill="#3fb950" fontSize="10" fontWeight="bold">{'\u2713'}</text>}
              {err && !fixed && <text x={x + 19} y={y + 12} textAnchor="middle" fill="#f85149" fontSize="8" fontWeight="bold">ERR</text>}
            </g>
          );
        })
      )}
      {/* Scanning indicator */}
      {scanCol >= 0 && scanCol < cols && (
        <motion.rect
          x={20 + scanCol * 40} y="12" width="38" height={rows * 22 + 5} rx="3"
          fill="none" stroke={c} strokeWidth="2" strokeOpacity={0.4}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        />
      )}
      <text x="120" y="106" textAnchor="middle" fill="var(--theme-muted)" fontSize="7">
        Scanning column {Math.min(scanCol + 1, cols)} of {cols}
      </text>
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-007  Chart Selection Critique
   Three mini-charts for same data;
   approve/reject stamps animate in
   Reference: Few (2009) data viz
   ───────────────────────────────────── */
function ChartCritiqueSVG({ c, p }) {
  const [verdict, setVerdict] = useState(-1);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setVerdict(v => (v + 1) % 5), 1200);
    return () => clearInterval(id);
  }, [p]);
  const Stamp = ({ x, y, ok }) => (
    <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring' }}>
      <circle cx={x} cy={y} r="8" fill={ok ? '#3fb950' : '#f85149'} fillOpacity={0.2} stroke={ok ? '#3fb950' : '#f85149'} strokeOpacity={0.5} strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fill={ok ? '#3fb950' : '#f85149'} fontSize="10" fontWeight="bold">{ok ? '\u2713' : '\u2717'}</text>
    </motion.g>
  );
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Bar chart */}
      <g transform="translate(8,15)">
        {[30,50,35,60,42].map((h, i) => <rect key={i} x={3 + i * 15} y={70 - h} width="11" height={h} rx="2" fill={c} fillOpacity={0.45} />)}
        {verdict >= 1 && <Stamp x="40" y="12" ok={false} />}
      </g>
      {/* Pie chart */}
      <g transform="translate(95,10)">
        <circle cx="25" cy="50" r="22" fill="none" stroke={c} strokeWidth="1.5" opacity={0.2} />
        <path d="M25,50 L25,28 A22,22 0 0,1 45,58 Z" fill={c} fillOpacity={0.25} />
        <path d="M25,50 L45,58 A22,22 0 0,1 8,62 Z" fill={c} fillOpacity={0.15} />
        {verdict >= 2 && <Stamp x="25" y="16" ok={false} />}
      </g>
      {/* Line chart */}
      <g transform="translate(160,15)">
        <polyline points="5,60 16,38 27,48 38,22 49,30 60,18" fill="none" stroke={c} strokeWidth="2" opacity={0.5} />
        {[5,16,27,38,49,60].map((x, i) => <circle key={i} cx={x} cy={[60,38,48,22,30,18][i]} r="2.5" fill={c} fillOpacity={0.6} />)}
        {verdict >= 3 && <Stamp x="33" y="10" ok={true} />}
      </g>
      <text x="120" y="104" textAnchor="middle" fill="var(--theme-muted)" fontSize="7">Monthly trend data (best fit: line chart)</text>
    </svg>
  );
}


/* ─────────────────────────────────────
   AL-001  Claim-Evidence Sorting
   Cards fly from a center stack into
   Claim or Evidence columns
   Reference: Toulmin argument model
   ───────────────────────────────────── */
function ClaimSortSVG({ c, p }) {
  const [sorted, setSorted] = useState(0);
  const cards = [
    { label: 'CLAIM', dest: 'L' },
    { label: 'EVIDENCE', dest: 'R' },
    { label: 'CLAIM', dest: 'L' },
    { label: 'EVIDENCE', dest: 'R' },
    { label: 'EVIDENCE', dest: 'R' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setSorted(s => (s + 1) % (cards.length + 2)), 900);
    return () => clearInterval(id);
  }, [p]);
  const leftIdx = cards.slice(0, sorted).filter(cd => cd.dest === 'L');
  const rightIdx = cards.slice(0, sorted).filter(cd => cd.dest === 'R');
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <rect x="5" y="8" width="75" height="92" rx="6" fill={c} fillOpacity={0.025} stroke={c} strokeOpacity={0.08} strokeDasharray="4 2" />
      <text x="42" y="22" textAnchor="middle" fill={c} fontSize="7.5" fontWeight="bold" opacity={0.45}>CLAIMS</text>
      <rect x="160" y="8" width="75" height="92" rx="6" fill={c} fillOpacity={0.025} stroke={c} strokeOpacity={0.08} strokeDasharray="4 2" />
      <text x="197" y="22" textAnchor="middle" fill={c} fontSize="7.5" fontWeight="bold" opacity={0.45}>EVIDENCE</text>
      {/* Unsorted stack */}
      {cards.map((cd, i) => {
        if (i < sorted) return null;
        return <rect key={i} x={107 + (i - sorted) * 2} y={40 + (i - sorted) * 3} width="26" height="14" rx="3" fill={c} fillOpacity={0.1} stroke={c} strokeOpacity={0.12} />;
      })}
      {/* Sorted cards */}
      {leftIdx.map((cd, i) => (
        <motion.g key={`L${i}`} initial={{ x: 108, y: 45 }} animate={{ x: 15, y: 30 + i * 22 }} transition={{ type: 'spring', stiffness: 120 }}>
          <rect width="60" height="16" rx="3" fill={c} fillOpacity={0.18} stroke={c} strokeOpacity={0.25} />
          <text x="30" y="11" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace">{cd.label}</text>
        </motion.g>
      ))}
      {rightIdx.map((cd, i) => (
        <motion.g key={`R${i}`} initial={{ x: 108, y: 45 }} animate={{ x: 170, y: 30 + i * 22 }} transition={{ type: 'spring', stiffness: 120 }}>
          <rect width="60" height="16" rx="3" fill={c} fillOpacity={0.12} stroke={c} strokeOpacity={0.2} />
          <text x="30" y="11" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace">{cd.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}


/* ─────────────────────────────────────
   AL-002  Paraphrase Relay
   Horizontal chain of speech bubbles
   with text morphing progressively
   Reference: Flower & Hayes writing
   ───────────────────────────────────── */
function ParaphraseRelaySVG({ c, p }) {
  const [active, setActive] = useState(0);
  const phrases = ['Original', 'Version A', 'Version B', 'Final'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setActive(a => (a + 1) % (phrases.length + 1)), 1100);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {phrases.map((ph, i) => {
        const x = 18 + i * 56;
        const on = i < active;
        return (
          <g key={i}>
            {/* Bubble */}
            <rect x={x} y="25" width="48" height="35" rx="8" fill={c} fillOpacity={on ? 0.14 : 0.04} stroke={c} strokeOpacity={on ? 0.3 : 0.08} />
            <polygon points={`${x + 18},60 ${x + 22},68 ${x + 26},60`} fill={c} fillOpacity={on ? 0.14 : 0.04} />
            <text x={x + 24} y={46} textAnchor="middle" fill={on ? c : 'var(--theme-muted)'} fontSize="7" fontWeight="bold" fontFamily="monospace">{ph}</text>
            {/* Person icon */}
            <circle cx={x + 24} cy={80} r="6" fill={c} fillOpacity={on ? 0.3 : 0.1} />
            <text x={x + 24} y={83} textAnchor="middle" fill={on ? c : 'var(--theme-muted)'} fontSize="6">P{i + 1}</text>
            {/* Arrow */}
            {i < phrases.length - 1 && (
              <line x1={x + 50} y1="42" x2={x + 56} y2="42" stroke={c} strokeWidth="1.5" opacity={on ? 0.4 : 0.1} markerEnd="url(#arrowPara)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrowPara" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={c} fillOpacity={0.4} />
        </marker>
      </defs>
      <text x="120" y="103" textAnchor="middle" fill="var(--theme-muted)" fontSize="7">Meaning preserved through relay</text>
    </svg>
  );
}


/* ─────────────────────────────────────
   AL-003  Argument Reconstruction
   Premise-conclusion tree with nodes
   appearing bottom-up
   Reference: Toulmin argumentation
   ───────────────────────────────────── */
function ArgumentTreeSVG({ c, p }) {
  const [vis, setVis] = useState(0);
  const nodes = [
    { id: 0, label: 'Premise 1', x: 30, y: 75 },
    { id: 1, label: 'Premise 2', x: 115, y: 75 },
    { id: 2, label: 'Premise 3', x: 200, y: 75 },
    { id: 3, label: 'Inference', x: 72, y: 42 },
    { id: 4, label: 'Conclusion', x: 155, y: 12 },
  ];
  const edges = [[0,3],[1,3],[2,4],[3,4]];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setVis(v => (v + 1) % (nodes.length + 2)), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={c} strokeWidth="1.5" opacity={vis > Math.max(a, b) ? 0.3 : 0.06} />
      ))}
      {nodes.map((n, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: i < vis ? 1 : 0.15, scale: i < vis ? 1 : 0.8 }} transition={{ type: 'spring' }}>
          <rect x={n.x - 28} y={n.y - 8} width="56" height="18" rx="5" fill={c} fillOpacity={i < vis ? 0.15 : 0.03} stroke={c} strokeOpacity={i < vis ? 0.3 : 0.06} />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill={i < vis ? c : 'var(--theme-muted)'} fontSize="6.5" fontWeight="bold" fontFamily="monospace">{n.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}


/* ─────────────────────────────────────
   AL-004  Source Credibility
   Source cards with credibility meter
   filling up on evaluation
   Reference: CRAAP test, Blakeslee
   ───────────────────────────────────── */
function SourceCredSVG({ c, p }) {
  const [eval1, setEval] = useState(0);
  const sources = [
    { name: 'Wikipedia', cred: 55 },
    { name: '.edu Paper', cred: 92 },
    { name: 'Blog Post', cred: 30 },
    { name: 'News Site', cred: 70 },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setEval(e => (e + 1) % (sources.length + 2)), 1000);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {sources.map((src, i) => {
        const x = 8 + i * 58;
        const evaluated = i < eval1;
        const credColour = src.cred >= 70 ? '#3fb950' : src.cred >= 50 ? '#d29922' : '#f85149';
        return (
          <g key={i}>
            <rect x={x} y="10" width="54" height="70" rx="5" fill={c} fillOpacity={evaluated ? 0.08 : 0.03} stroke={c} strokeOpacity={evaluated ? 0.2 : 0.06} />
            <text x={x + 27} y="28" textAnchor="middle" fill={evaluated ? c : 'var(--theme-muted)'} fontSize="6.5" fontWeight="bold" fontFamily="monospace">{src.name}</text>
            {/* Meter bar */}
            <rect x={x + 8} y="38" width="38" height="6" rx="3" fill={c} fillOpacity={0.06} />
            {evaluated && (
              <motion.rect x={x + 8} y="38" width="0" height="6" rx="3" fill={credColour} fillOpacity={0.6}
                animate={{ width: (src.cred / 100) * 38 }} transition={{ duration: 0.5, delay: 0.1 }}
              />
            )}
            {evaluated && (
              <text x={x + 27} y="58" textAnchor="middle" fill={credColour} fontSize="10" fontWeight="bold" fontFamily="monospace">{src.cred}%</text>
            )}
            <text x={x + 27} y="72" textAnchor="middle" fill="var(--theme-muted)" fontSize="5.5">
              {evaluated ? (src.cred >= 70 ? 'Reliable' : src.cred >= 50 ? 'Caution' : 'Unreliable') : '?'}
            </text>
          </g>
        );
      })}
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="7">CRAAP Test Evaluation</text>
    </svg>
  );
}


/* ─────────────────────────────────────
   QL-001  Human Number Line
   Animated person marker sliding to
   target positions on a number line
   Reference: Haylock numeracy
   ───────────────────────────────────── */
function NumberLineSVG({ c, p }) {
  const [idx, setIdx] = useState(0);
  const targets = [3, 7, 1, 5, 9, 0, 4, 8];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setIdx(i => (i + 1) % targets.length), 1300);
    return () => clearInterval(id);
  }, [p]);
  const target = targets[idx];
  const tx = 20 + target * 20;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <line x1="15" y1="60" x2="225" y2="60" stroke={c} strokeWidth="1.5" opacity={0.25} />
      {Array.from({ length: 11 }).map((_, i) => (
        <g key={i}>
          <line x1={20 + i * 20} y1="55" x2={20 + i * 20} y2="65" stroke={c} strokeWidth="1" opacity={0.25} />
          <text x={20 + i * 20} y="78" textAnchor="middle" fill="var(--theme-muted)" fontSize="8" fontFamily="monospace">{i}</text>
        </g>
      ))}
      {/* Person figure */}
      <motion.g animate={{ x: tx }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}>
        <circle cx="0" cy="32" r="7" fill={c} fillOpacity={0.45} stroke={c} strokeOpacity={0.3} />
        <rect x="-4" y="39" width="8" height="12" rx="2" fill={c} fillOpacity={0.35} />
        <line x1="0" y1="51" x2="-4" y2="58" stroke={c} strokeWidth="1.5" opacity={0.3} />
        <line x1="0" y1="51" x2="4" y2="58" stroke={c} strokeWidth="1.5" opacity={0.3} />
      </motion.g>
      <text x="120" y="98" textAnchor="middle" fill={c} fontSize="9" fontWeight="bold" fontFamily="monospace">
        Stand at: {target}
      </text>
    </svg>
  );
}


/* ─────────────────────────────────────
   QL-002  Ratio Recipe Lab
   Ingredients scale up/down with
   animated ratio bars
   Reference: Lamon ratio reasoning
   ───────────────────────────────────── */
function RatioScalingSVG({ c, p }) {
  const [scale, setScale] = useState(0);
  const multipliers = [1, 2, 3, 0.5, 1];
  const ingredients = [
    { name: 'Flour', base: 200 },
    { name: 'Sugar', base: 100 },
    { name: 'Eggs', base: 50 },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setScale(s => (s + 1) % multipliers.length), 1400);
    return () => clearInterval(id);
  }, [p]);
  const mult = multipliers[scale];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Multiplier badge */}
      <rect x="85" y="3" width="70" height="18" rx="5" fill={c} fillOpacity={0.12} stroke={c} strokeOpacity={0.2} />
      <text x="120" y="15" textAnchor="middle" fill={c} fontSize="9" fontWeight="bold" fontFamily="monospace">
        x{mult}
      </text>
      {ingredients.map((ing, i) => {
        const y = 30 + i * 26;
        const barW = Math.min((ing.base * mult / 600) * 140, 140);
        return (
          <g key={i}>
            <text x="15" y={y + 10} fill="var(--theme-body)" fontSize="7.5" fontFamily="monospace">{ing.name}</text>
            <rect x="60" y={y} width="142" height="14" rx="3" fill={c} fillOpacity={0.04} />
            <motion.rect x="60" y={y} height="14" rx="3" fill={c} fillOpacity={0.3}
              animate={{ width: barW }} transition={{ type: 'spring', stiffness: 80, damping: 12 }}
            />
            <text x="208" y={y + 10} fill={c} fontSize="7.5" fontWeight="bold" fontFamily="monospace">
              {Math.round(ing.base * mult)}g
            </text>
          </g>
        );
      })}
      <text x="120" y="106" textAnchor="middle" fill="var(--theme-muted)" fontSize="7">Ratio preserved across scales</text>
    </svg>
  );
}


/* ─────────────────────────────────────
   QL-003  Probability Tokens
   Tokens drawn from a bag with live
   probability calculation
   Reference: Batanero probability ed
   ───────────────────────────────────── */
function ProbabilityTokensSVG({ c, p }) {
  const tokenCols = ['#58a6ff', '#3fb950', '#f85149', '#58a6ff', '#d29922'];
  const [drawn, setDrawn] = useState([]);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => {
      setDrawn(d => d.length >= tokenCols.length ? [] : [...d, tokenCols[d.length]]);
    }, 900);
    return () => clearInterval(id);
  }, [p]);
  const blueCount = drawn.filter(d => d === '#58a6ff').length;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Bag */}
      <path d="M28,28 Q28,16 50,14 L72,14 Q94,16 94,28 L98,82 Q98,94 61,94 Q24,94 24,82 Z"
        fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.15} strokeWidth="1.5" />
      <text x="61" y="55" textAnchor="middle" fill="var(--theme-muted)" fontSize="7.5" fontFamily="monospace">BAG</text>
      {/* Tokens still in bag */}
      {tokenCols.map((col, i) => (
        drawn.length <= i && (
          <motion.circle key={`bag-${i}`} cx={44 + (i % 3) * 12} cy={62 + Math.floor(i / 3) * 14} r="5"
            fill={col} fillOpacity={0.45}
            animate={p ? { y: [0, -2, 0] } : {}} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
          />
        )
      ))}
      {/* Drawn */}
      {drawn.map((col, i) => (
        <motion.g key={`dr-${i}`} initial={{ x: 61, y: 55, scale: 0 }} animate={{ x: 125 + i * 22, y: 40, scale: 1 }} transition={{ type: 'spring', duration: 0.45 }}>
          <circle cx="0" cy="0" r="9" fill={col} fillOpacity={0.55} stroke={col} strokeOpacity={0.3} />
          <text x="0" y="3" textAnchor="middle" fill="var(--theme-invert)" fontSize="7" fontWeight="bold">{i + 1}</text>
        </motion.g>
      ))}
      {/* Probability readout */}
      <rect x="115" y="65" width="110" height="6" rx="3" fill={c} fillOpacity={0.06} />
      {drawn.length > 0 && (
        <motion.rect x="115" y="65" height="6" rx="3" fill={c} fillOpacity={0.35}
          animate={{ width: (blueCount / drawn.length) * 110 }}
        />
      )}
      <text x="170" y="88" textAnchor="middle" fill="var(--theme-muted)" fontSize="7.5" fontFamily="monospace">
        P(blue) = {drawn.length > 0 ? `${blueCount}/${drawn.length}` : '?'}
      </text>
    </svg>
  );
}


/* ─────────────────────────────────────
   QL-004  Graph Match Game
   Three chart types with a sliding
   selection frame highlighting the
   correct match for given data
   Reference: Curcio graph literacy
   ───────────────────────────────────── */
function GraphMatchSVG({ c, p }) {
  const [active, setActive] = useState(0);
  const labels = ['Categories', 'Time series', 'Correlation'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setActive(a => (a + 1) % 3), 1500);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Bar chart */}
      <g transform="translate(8,16)" opacity={active === 0 ? 1 : 0.2}>
        {[30,50,35,60,42].map((h, i) => <rect key={i} x={3 + i * 14} y={65 - h} width="10" height={h} rx="2" fill={c} fillOpacity={0.5} />)}
        <text x="36" y="80" textAnchor="middle" fill="var(--theme-muted)" fontSize="6">{labels[0]}</text>
      </g>
      {/* Line chart */}
      <g transform="translate(88,16)" opacity={active === 1 ? 1 : 0.2}>
        <polyline points="5,55 16,30 27,42 38,15 49,25 60,20" fill="none" stroke={c} strokeWidth="2" opacity={0.55} />
        {[5,16,27,38,49,60].map((x, i) => <circle key={i} cx={x} cy={[55,30,42,15,25,20][i]} r="2.5" fill={c} fillOpacity={0.6} />)}
        <text x="33" y="80" textAnchor="middle" fill="var(--theme-muted)" fontSize="6">{labels[1]}</text>
      </g>
      {/* Scatter */}
      <g transform="translate(168,16)" opacity={active === 2 ? 1 : 0.2}>
        {[[8,52],[18,38],[28,45],[38,22],[48,30],[22,55],[42,18]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill={c} fillOpacity={0.4} />
        ))}
        <text x="28" y="80" textAnchor="middle" fill="var(--theme-muted)" fontSize="6">{labels[2]}</text>
      </g>
      {/* Selection frame */}
      <motion.rect
        animate={{ x: [8, 88, 168][active] }}
        transition={{ type: 'spring', stiffness: 100 }}
        y="12" width="72" height="82" rx="6" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity={0.45}
      />
    </svg>
  );
}


/* ─────────────────────────────────────
   QL-005  Bias in Sampling
   Population dots with different
   sampling methods highlighted
   Reference: Kahneman bias, Utts stats
   ───────────────────────────────────── */
function SamplingBiasSVG({ c, p }) {
  const [method, setMethod] = useState(0);
  const methods = ['Random', 'Cluster', 'Stratified', 'Biased'];
  const pop = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 40; i++) {
      pts.push({
        x: 10 + (i % 8) * 27 + (Math.sin(i) * 5),
        y: 15 + Math.floor(i / 8) * 17 + (Math.cos(i) * 3),
        group: i < 10 ? 0 : i < 20 ? 1 : i < 30 ? 2 : 3,
      });
    }
    return pts;
  }, []);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setMethod(m => (m + 1) % methods.length), 1800);
    return () => clearInterval(id);
  }, [p]);
  const isSelected = (pt, i) => {
    switch (method) {
      case 0: return i % 5 === 0; // random-ish
      case 1: return pt.group === 1; // cluster
      case 2: return i % 10 < 3; // stratified
      case 3: return pt.x < 80; // biased - only left side
      default: return false;
    }
  };
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {pop.map((pt, i) => {
        const sel = isSelected(pt, i);
        return (
          <motion.circle key={i} cx={pt.x} cy={pt.y} r={sel ? 4.5 : 3}
            fill={sel ? c : c} fillOpacity={sel ? 0.6 : 0.1}
            stroke={sel ? c : 'none'} strokeOpacity={0.4} strokeWidth={sel ? 1.5 : 0}
            animate={{ r: sel ? 4.5 : 3 }} transition={{ duration: 0.3 }}
          />
        );
      })}
      <rect x="60" y="90" width="120" height="16" rx="4" fill={c} fillOpacity={0.1} />
      <text x="120" y="101" textAnchor="middle" fill={c} fontSize="8" fontWeight="bold" fontFamily="monospace">
        {methods[method]} Sampling
      </text>
    </svg>
  );
}


/* ── Fallback hero ──────────────────── */
function DefaultHeroSVG({ c, p }) {
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <motion.circle cx="80" cy="55" r="22" fill={c} fillOpacity={0.07} stroke={c} strokeOpacity={0.15}
        animate={p ? { r: [22, 26, 22] } : {}} transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.circle cx="160" cy="55" r="16" fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.12}
        animate={p ? { r: [16, 20, 16] } : {}} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />
      <motion.rect x="105" y="40" width="30" height="30" rx="8" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.1}
        animate={p ? { rotate: [0, 5, 0, -5, 0] } : {}} transition={{ duration: 4, repeat: Infinity }}
      />
    </svg>
  );
}


/* ═══════════════════════════════════════
   2. SKILLS RADAR CHART
   ═══════════════════════════════════════ */
export function SkillsRadar({ skills, stream }) {
  const c = streamColor(stream);
  const n = skills.length;
  if (n < 3) return <SkillsBar skills={skills} stream={stream} />;

  const cx = 100, cy = 95, r = 70;
  const step = (2 * Math.PI) / n;
  const rings = [0.33, 0.66, 1];
  const values = skills.map(s => {
    let h = 0;
    for (let j = 0; j < s.length; j++) h = ((h << 5) - h + s.charCodeAt(j)) | 0;
    return 0.55 + (Math.abs(h) % 45) / 100;
  });
  const dataStr = values.map((v, i) => {
    const a = -Math.PI / 2 + i * step;
    return `${cx + r * v * Math.cos(a)},${cy + r * v * Math.sin(a)}`;
  }).join(' ');

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2 text-center">Skills Coverage</h4>
      <svg viewBox="0 0 200 195" className="w-full max-w-[200px] mx-auto">
        {rings.map(ring => (
          <polygon key={ring} points={skills.map((_, i) => {
            const a = -Math.PI / 2 + i * step;
            return `${cx + r * ring * Math.cos(a)},${cy + r * ring * Math.sin(a)}`;
          }).join(' ')} fill="none" stroke="var(--theme-edge)" strokeWidth="1" />
        ))}
        {skills.map((_, i) => {
          const a = -Math.PI / 2 + i * step;
          return <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke="var(--theme-edge)" strokeWidth="1" />;
        })}
        <polygon points={dataStr} fill={c} fillOpacity="0.12" stroke={c} strokeWidth="2" opacity="0.8" />
        {values.map((v, i) => {
          const a = -Math.PI / 2 + i * step;
          return <circle key={i} cx={cx + r * v * Math.cos(a)} cy={cy + r * v * Math.sin(a)} r="3" fill={c} opacity="0.9" />;
        })}
        {skills.map((s, i) => {
          const a = -Math.PI / 2 + i * step;
          const lx = cx + (r + 18) * Math.cos(a);
          const ly = cy + (r + 18) * Math.sin(a);
          const label = s.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
          return (
            <text key={i} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
              fill="var(--theme-body)" fontSize="7.5" fontFamily="Inter, sans-serif">
              {label.length > 14 ? label.slice(0, 12) + '..' : label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function SkillsBar({ skills, stream }) {
  const c = streamColor(stream);
  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Skills Coverage</h4>
      <div className="space-y-1.5">
        {skills.map(s => {
          let h = 0;
          for (let j = 0; j < s.length; j++) h = ((h << 5) - h + s.charCodeAt(j)) | 0;
          const pct = 60 + (Math.abs(h) % 40);
          return (
            <div key={s}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] text-body capitalize">{s.replace(/-/g, ' ')}</span>
                <span className="text-[10px] text-muted font-mono">{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-raised overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: c, opacity: 0.7 }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   3. DURATION TIMELINE
   ═══════════════════════════════════════ */
export function DurationTimeline({ procedure, stream }) {
  const c = streamColor(stream);
  const total = procedure.reduce((s, p) => s + (p.duration || 0), 0);
  if (total === 0) return null;

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Time Distribution</h4>
      <div className="flex items-center h-5 rounded-full overflow-hidden bg-surface-raised mb-2">
        {procedure.map((s, i) => {
          const pct = ((s.duration || 0) / total) * 100;
          if (pct === 0) return null;
          const op = 0.3 + (i / (procedure.length - 1 || 1)) * 0.5;
          return (
            <div key={i} title={`${s.title}: ${s.duration} min`}
              className="h-full relative group flex items-center justify-center text-[9px] font-bold font-mono"
              style={{ width: `${pct}%`, backgroundColor: c, opacity: op, color: 'var(--theme-invert)', minWidth: pct > 5 ? 0 : 14 }}>
              {pct > 10 && <span>{s.duration}m</span>}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {procedure.map((s, i) => {
          const op = 0.3 + (i / (procedure.length - 1 || 1)) * 0.5;
          return (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-[3px]" style={{ backgroundColor: c, opacity: op }} />
              <span className="text-[10px] text-muted">{s.title} ({s.duration}m)</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   4. DIFFICULTY METER
   ═══════════════════════════════════════ */
export function DifficultyMeter({ difficulty }) {
  const cfg = DIFF_CFG[difficulty] || DIFF_CFG.Beginner;
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Difficulty Level</h4>
      <div className="flex items-center gap-1.5 mb-2">
        {levels.map(lvl => {
          const lc = DIFF_CFG[lvl];
          const on = levels.indexOf(lvl) <= levels.indexOf(difficulty);
          return (
            <div key={lvl} className="flex-1 h-2.5 rounded-full overflow-hidden bg-surface-raised">
              <div className="h-full rounded-full transition-all duration-300"
                style={{ width: on ? '100%' : '0%', backgroundColor: on ? lc.colour : 'transparent', opacity: on ? 0.7 : 0.15 }} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-[10px]">
        {levels.map(lvl => (
          <span key={lvl} className={lvl === difficulty ? 'font-bold' : 'text-muted'}
            style={{ color: lvl === difficulty ? cfg.colour : undefined }}>
            {lvl}
          </span>
        ))}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   5. GROUP SIZE VISUAL
   ═══════════════════════════════════════ */
export function GroupSizeVisual({ groupSize, stream }) {
  const c = streamColor(stream);
  const parts = groupSize.split('-').map(Number);
  const min = parts[0] || 2;
  const max = parts[1] || parts[0] || 4;

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Group Size</h4>
      <div className="flex items-end gap-1 justify-center mb-2">
        {Array.from({ length: Math.min(max, 20) }).map((_, i) => (
          <User key={i} className="transition-all" style={{ width: 14, height: 14, color: c, opacity: i < min ? 0.8 : 0.3 }} />
        ))}
      </div>
      <p className="text-center text-[12px] font-mono font-semibold" style={{ color: c }}>
        {min} - {max} <span className="text-muted font-normal">students</span>
      </p>
    </div>
  );
}


/* ═══════════════════════════════════════
   6. STATS AT A GLANCE
   ═══════════════════════════════════════ */
export function StatsAtGlance({ activity }) {
  const c = streamColor(activity.stream);
  const items = [
    { label: 'Duration', value: `${activity.durationMin}m`, sub: 'minutes' },
    { label: 'Steps', value: activity.procedure?.length || 0, sub: 'procedure' },
    { label: 'Materials', value: activity.materials?.length || 0, sub: 'items' },
    { label: 'Outcomes', value: activity.learningOutcomes?.length || 0, sub: 'learning' },
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {items.map(item => (
        <div key={item.label} className="p-2 rounded-[8px] bg-surface glass-card border border-edge text-center">
          <p className="text-base font-bold font-mono" style={{ color: c }}>{item.value}</p>
          <p className="text-[9px] text-muted uppercase tracking-[0.04em]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}


/* ═══════════════════════════════════════
   7. PROCEDURE FLOW DIAGRAM
   ═══════════════════════════════════════ */
export function ProcedureFlowDiagram({ procedure, stream }) {
  const c = streamColor(stream);
  const dense = procedure.length > 6;

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3 mb-4">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Procedure Overview</h4>
      <div className={dense ? 'overflow-x-auto pb-1' : ''}>
        <div
          className="flex items-center gap-0"
          style={!dense ? { display: 'grid', gridTemplateColumns: `repeat(${procedure.length}, minmax(0, 1fr))`, width: '100%' } : {}}
        >
          {procedure.map((s, i) => (
            <div key={i} className="flex items-center flex-shrink-0 min-w-[90px]">
              <div className="flex flex-col items-center w-full px-1">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold font-mono mb-0.5"
                  style={{ backgroundColor: c, color: 'var(--theme-invert)', opacity: 0.8 }}>
                  {s.step}
                </div>
                <span className="text-[9px] text-muted text-center leading-tight">{s.title}</span>
                <span className="text-[8px] font-mono mt-0.5" style={{ color: c, opacity: 0.6 }}>{s.duration}m</span>
              </div>
              {i < procedure.length - 1 && (
                <svg width="26" height="10" className="flex-shrink-0" viewBox="0 0 26 10">
                  <line x1="0" y1="5" x2="20" y2="5" stroke={c} strokeWidth="1.5" opacity="0.3" />
                  <polygon points="19,2 26,5 19,8" fill={c} opacity="0.3" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   8. STEP ILLUSTRATION
   ═══════════════════════════════════════ */
export function StepIllustration({ graphic, stream }) {
  const c = streamColor(stream);
  return (
    <div className="flex items-center gap-3 p-3 rounded-[8px] bg-surface-raised border border-edge">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="8" fill={c} fillOpacity="0.08" stroke={c} strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="20" cy="16" r="5" fill={c} fillOpacity="0.3" />
        <rect x="10" y="25" width="20" height="3" rx="1.5" fill={c} fillOpacity="0.2" />
        <rect x="13" y="31" width="14" height="2" rx="1" fill={c} fillOpacity="0.12" />
      </svg>
      <div>
        <span className="text-[10px] font-bold text-muted uppercase tracking-[0.05em]">Visual Aid</span>
        <p className="text-[11px] capitalize" style={{ color: c }}>{graphic?.replace(/-/g, ' ') || 'Activity diagram'}</p>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   9. FACILITATION GANTT
   ═══════════════════════════════════════ */
export function FacilitationGantt({ facilitationScript, totalDuration, stream }) {
  const c = streamColor(stream);
  const segs = useMemo(() => {
    return facilitationScript.map(row => {
      const m = row.time.match(/(\d+)-(\d+)/);
      if (!m) return { ...row, start: 0, end: 0, w: 0 };
      const s = parseInt(m[1], 10), e = parseInt(m[2], 10);
      return { ...row, start: s, end: e, w: ((e - s) / totalDuration) * 100 };
    });
  }, [facilitationScript, totalDuration]);

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Session Timeline</h4>
      <div className="space-y-2">
        {segs.map((seg, i) => {
          const op = 0.25 + (i / (segs.length - 1 || 1)) * 0.5;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-16 text-[10px] font-mono text-muted text-right">{seg.time}</span>
              <div className="flex-1 h-5 rounded-full overflow-hidden bg-surface-raised relative">
                <div className="absolute h-full rounded-full flex items-center px-1.5"
                  style={{ left: `${(seg.start / totalDuration) * 100}%`, width: `${seg.w}%`, backgroundColor: c, opacity: op, minWidth: 20 }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-2 px-[76px]">
        {[0, Math.round(totalDuration / 4), Math.round(totalDuration / 2), Math.round(3 * totalDuration / 4), totalDuration].map(m => (
          <span key={m} className="text-[9px] text-muted font-mono">{m}m</span>
        ))}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   10. RUBRIC CHART
   ═══════════════════════════════════════ */
const rubricLevelCfg = {
  excellent:  { colour: '#3fb950', pct: 100 },
  good:       { colour: '#58a6ff', pct: 75 },
  developing: { colour: '#d29922', pct: 50 },
  beginning:  { colour: '#f85149', pct: 25 },
};

export function RubricChart({ rubricSnapshot }) {
  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Assessment Levels</h4>
      <div className="space-y-3">
        {Object.entries(rubricSnapshot).map(([level, desc]) => {
          const cfg = rubricLevelCfg[level] || rubricLevelCfg.good;
          return (
            <div key={level}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold capitalize" style={{ color: cfg.colour }}>{level}</span>
                <span className="text-[10px] text-muted font-mono">{cfg.pct}%</span>
              </div>
              <div className="h-3 rounded-full bg-surface-raised overflow-hidden mb-1">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${cfg.pct}%`, backgroundColor: cfg.colour, opacity: 0.6 }} />
              </div>
              <p className="text-[10px] text-muted leading-snug">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   11. LEARNING JOURNEY MAP
   ═══════════════════════════════════════ */
export function LearningJourneyMap({ learningOutcomes, stream }) {
  const c = streamColor(stream);

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Your Learning Journey</h4>
      <div className="relative">
        <div className="absolute left-[15px] top-3 bottom-3 w-px" style={{ backgroundColor: c, opacity: 0.15 }} />
        <div className="space-y-3">
          {learningOutcomes.map((o, i) => {
            const prog = ((i + 1) / learningOutcomes.length) * 100;
            return (
              <div key={i} className="flex items-start gap-3 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-bold font-mono"
                    style={{ backgroundColor: c, color: 'var(--theme-invert)', opacity: 0.15 + (prog / 100) * 0.7 }}>
                    {i + 1}
                  </div>
                </div>
                <div className="pt-1 flex-1">
                  <p className="text-[12px] text-body leading-relaxed">{o}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 mt-3 ml-[42px]">
          <Target className="w-3.5 h-3.5" style={{ color: c }} />
          <span className="text-[10px] font-semibold" style={{ color: c }}>Activity Complete</span>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   12. MATERIALS VISUAL GRID
   ═══════════════════════════════════════ */
export function MaterialsVisualGrid({ materials, stream }) {
  const c = streamColor(stream);

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-2">Materials Checklist</h4>
      <div className="grid grid-cols-2 gap-2">
        {materials.map((m, i) => (
          <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-[8px] bg-surface-raised border border-edge group">
            <div className="flex-shrink-0 w-6 h-6 rounded-[6px] flex items-center justify-center text-[10px] font-bold font-mono mt-0.5"
              style={{ backgroundColor: c, color: 'var(--theme-invert)', opacity: 0.7 }}>
              {i + 1}
            </div>
            <span className="text-[11.5px] text-body leading-snug">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════
   13. ENGAGEMENT CURVE
   ═══════════════════════════════════════ */
export function EngagementCurve({ procedure, stream }) {
  const c = streamColor(stream);
  const n = procedure.length;
  if (n < 2) return null;

  const vals = procedure.map((_, i) => {
    const t = i / (n - 1);
    return 0.3 + 0.7 * Math.sin(t * Math.PI * 0.85 + 0.3);
  });
  const w = 240, h = 80, px = 25, py = 10;
  const pw = w - px * 2, ph = h - py * 2;
  const pts = vals.map((v, i) => `${px + (i / (n - 1)) * pw},${py + ph - v * ph}`).join(' ');
  const area = `${px},${py + ph} ${pts} ${px + pw},${py + ph}`;

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3">
      <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em] mb-1.5">Expected Engagement</h4>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        {[0.25, 0.5, 0.75].map(g => (
          <line key={g} x1={px} y1={py + ph - g * ph} x2={px + pw} y2={py + ph - g * ph} stroke="var(--theme-edge)" strokeWidth="1" />
        ))}
        <polygon points={area} fill={c} fillOpacity="0.06" />
        <polyline points={pts} fill="none" stroke={c} strokeWidth="2" opacity="0.5" strokeLinejoin="round" />
        {vals.map((v, i) => {
          const x = px + (i / (n - 1)) * pw;
          const y = py + ph - v * ph;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill={c} opacity="0.7" />
              <text x={x} y={h - 1} textAnchor="middle" fill="var(--theme-muted)" fontSize="6.5" fontFamily="Inter, sans-serif">S{i + 1}</text>
            </g>
          );
        })}
        <text x={px - 3} y={py + 3} textAnchor="end" fill="var(--theme-muted)" fontSize="6">High</text>
        <text x={px - 3} y={py + ph} textAnchor="end" fill="var(--theme-muted)" fontSize="6">Low</text>
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════
   14. TIPS VISUAL
   ═══════════════════════════════════════ */
export function TipsVisual({ tips, stream }) {
  const c = streamColor(stream);

  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {tips.map((tip, i) => (
        <div key={i} className="p-3 rounded-[10px] bg-surface glass-card border border-edge relative overflow-hidden">
          <span className="absolute top-1 right-2 text-[32px] font-black font-mono leading-none"
            style={{ color: c, opacity: 0.06 }}>
            {i + 1}
          </span>
          <div className="relative flex items-start gap-2.5">
            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono"
              style={{ backgroundColor: c, color: 'var(--theme-invert)', opacity: 0.7 }}>
              {i + 1}
            </div>
            <p className="text-[12px] text-body leading-relaxed pt-0.5">{tip}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ═══════════════════════════════════════
   15. MISCONCEPTIONS DIAGRAM
   ═══════════════════════════════════════ */
export function MisconceptionsDiagram({ misconceptions }) {
  if (!misconceptions || misconceptions.length === 0) return null;
  const total = misconceptions.length;

  return (
    <div className="rounded-[10px] bg-surface glass-card border border-edge p-3 mb-1">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[11px] font-bold text-muted uppercase tracking-[0.06em]">Risk Distribution</h4>
        <span className="text-[10px] font-mono text-warning">{total} identified</span>
      </div>
      <div className="flex items-end gap-1.5 h-20 mb-1">
        {misconceptions.map((_, i) => {
          const sev = 1 - (i / total) * 0.5;
          return (
            <div key={i} className="flex-1 rounded-t-[3px] transition-all"
              style={{ height: `${sev * 100}%`, backgroundColor: '#d29922', opacity: 0.2 + sev * 0.4 }}
              title={misconceptions[i]} />
          );
        })}
      </div>
      <div className="flex justify-between text-[9px] text-muted">
        <span>Most common</span>
        <span>Less common</span>
      </div>
    </div>
  );
}
