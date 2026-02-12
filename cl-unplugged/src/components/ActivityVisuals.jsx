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
    case 'file-treasure-hunt':      return <FileTreasureHuntSVG c={c} p={playing} />;
    case 'desktop-algorithm':       return <DesktopAlgorithmSVG c={c} p={playing} />;
    case 'ai-boundaries':           return <AIBoundariesSVG c={c} p={playing} />;
    case 'email-professionalism':   return <EmailProfSVG c={c} p={playing} />;
    case 'phishing-game':           return <PhishingGameSVG c={c} p={playing} />;
    case 'card-flip-parity':        return <CardFlipSVG c={c} p={playing} />;
    case 'password-calculator':     return <PasswordCalcSVG c={c} p={playing} />;
    case 'document-debugging':      return <DocDebuggingSVG c={c} p={playing} />;
    case 'ai-format-compare':       return <AIFormatCompareSVG c={c} p={playing} />;
    case 'report-decomposition':    return <ReportDecompSVG c={c} p={playing} />;
    case 'template-patterns':       return <TemplatePatternsSVG c={c} p={playing} />;
    case 'mini-report':             return <MiniReportSVG c={c} p={playing} />;
    case 'plagiarism-detective':    return <PlagiarismDetSVG c={c} p={playing} />;
    case 'citation-error-hunt':     return <CitationHuntSVG c={c} p={playing} />;
    case 'human-spreadsheet':       return <HumanSpreadsheetSVG c={c} p={playing} />;
    case 'formula-detective':       return <FormulaDetSVG c={c} p={playing} />;
    case 'class-dataset':           return <ClassDatasetSVG c={c} p={playing} />;
    case 'validation-rules':        return <ValidationRulesSVG c={c} p={playing} />;
    case 'misleading-graphs':       return <MisleadingGraphsSVG c={c} p={playing} />;
    case 'chart-types':             return <ChartTypesSVG c={c} p={playing} />;
    case 'logic-gates':             return <LogicGatesSVG c={c} p={playing} />;
    case 'decision-tree':           return <DecisionTreeSVG c={c} p={playing} />;
    case 'grading-logic':           return <GradingLogicSVG c={c} p={playing} />;
    case 'data-story':              return <DataStorySVG c={c} p={playing} />;
    case 'quality-checklist':       return <QualityChecklistSVG c={c} p={playing} />;
    case 'ai-content-detect':       return <AIContentDetectSVG c={c} p={playing} />;
    case 'misinfo-flowchart':       return <MisinfoFlowchartSVG c={c} p={playing} />;
    case 'human-router':            return <HumanRouterSVG c={c} p={playing} />;
    case 'algorithm-olympics':      return <AlgorithmOlympicsSVG c={c} p={playing} />;
    case 'practical-assessment':    return <PracticalAssessSVG c={c} p={playing} />;
    case 'binary-necklace':         return <BinaryNecklaceSVG c={c} p={playing} />;
    case 'algorithmic-art':         return <AlgorithmicArtSVG c={c} p={playing} />;
    case 'compression-challenge':   return <CompressionSVG c={c} p={playing} />;
    case 'shortest-path':           return <ShortestPathSVG c={c} p={playing} />;
    case 'searching-challenge':     return <SearchingChallengeSVG c={c} p={playing} />;
    case 'sorting-showdown':        return <SortingShowdownSVG c={c} p={playing} />;
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
          <text x={phase === 0 ? 28 : 214} y={lanes[i] + 3.5} textAnchor="middle" fill="var(--theme-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">{val}</text>
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
          <text x={20 + i * 20} y="78" textAnchor="middle" fill="var(--theme-body)" fontSize="8" fontFamily="monospace">{i}</text>
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
      <text x="61" y="55" textAnchor="middle" fill="var(--theme-body)" fontSize="7.5" fontFamily="monospace">BAG</text>
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
          <text x="0" y="3" textAnchor="middle" fill="var(--theme-heading)" fontSize="7" fontWeight="bold">{i + 1}</text>
        </motion.g>
      ))}
      {/* Probability readout */}
      <rect x="115" y="65" width="110" height="6" rx="3" fill={c} fillOpacity={0.06} />
      {drawn.length > 0 && (
        <motion.rect x="115" y="65" height="6" rx="3" fill={c} fillOpacity={0.35}
          animate={{ width: (blueCount / drawn.length) * 110 }}
        />
      )}
      <text x="170" y="88" textAnchor="middle" fill="var(--theme-body)" fontSize="7.5" fontFamily="monospace">
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
        <text x="36" y="80" textAnchor="middle" fill="var(--theme-body)" fontSize="6">{labels[0]}</text>
      </g>
      {/* Line chart */}
      <g transform="translate(88,16)" opacity={active === 1 ? 1 : 0.2}>
        <polyline points="5,55 16,30 27,42 38,15 49,25 60,20" fill="none" stroke={c} strokeWidth="2" opacity={0.55} />
        {[5,16,27,38,49,60].map((x, i) => <circle key={i} cx={x} cy={[55,30,42,15,25,20][i]} r="2.5" fill={c} fillOpacity={0.6} />)}
        <text x="33" y="80" textAnchor="middle" fill="var(--theme-body)" fontSize="6">{labels[1]}</text>
      </g>
      {/* Scatter */}
      <g transform="translate(168,16)" opacity={active === 2 ? 1 : 0.2}>
        {[[8,52],[18,38],[28,45],[38,22],[48,30],[22,55],[42,18]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill={c} fillOpacity={0.4} />
        ))}
        <text x="28" y="80" textAnchor="middle" fill="var(--theme-body)" fontSize="6">{labels[2]}</text>
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


/* ─────────────────────────────────────
   CL-008  File System Treasure Hunt
   Animated folder tree with path
   trace highlighting and file reveal
   ───────────────────────────────────── */
function FileTreasureHuntSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const folders = [
    { x: 100, y: 8, w: 40, label: 'Root' },
    { x: 55, y: 35, w: 38, label: 'Docs' },
    { x: 145, y: 35, w: 38, label: 'Misc' },
    { x: 30, y: 62, w: 36, label: 'Work' },
    { x: 80, y: 62, w: 36, label: 'Old' },
    { x: 130, y: 62, w: 36, label: 'Temp' },
    { x: 170, y: 62, w: 36, label: 'Data' },
  ];
  const path = [0, 2, 3]; // Root → Misc → ... but treasure is in Work
  const treasureIdx = 3;
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % 6), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Connecting lines */}
      <line x1="120" y1="20" x2="74" y2="35" stroke={c} strokeWidth="1" opacity={0.12} />
      <line x1="120" y1="20" x2="164" y2="35" stroke={c} strokeWidth="1" opacity={0.12} />
      <line x1="74" y1="47" x2="48" y2="62" stroke={c} strokeWidth="1" opacity={0.12} />
      <line x1="74" y1="47" x2="98" y2="62" stroke={c} strokeWidth="1" opacity={0.12} />
      <line x1="164" y1="47" x2="148" y2="62" stroke={c} strokeWidth="1" opacity={0.12} />
      <line x1="164" y1="47" x2="188" y2="62" stroke={c} strokeWidth="1" opacity={0.12} />
      {/* Folder nodes */}
      {folders.map((f, i) => {
        const active = step > 0 && step <= path.length && path[step - 1] === i;
        const found = step >= 4 && i === treasureIdx;
        return (
          <g key={i}>
            <rect x={f.x} y={f.y} width={f.w} height={16} rx="3"
              fill={c} fillOpacity={found ? 0.3 : active ? 0.18 : 0.05}
              stroke={c} strokeOpacity={found ? 0.6 : active ? 0.4 : 0.12} strokeWidth="1" />
            <text x={f.x + f.w / 2} y={f.y + 11} textAnchor="middle" fill={found || active ? c : 'var(--theme-muted)'}
              fontSize="6.5" fontWeight={found ? 'bold' : 'normal'} fontFamily="monospace">{f.label}</text>
          </g>
        );
      })}
      {/* Treasure star */}
      {step >= 4 && (
        <motion.text x="48" y="90" textAnchor="middle" fill={c} fontSize="14"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}>
          ★
        </motion.text>
      )}
      {/* Search indicator */}
      <motion.circle cx={step < 4 ? folders[path[Math.min(step, path.length) - 1]]?.x + 20 || 120 : 48}
        cy={step < 4 ? (folders[path[Math.min(step, path.length) - 1]]?.y || 8) + 8 : 82}
        r="4" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity={step > 0 ? 0.5 : 0}
        animate={p && step > 0 ? { strokeOpacity: [0.3, 0.7, 0.3] } : {}}
        transition={{ duration: 0.6, repeat: Infinity }} />
      {/* File found label */}
      {step >= 5 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <rect x="140" y="82" width="70" height="16" rx="4" fill={c} fillOpacity={0.12} />
          <text x="175" y="93" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace">FILE FOUND!</text>
        </motion.g>
      )}
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-009  Desktop Organisation Algorithm
   Two-panel: scattered icons animate
   into categorised groups following
   numbered algorithm steps
   ───────────────────────────────────── */
function DesktopAlgorithmSVG({ c, p }) {
  const [phase, setPhase] = useState(0);
  const icons = [
    { label: '.doc', sx: 25, sy: 20, tx: 152, ty: 22, cat: 0 },
    { label: '.xls', sx: 50, sy: 55, tx: 152, ty: 38, cat: 0 },
    { label: '.jpg', sx: 15, sy: 70, tx: 192, ty: 22, cat: 1 },
    { label: '.png', sx: 85, sy: 15, tx: 192, ty: 38, cat: 1 },
    { label: '.pdf', sx: 70, sy: 45, tx: 152, ty: 54, cat: 0 },
    { label: '.mp3', sx: 40, sy: 85, tx: 192, ty: 54, cat: 1 },
  ];
  const steps = ['1. Scan files', '2. Categorise', '3. Move files', '4. Verify'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPhase(s => (s + 1) % 6), 1100);
    return () => clearInterval(id);
  }, [p]);
  const sorted = phase >= 3;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Left panel — Desktop */}
      <rect x="5" y="5" width="105" height="100" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="10" y="15" fill="var(--theme-muted)" fontSize="6" fontFamily="monospace">Desktop</text>
      {/* Right panel — Organised */}
      <rect x="135" y="5" width="100" height="100" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="140" y="15" fill="var(--theme-muted)" fontSize="6" fontFamily="monospace">Organised</text>
      {/* Category labels */}
      {sorted && (
        <>
          <text x="152" y="19" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>DOCS</text>
          <text x="192" y="19" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>MEDIA</text>
          <line x1="182" y1="15" x2="182" y2="70" stroke={c} strokeWidth="0.5" opacity={0.1} />
        </>
      )}
      {/* File icons */}
      {icons.map((ic, i) => (
        <motion.g key={i}
          animate={{ x: sorted ? ic.tx - ic.sx : 0, y: sorted ? ic.ty - ic.sy : 0 }}
          transition={{ delay: sorted ? i * 0.12 : 0, type: 'spring', stiffness: 100, damping: 12 }}>
          <rect x={ic.sx} y={ic.sy} width="24" height="12" rx="2"
            fill={c} fillOpacity={phase > 0 ? 0.15 : 0.06} stroke={c} strokeOpacity={0.2} strokeWidth="0.7" />
          <text x={ic.sx + 12} y={ic.sy + 8.5} textAnchor="middle" fill={c} fontSize="5.5" fontFamily="monospace">{ic.label}</text>
        </motion.g>
      ))}
      {/* Algorithm steps panel */}
      <rect x="115" y="75" width="55" height="28" rx="3" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.08} />
      {steps.map((s, i) => (
        <text key={i} x="118" y={82 + i * 6.5} fill={i < phase ? c : 'var(--theme-muted)'}
          fontSize="4.5" fontFamily="monospace" fontWeight={i < phase ? 'bold' : 'normal'} opacity={i < phase ? 0.7 : 0.3}>{s}</text>
      ))}
      {/* Arrow between panels */}
      {phase >= 2 && (
        <motion.path d="M112,55 L133,55" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity={0.4}
          markerEnd="url(#arrowDesk)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }} />
      )}
      <defs>
        <marker id="arrowDesk" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill={c} fillOpacity={0.4} />
        </marker>
      </defs>
    </svg>
  );
}


/* ─────────────────────────────────────
   CL-010  AI Boundaries
   Chat-style interface with traffic
   light indicators: green = safe use,
   red = unsafe, yellow = caution
   ───────────────────────────────────── */
function AIBoundariesSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const items = [
    { q: 'Check grammar', status: 'green', y: 20 },
    { q: 'Write my essay', status: 'red', y: 42 },
    { q: 'Explain concept', status: 'green', y: 64 },
    { q: 'Fake reference', status: 'red', y: 86 },
  ];
  const colMap = { green: '#3fb950', red: '#f85149', yellow: '#d29922' };
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (items.length + 2)), 1000);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Chat window frame */}
      <rect x="15" y="5" width="210" height="100" rx="6" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <rect x="15" y="5" width="210" height="14" rx="6" fill={c} fillOpacity={0.05} />
      <text x="120" y="14" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>AI USAGE CHECK</text>
      {/* Prompt items */}
      {items.map((item, i) => {
        const visible = i < step;
        if (!visible) return null;
        return (
          <motion.g key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}>
            {/* Prompt bubble */}
            <rect x="25" y={item.y} width="120" height="14" rx="4" fill={c} fillOpacity={0.08} />
            <text x="32" y={item.y + 10} fill={c} fontSize="6" fontFamily="monospace">"{item.q}"</text>
            {/* Status indicator */}
            <circle cx="170" cy={item.y + 7} r="5" fill={colMap[item.status]} fillOpacity={0.25}
              stroke={colMap[item.status]} strokeWidth="1.5" />
            <text x="170" y={item.y + 10} textAnchor="middle" fill={colMap[item.status]} fontSize="6" fontWeight="bold">
              {item.status === 'green' ? '✓' : '✗'}
            </text>
            {/* Label */}
            <text x="185" y={item.y + 10} fill={colMap[item.status]} fontSize="5.5" fontFamily="monospace" fontWeight="bold">
              {item.status === 'green' ? 'SAFE' : 'AVOID'}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}


/* ── CL-011  Email Professionalism ─── */
function EmailProfSVG({ c, p }) {
  const [hi, setHi] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setHi(h => (h + 1) % 2), 1400);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Bad email */}
      <rect x="10" y="10" width="100" height="90" rx="5" fill={c} fillOpacity={0.02} stroke={hi === 0 ? '#f85149' : c} strokeOpacity={hi === 0 ? 0.6 : 0.1} strokeWidth={hi === 0 ? 1.5 : 0.7} />
      <text x="60" y="22" textAnchor="middle" fill="#f85149" fontSize="6" fontWeight="bold" fontFamily="monospace">INFORMAL ✗</text>
      <rect x="18" y="28" width="84" height="8" rx="2" fill="#f85149" fillOpacity={0.08} />
      <text x="22" y="34" fill={c} fontSize="5" fontFamily="monospace">"hey bro wats up..."</text>
      <rect x="18" y="40" width="84" height="8" rx="2" fill="#f85149" fillOpacity={0.05} />
      <text x="22" y="46" fill={c} fontSize="5" fontFamily="monospace">"can u send me the"</text>
      <rect x="18" y="52" width="84" height="8" rx="2" fill="#f85149" fillOpacity={0.05} />
      <text x="22" y="58" fill={c} fontSize="5" fontFamily="monospace">"thing lol thx"</text>
      <text x="22" y="72" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">No subject line</text>
      <text x="22" y="80" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">No greeting</text>
      <text x="22" y="88" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Slang / abbrevs</text>
      {/* Good email */}
      <rect x="130" y="10" width="100" height="90" rx="5" fill={c} fillOpacity={0.02} stroke={hi === 1 ? '#3fb950' : c} strokeOpacity={hi === 1 ? 0.6 : 0.1} strokeWidth={hi === 1 ? 1.5 : 0.7} />
      <text x="180" y="22" textAnchor="middle" fill="#3fb950" fontSize="6" fontWeight="bold" fontFamily="monospace">PROFESSIONAL ✓</text>
      <rect x="138" y="28" width="84" height="8" rx="2" fill="#3fb950" fillOpacity={0.08} />
      <text x="142" y="34" fill={c} fontSize="5" fontFamily="monospace">"Dear Sir/Madam,"</text>
      <rect x="138" y="40" width="84" height="8" rx="2" fill="#3fb950" fillOpacity={0.05} />
      <text x="142" y="46" fill={c} fontSize="5" fontFamily="monospace">"I am writing to"</text>
      <rect x="138" y="52" width="84" height="8" rx="2" fill="#3fb950" fillOpacity={0.05} />
      <text x="142" y="58" fill={c} fontSize="5" fontFamily="monospace">"Kind regards, J."</text>
      <text x="142" y="72" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Clear subject</text>
      <text x="142" y="80" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Formal greeting</text>
      <text x="142" y="88" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Proper language</text>
      {/* Highlight arrow */}
      <motion.polygon points={hi === 0 ? "60,102 55,108 65,108" : "180,102 175,108 185,108"}
        fill={hi === 0 ? '#f85149' : '#3fb950'} fillOpacity={0.5}
        animate={p ? { y: [0, -2, 0] } : {}} transition={{ duration: 0.6, repeat: Infinity }} />
    </svg>
  );
}


/* ── CL-012  Phishing Game ─────────── */
function PhishingGameSVG({ c, p }) {
  const [scan, setScan] = useState(0);
  const flags = [
    { x: 30, y: 38, w: 80, label: 'From: n0-reply@bnak.com', bad: true },
    { x: 30, y: 52, w: 80, label: 'URGENT! Act NOW!!!', bad: true },
    { x: 30, y: 66, w: 80, label: 'Click: http://bit.ly/x3k', bad: true },
    { x: 30, y: 80, w: 80, label: 'Dear Valued Customer', bad: false },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setScan(s => (s + 1) % (flags.length + 2)), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Envelope */}
      <rect x="15" y="8" width="130" height="95" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="80" y="20" textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="monospace" opacity={0.5}>INCOMING EMAIL</text>
      <line x1="15" y1="28" x2="145" y2="28" stroke={c} strokeOpacity={0.08} />
      {flags.map((f, i) => {
        const revealed = i < scan;
        return (
          <motion.g key={i} initial={{ opacity: 0.4 }} animate={{ opacity: revealed ? 1 : 0.4 }}>
            <rect x={f.x} y={f.y} width={f.w} height="10" rx="2" fill={revealed && f.bad ? '#f85149' : c} fillOpacity={revealed && f.bad ? 0.12 : 0.04} stroke={revealed && f.bad ? '#f85149' : 'none'} strokeWidth="0.7" strokeOpacity={0.5} />
            <text x={f.x + 3} y={f.y + 7.5} fill={revealed && f.bad ? '#f85149' : c} fontSize="5" fontFamily="monospace">{f.label}</text>
          </motion.g>
        );
      })}
      {/* Magnifying glass */}
      <motion.g animate={p ? { x: [0, 0, 0, 0, 0], y: scan < flags.length ? [0, 14 * scan] : [14 * (flags.length - 1)] } : {}}
        transition={{ duration: 0.4 }}>
        <circle cx="155" cy="42" r="12" fill="none" stroke={c} strokeWidth="1.5" strokeOpacity={0.3} />
        <line x1="163" y1="51" x2="170" y2="58" stroke={c} strokeWidth="2" strokeOpacity={0.3} />
        <text x="155" y="45" textAnchor="middle" fill={c} fontSize="7" opacity={0.4}>🔍</text>
      </motion.g>
      {/* Result panel */}
      <rect x="160" y="15" width="70" height="85" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="195" y="27" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>VERDICT</text>
      {scan >= flags.length && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <rect x="170" y="40" width="50" height="18" rx="4" fill="#f85149" fillOpacity={0.15} stroke="#f85149" strokeOpacity={0.4} />
          <text x="195" y="52" textAnchor="middle" fill="#f85149" fontSize="7" fontWeight="bold" fontFamily="monospace">PHISHING</text>
          <text x="195" y="70" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">3 red flags</text>
        </motion.g>
      )}
    </svg>
  );
}


/* ── CL-013  Card Flip (Parity) ────── */
function CardFlipSVG({ c, p }) {
  const gridSize = 5;
  const [flipPos, setFlipPos] = useState({ r: 2, c: 3 });
  const [showParity, setShowParity] = useState(false);
  const baseGrid = useMemo(() => {
    const g = [];
    for (let r = 0; r < gridSize; r++) {
      const row = [];
      for (let cl = 0; cl < gridSize; cl++) row.push((r + cl) % 2 === 0 ? 1 : 0);
      g.push(row);
    }
    return g;
  }, []);
  useEffect(() => {
    if (!p) return;
    let step = 0;
    const id = setInterval(() => {
      step = (step + 1) % 6;
      if (step === 0) { setFlipPos({ r: Math.floor(Math.random() * gridSize), c: Math.floor(Math.random() * gridSize) }); setShowParity(false); }
      if (step === 2) setShowParity(true);
    }, 800);
    return () => clearInterval(id);
  }, [p]);
  const cellSz = 12, gap = 2, ox = 55, oy = 18;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>PARITY BIT — FIND THE FLIP</text>
      {baseGrid.map((row, ri) => row.map((val, ci) => {
        const flipped = ri === flipPos.r && ci === flipPos.c;
        const shown = flipped ? 1 - val : val;
        return (
          <motion.rect key={`${ri}-${ci}`} x={ox + ci * (cellSz + gap)} y={oy + ri * (cellSz + gap)}
            width={cellSz} height={cellSz} rx="2"
            fill={shown ? c : 'none'} fillOpacity={shown ? 0.3 : 0}
            stroke={flipped && showParity ? '#f85149' : c} strokeWidth={flipped && showParity ? 1.5 : 0.7} strokeOpacity={flipped && showParity ? 0.8 : 0.15}
            animate={flipped && showParity ? { scale: [1, 1.15, 1] } : {}} transition={{ duration: 0.4, repeat: Infinity }} />
        );
      }))}
      {/* Row/col highlight */}
      {showParity && (
        <>
          <motion.rect x={ox - 3} y={oy + flipPos.r * (cellSz + gap) - 2} width={gridSize * (cellSz + gap) + 4} height={cellSz + 4} rx="3" fill="#f85149" fillOpacity={0.06} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          <motion.rect x={ox + flipPos.c * (cellSz + gap) - 2} y={oy - 3} width={cellSz + 4} height={gridSize * (cellSz + gap) + 4} rx="3" fill="#f85149" fillOpacity={0.06} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        </>
      )}
      {/* Legend */}
      <rect x="160" y="25" width="70" height="60" rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="165" y="35" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">Row parity check</text>
      <text x="165" y="45" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">Col parity check</text>
      <text x="165" y="58" fill={showParity ? '#f85149' : 'var(--theme-muted)'} fontSize="5.5" fontWeight="bold" fontFamily="monospace">
        {showParity ? `Found: R${flipPos.r + 1} C${flipPos.c + 1}` : 'Scanning...'}
      </text>
      <rect x="165" y="64" width="8" height="8" rx="1" fill={c} fillOpacity={0.3} stroke={c} strokeOpacity={0.2} />
      <text x="177" y="70.5" fill="var(--theme-body)" fontSize="4.5" fontFamily="monospace">= 1 (filled)</text>
      <rect x="165" y="75" width="8" height="8" rx="1" fill="none" stroke={c} strokeOpacity={0.15} />
      <text x="177" y="81.5" fill="var(--theme-body)" fontSize="4.5" fontFamily="monospace">= 0 (empty)</text>
    </svg>
  );
}


/* ── CL-014  Password Strength Calc ── */
function PasswordCalcSVG({ c, p }) {
  const [phase, setPhase] = useState(0);
  const levels = [
    { dots: 4, label: '4 digits', combos: '10,000', pct: 15, col: '#f85149' },
    { dots: 6, label: '6 lower', combos: '308M', pct: 40, col: '#d29922' },
    { dots: 8, label: '8 mixed', combos: '2.1B', pct: 70, col: '#d29922' },
    { dots: 12, label: '12 all', combos: '475T', pct: 95, col: '#3fb950' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPhase(s => (s + 1) % levels.length), 1400);
    return () => clearInterval(id);
  }, [p]);
  const lv = levels[phase];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="14" textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="monospace" opacity={0.5}>PASSWORD STRENGTH</text>
      {/* Password field */}
      <rect x="40" y="22" width="160" height="18" rx="4" fill={c} fillOpacity={0.03} stroke={c} strokeOpacity={0.12} />
      {Array.from({ length: lv.dots }).map((_, i) => (
        <motion.circle key={i} cx={55 + i * 14} cy="31" r="3.5" fill={c} fillOpacity={0.5}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.06 }} />
      ))}
      {/* Strength bar */}
      <rect x="40" y="48" width="160" height="10" rx="3" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.08} />
      <motion.rect x="40" y="48" width={160 * lv.pct / 100} height="10" rx="3" fill={lv.col} fillOpacity={0.35}
        animate={{ width: 160 * lv.pct / 100 }} transition={{ duration: 0.5 }} />
      <text x={40 + 160 * lv.pct / 100 + 4} y="56" fill={lv.col} fontSize="5.5" fontWeight="bold" fontFamily="monospace">{lv.pct}%</text>
      {/* Info boxes */}
      <rect x="30" y="68" width="80" height="32" rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="35" y="79" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">Type:</text>
      <text x="55" y="79" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace">{lv.label}</text>
      <text x="35" y="92" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">Combos:</text>
      <text x="65" y="92" fill={lv.col} fontSize="6" fontWeight="bold" fontFamily="monospace">{lv.combos}</text>
      <rect x="130" y="68" width="80" height="32" rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="135" y="79" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">Crack time:</text>
      <text x="135" y="92" fill={lv.col} fontSize="6" fontWeight="bold" fontFamily="monospace">
        {phase === 0 ? '< 1 sec' : phase === 1 ? '~5 min' : phase === 2 ? '~2 yrs' : '1000+ yrs'}
      </text>
    </svg>
  );
}


/* ── CL-015  Doc Debugging ─────────── */
function DocDebuggingSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const bugs = [
    { y: 30, label: 'Spelling error' },
    { y: 46, label: 'Missing ref' },
    { y: 62, label: 'Wrong format' },
    { y: 78, label: 'Broken link' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (bugs.length + 2)), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Document */}
      <rect x="20" y="8" width="120" height="95" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="80" y="20" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>DOCUMENT</text>
      {bugs.map((b, i) => {
        const fixed = i < step;
        return (
          <g key={i}>
            {/* Text line */}
            <rect x="30" y={b.y} width="90" height="4" rx="1" fill={c} fillOpacity={0.1} />
            {/* Wavy underline or fix */}
            {!fixed && (
              <motion.path d={`M30,${b.y + 6} Q40,${b.y + 3} 50,${b.y + 6} T70,${b.y + 6} T90,${b.y + 6}`}
                fill="none" stroke="#f85149" strokeWidth="1" strokeOpacity={0.6}
                animate={p ? { strokeOpacity: [0.3, 0.7, 0.3] } : {}} transition={{ duration: 1, repeat: Infinity }} />
            )}
            {/* Bug / fix icon */}
            <motion.text x="125" y={b.y + 5} fill={fixed ? '#3fb950' : '#f85149'} fontSize="7" fontFamily="monospace"
              animate={fixed ? { scale: [1.3, 1] } : {}} transition={{ duration: 0.3 }}>
              {fixed ? '✓' : '🐛'}
            </motion.text>
          </g>
        );
      })}
      {/* Debug console */}
      <rect x="155" y="8" width="75" height="95" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="192" y="20" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>DEBUG LOG</text>
      {bugs.map((b, i) => {
        if (i >= step) return null;
        return (
          <motion.g key={`log-${i}`} initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }}>
            <text x="162" y={32 + i * 14} fill="#3fb950" fontSize="5" fontFamily="monospace">✓ Fixed:</text>
            <text x="162" y={40 + i * 14} fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">{b.label}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}


/* ── CL-016  AI Format Compare ─────── */
function AIFormatCompareSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const rows = [
    { label: 'Structure', human: true, ai: true },
    { label: 'Citations', human: true, ai: false },
    { label: 'Tone', human: true, ai: false },
    { label: 'Grammar', human: false, ai: true },
    { label: 'Original', human: true, ai: false },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (rows.length + 2)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Left: Human */}
      <rect x="10" y="5" width="105" height="100" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="62" y="17" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>HUMAN</text>
      <rect x="20" y="22" width="85" height="4" rx="1" fill={c} fillOpacity={0.08} />
      <rect x="20" y="30" width="70" height="3" rx="1" fill={c} fillOpacity={0.05} />
      <rect x="20" y="36" width="78" height="3" rx="1" fill={c} fillOpacity={0.05} />
      <rect x="20" y="42" width="60" height="3" rx="1" fill={c} fillOpacity={0.05} />
      {/* Right: AI */}
      <rect x="125" y="5" width="105" height="100" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="177" y="17" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>AI</text>
      <rect x="135" y="22" width="85" height="4" rx="1" fill={c} fillOpacity={0.08} />
      <rect x="135" y="30" width="75" height="3" rx="1" fill={c} fillOpacity={0.05} />
      <rect x="135" y="36" width="80" height="3" rx="1" fill={c} fillOpacity={0.05} />
      <rect x="135" y="42" width="65" height="3" rx="1" fill={c} fillOpacity={0.05} />
      {/* Comparison rows */}
      {rows.map((r, i) => {
        if (i >= step) return null;
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <text x="62" y={58 + i * 11} textAnchor="middle" fill={r.human ? '#3fb950' : '#f85149'} fontSize="7" fontWeight="bold">{r.human ? '✓' : '✗'}</text>
            <text x="120" y={58 + i * 11} textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">{r.label}</text>
            <text x="177" y={58 + i * 11} textAnchor="middle" fill={r.ai ? '#3fb950' : '#f85149'} fontSize="7" fontWeight="bold">{r.ai ? '✓' : '✗'}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}


/* ── CL-017  Report Decomposition ──── */
function ReportDecompSVG({ c, p }) {
  const [phase, setPhase] = useState(0);
  const blocks = [
    { label: 'TOC', sx: 75, sy: 25, tx: 15, ty: 15, w: 40, h: 12 },
    { label: 'HEADING', sx: 75, sy: 40, tx: 65, ty: 15, w: 50, h: 12 },
    { label: 'BODY', sx: 75, sy: 55, tx: 125, ty: 15, w: 45, h: 12 },
    { label: 'FIGURE', sx: 75, sy: 70, tx: 15, ty: 55, w: 45, h: 12 },
    { label: 'CAPTION', sx: 75, sy: 85, tx: 70, ty: 55, w: 50, h: 12 },
    { label: 'REFS', sx: 80, sy: 95, tx: 135, ty: 55, w: 40, h: 12 },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPhase(s => (s + 1) % 4), 1500);
    return () => clearInterval(id);
  }, [p]);
  const spread = phase >= 2;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="10" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>
        {spread ? 'COMPONENTS' : 'FULL REPORT'}
      </text>
      {!spread && (
        <rect x="60" y="15" width="70" height="90" rx="4" fill={c} fillOpacity={0.03} stroke={c} strokeOpacity={0.12} />
      )}
      {blocks.map((b, i) => {
        const colors = ['#58a6ff', '#3fb950', '#d29922', '#f85149', '#bc8cff', '#58a6ff'];
        return (
          <motion.g key={i}
            animate={{ x: spread ? b.tx - b.sx : 0, y: spread ? b.ty - b.sy : 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 80, damping: 14 }}>
            <rect x={b.sx} y={b.sy} width={spread ? b.w + 15 : b.w} height={spread ? b.h + 8 : b.h} rx="3"
              fill={colors[i]} fillOpacity={spread ? 0.12 : 0.06} stroke={colors[i]} strokeOpacity={0.3} strokeWidth="0.7" />
            <text x={b.sx + (spread ? (b.w + 15) / 2 : b.w / 2)} y={b.sy + (spread ? (b.h + 8) / 2 + 2 : b.h / 2 + 2)}
              textAnchor="middle" fill={colors[i]} fontSize="5.5" fontWeight="bold" fontFamily="monospace">{b.label}</text>
          </motion.g>
        );
      })}
      {spread && (
        <>
          {blocks.map((b, i) => (
            <motion.line key={`ln-${i}`} x1={b.tx + 20} y1={b.ty + 10} x2={120} y2={50}
              stroke={c} strokeWidth="0.5" strokeOpacity={0.08} strokeDasharray="2,2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
          ))}
        </>
      )}
    </svg>
  );
}


/* ── CL-018  Template Patterns ─────── */
function TemplatePatternsSVG({ c, p }) {
  const [hi, setHi] = useState(0);
  const elements = ['HEADER', 'BODY', 'FIGURE', 'FOOTER'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setHi(h => (h + 1) % elements.length), 1200);
    return () => clearInterval(id);
  }, [p]);
  const docs = [
    { x: 10, y: 15 }, { x: 67, y: 15 }, { x: 124, y: 15 }, { x: 181, y: 15 },
  ];
  const elY = [28, 46, 64, 80];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="10" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>COMMON TEMPLATE PATTERNS</text>
      {docs.map((d, di) => (
        <g key={di}>
          <rect x={d.x} y={d.y} width="48" height="80" rx="3" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
          <text x={d.x + 24} y={d.y + 8} textAnchor="middle" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Doc {di + 1}</text>
          {elements.map((el, ei) => {
            const active = ei === hi;
            return (
              <motion.rect key={ei} x={d.x + 4} y={elY[ei]} width="40" height="10" rx="2"
                fill={active ? c : c} fillOpacity={active ? 0.2 : 0.04}
                stroke={active ? c : 'none'} strokeWidth={active ? 1 : 0} strokeOpacity={active ? 0.5 : 0}
                animate={active ? { fillOpacity: [0.1, 0.25, 0.1] } : {}}
                transition={{ duration: 0.8, repeat: Infinity }} />
            );
          })}
        </g>
      ))}
      {/* Label for highlighted element */}
      <motion.text x="120" y="105" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace"
        animate={p ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }} transition={{ duration: 1.2, repeat: Infinity }}>
        Common: {elements[hi]}
      </motion.text>
    </svg>
  );
}


/* ── CL-019  Mini Report Builder ───── */
function MiniReportSVG({ c, p }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % 7), 700);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Document frame */}
      <rect x="55" y="5" width="130" height="100" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      {/* Title bar */}
      {step >= 1 && (
        <motion.g initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
          <rect x="65" y="10" width="110" height="10" rx="2" fill={c} fillOpacity={0.15} />
          <text x="120" y="18" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace">REPORT TITLE</text>
        </motion.g>
      )}
      {/* Body lines */}
      {step >= 2 && [28, 34, 40, 46].map((y, i) => (
        <motion.rect key={y} x="65" y={y} width={90 - i * 10} height="3" rx="1" fill={c} fillOpacity={0.08}
          initial={{ width: 0 }} animate={{ width: 90 - i * 10 }} transition={{ delay: i * 0.1 }} />
      ))}
      {/* Chart placeholder */}
      {step >= 3 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <rect x="65" y="54" width="50" height="25" rx="3" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.1} />
          {[0, 1, 2, 3, 4].map(i => (
            <motion.rect key={i} x={70 + i * 9} y={74 - (10 + i * 3)} width="5" height={10 + i * 3} rx="1" fill={c} fillOpacity={0.2}
              initial={{ height: 0, y: 74 }} animate={{ height: 10 + i * 3, y: 74 - (10 + i * 3) }} transition={{ delay: i * 0.08 }} />
          ))}
          <text x="90" y="83" textAnchor="middle" fill="var(--theme-muted)" fontSize="4" fontFamily="monospace">Fig. 1</text>
        </motion.g>
      )}
      {/* Table */}
      {step >= 4 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <rect x="120" y="54" width="50" height="25" rx="3" fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.1} />
          {[0, 1, 2].map(r => [0, 1].map(col => (
            <rect key={`${r}-${col}`} x={124 + col * 23} y={58 + r * 7} width="20" height="5" rx="1" fill={c} fillOpacity={r === 0 ? 0.12 : 0.05} />
          )))}
        </motion.g>
      )}
      {/* References */}
      {step >= 5 && (
        <motion.g initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
          <line x1="65" y1="88" x2="175" y2="88" stroke={c} strokeOpacity={0.1} />
          <text x="65" y="94" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">References</text>
          <rect x="65" y="96" width="80" height="2.5" rx="1" fill={c} fillOpacity={0.06} />
          <rect x="65" y="100" width="65" height="2.5" rx="1" fill={c} fillOpacity={0.06} />
        </motion.g>
      )}
      {/* Progress */}
      <text x="20" y="55" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace" style={{ writingMode: 'tb' }}>
        {Math.min(step, 5)}/5
      </text>
    </svg>
  );
}


/* ── CL-020  Plagiarism Detection ──── */
function PlagiarismDetSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const matches = [
    { ly: 30, ry: 25, bad: true, label: 'Copy-paste' },
    { ly: 48, ry: 50, bad: false, label: 'Cited' },
    { ly: 66, ry: 70, bad: true, label: 'Paraphrase' },
    { ly: 84, ry: 88, bad: false, label: 'Original' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (matches.length + 2)), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Left text block */}
      <rect x="10" y="10" width="85" height="95" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="52" y="22" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>SOURCE</text>
      {matches.map((m, i) => (
        <rect key={`l-${i}`} x="18" y={m.ly} width="68" height="8" rx="2"
          fill={i < step ? (m.bad ? '#f85149' : '#3fb950') : c} fillOpacity={i < step ? 0.12 : 0.05} />
      ))}
      {/* Right text block */}
      <rect x="145" y="10" width="85" height="95" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      <text x="187" y="22" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.5}>STUDENT</text>
      {matches.map((m, i) => (
        <rect key={`r-${i}`} x="153" y={m.ry} width="68" height="8" rx="2"
          fill={i < step ? (m.bad ? '#f85149' : '#3fb950') : c} fillOpacity={i < step ? 0.12 : 0.05} />
      ))}
      {/* Connecting lines */}
      {matches.map((m, i) => {
        if (i >= step) return null;
        return (
          <motion.line key={`c-${i}`} x1="95" y1={m.ly + 4} x2="145" y2={m.ry + 4}
            stroke={m.bad ? '#f85149' : '#3fb950'} strokeWidth="1.2" strokeOpacity={0.5}
            strokeDasharray={m.bad ? '4,2' : 'none'}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
        );
      })}
      {/* Labels in middle */}
      {matches.map((m, i) => {
        if (i >= step) return null;
        return (
          <motion.text key={`t-${i}`} x="120" y={(m.ly + m.ry) / 2 + 4} textAnchor="middle"
            fill={m.bad ? '#f85149' : '#3fb950'} fontSize="4.5" fontWeight="bold" fontFamily="monospace"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {m.label}
          </motion.text>
        );
      })}
    </svg>
  );
}


/* ── CL-021  Citation Hunt ─────────── */
function CitationHuntSVG({ c, p }) {
  const [cursor, setCursor] = useState(-1);
  const refs = [
    { label: 'Smith (2024)', ok: true },
    { label: 'et al. [??]', ok: false },
    { label: 'Jones, p.12', ok: true },
    { label: '(no date)', ok: false },
    { label: 'Lee (2023)', ok: true },
    { label: 'URL broken', ok: false },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setCursor(s => (s + 1) % (refs.length + 2)), 700);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="7" fontWeight="bold" fontFamily="monospace" opacity={0.5}>CITATION CHECKER</text>
      {/* Reference list */}
      <rect x="25" y="18" width="140" height="88" rx="5" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      {refs.map((r, i) => {
        const scanned = i <= cursor;
        const fixed = scanned && !r.ok;
        const col = !scanned ? 'var(--theme-muted)' : r.ok ? '#3fb950' : (fixed ? '#3fb950' : '#f85149');
        return (
          <g key={i}>
            <rect x="32" y={24 + i * 13} width="125" height="10" rx="2"
              fill={scanned && !r.ok ? '#f85149' : c} fillOpacity={scanned ? 0.08 : 0.03} />
            <text x="38" y={31 + i * 13} fill={col} fontSize="5.5" fontFamily="monospace">
              [{i + 1}] {r.label}
            </text>
            {scanned && (
              <motion.text x="150" y={31 + i * 13} fill={r.ok ? '#3fb950' : '#f85149'} fontSize="7" fontWeight="bold"
                initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {r.ok ? '✓' : '✗'}
              </motion.text>
            )}
          </g>
        );
      })}
      {/* Scan cursor */}
      {cursor >= 0 && cursor < refs.length && (
        <motion.line x1="28" y1={24 + cursor * 13} x2="28" y2={34 + cursor * 13}
          stroke={c} strokeWidth="2" strokeOpacity={0.5}
          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.4, repeat: Infinity }} />
      )}
      {/* Summary */}
      <rect x="180" y="20" width="52" height="82" rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="206" y="32" textAnchor="middle" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>SUMMARY</text>
      <text x="186" y="48" fill="#3fb950" fontSize="5" fontFamily="monospace">✓ Valid: {refs.filter((r, i) => i <= cursor && r.ok).length}</text>
      <text x="186" y="60" fill="#f85149" fontSize="5" fontFamily="monospace">✗ Error: {refs.filter((r, i) => i <= cursor && !r.ok).length}</text>
      <text x="186" y="75" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Total: {refs.length}</text>
      <rect x="186" y="82" width="40" height="6" rx="2" fill={c} fillOpacity={0.04} />
      <motion.rect x="186" y="82" width={40 * Math.min(cursor + 1, refs.length) / refs.length} height="6" rx="2" fill={c} fillOpacity={0.2}
        animate={{ width: 40 * Math.min(Math.max(cursor + 1, 0), refs.length) / refs.length }} />
      <text x="206" y="97" textAnchor="middle" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">
        {Math.min(Math.max(cursor + 1, 0), refs.length)}/{refs.length} checked
      </text>
    </svg>
  );
}


/* ── CL-022  Human Spreadsheet ─────── */
function HumanSpreadsheetSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const cells = [
    { x: 60, y: 30, val: 5 }, { x: 100, y: 30, val: 3 }, { x: 140, y: 30, val: '=A+B' },
    { x: 60, y: 55, val: 8 }, { x: 100, y: 55, val: 2 }, { x: 140, y: 55, val: '=A+B' },
    { x: 60, y: 80, val: '=SUM' }, { x: 100, y: 80, val: '=SUM' }, { x: 140, y: 80, val: '?' },
  ];
  const results = [8, 10, 13, 5, 18, '?'];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % 6), 900);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>HUMAN SPREADSHEET</text>
      {/* Column headers */}
      {['A', 'B', 'C'].map((h, i) => (
        <text key={h} x={73 + i * 40} y="24" textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.4}>{h}</text>
      ))}
      {/* Row headers */}
      {['1', '2', '3'].map((h, i) => (
        <text key={h} x="48" y={38 + i * 25} textAnchor="middle" fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace" opacity={0.4}>{h}</text>
      ))}
      {/* Grid */}
      {cells.map((cell, i) => {
        const active = i === step;
        return (
          <g key={i}>
            <rect x={cell.x - 13} y={cell.y - 5} width="33" height="18" rx="2"
              fill={active ? c : c} fillOpacity={active ? 0.12 : 0.03}
              stroke={active ? c : c} strokeOpacity={active ? 0.4 : 0.08} strokeWidth={active ? 1.2 : 0.5} />
            <text x={cell.x + 3} y={cell.y + 8} textAnchor="middle" fill={active ? c : 'var(--theme-muted)'}
              fontSize="6" fontFamily="monospace" fontWeight={active ? 'bold' : 'normal'}>{cell.val}</text>
          </g>
        );
      })}
      {/* People passing values */}
      {step > 0 && step < 5 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <text x="25" y={35 + Math.floor(step / 3) * 25} fontSize="10">👤</text>
          <motion.line x1="38" y1={35 + Math.floor(step / 3) * 25 - 3}
            x2={cells[step].x - 13} y2={cells[step].y + 4}
            stroke={c} strokeWidth="1" strokeOpacity={0.3} strokeDasharray="3,2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
        </motion.g>
      )}
      {/* Result sidebar */}
      <rect x="185" y="22" width="45" height="78" rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      <text x="207" y="32" textAnchor="middle" fill={c} fontSize="5" fontWeight="bold" fontFamily="monospace" opacity={0.4}>RESULTS</text>
      {cells.filter((_, i) => i < step && i % 3 === 2).map((cell, i) => (
        <text key={i} x="207" y={44 + i * 14} textAnchor="middle" fill="#3fb950" fontSize="6" fontFamily="monospace" fontWeight="bold">
          Row {i + 1}: {results[i]}
        </text>
      ))}
    </svg>
  );
}


/* ── CL-023  Formula Detective ─────── */
function FormulaDetSVG({ c, p }) {
  const [reveal, setReveal] = useState(-1);
  const cells = [
    { x: 40, y: 30, val: '10', formula: null },
    { x: 80, y: 30, val: '20', formula: null },
    { x: 120, y: 30, val: '30', formula: '=A1+B1' },
    { x: 40, y: 55, val: '5', formula: null },
    { x: 80, y: 55, val: '15', formula: null },
    { x: 120, y: 55, val: '20', formula: '=A2+B2' },
    { x: 160, y: 30, val: '60', formula: '=SUM(C)' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setReveal(s => (s + 1) % (cells.length + 2)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>FORMULA DETECTIVE</text>
      {/* Column headers */}
      {['A', 'B', 'C', 'D'].map((h, i) => (
        <text key={h} x={53 + i * 40} y="24" textAnchor="middle" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace" opacity={0.4}>{h}</text>
      ))}
      {/* Cells */}
      {cells.map((cell, i) => {
        const isRevealed = i === reveal && cell.formula;
        return (
          <g key={i}>
            <rect x={cell.x - 15} y={cell.y - 6} width="35" height="18" rx="2"
              fill={isRevealed ? c : c} fillOpacity={isRevealed ? 0.15 : 0.03}
              stroke={isRevealed ? '#3fb950' : c} strokeOpacity={isRevealed ? 0.6 : 0.08} strokeWidth={isRevealed ? 1.2 : 0.5} />
            <text x={cell.x + 2} y={cell.y + 7} textAnchor="middle"
              fill={isRevealed ? '#3fb950' : 'var(--theme-muted)'} fontSize="6" fontFamily="monospace" fontWeight={isRevealed ? 'bold' : 'normal'}>
              {isRevealed ? cell.formula : cell.val}
            </text>
            {/* Magnifying glass on active */}
            {i === reveal && cell.formula && (
              <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <circle cx={cell.x + 20} cy={cell.y - 4} r="6" fill="none" stroke={c} strokeWidth="1" strokeOpacity={0.3} />
                <text x={cell.x + 20} y={cell.y - 1} textAnchor="middle" fontSize="5" fill={c} opacity={0.5}>?</text>
              </motion.g>
            )}
          </g>
        );
      })}
      {/* Formula bar */}
      <rect x="20" y="80" width="200" height="22" rx="4" fill={c} fillOpacity={0.03} stroke={c} strokeOpacity={0.1} />
      <text x="25" y="89" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">fx</text>
      <line x1="37" y1="82" x2="37" y2="100" stroke={c} strokeOpacity={0.1} />
      {reveal >= 0 && reveal < cells.length && cells[reveal].formula && (
        <motion.text x="45" y="93" fill="#3fb950" fontSize="6.5" fontWeight="bold" fontFamily="monospace"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {cells[reveal].formula} → {cells[reveal].val}
        </motion.text>
      )}
      {reveal >= 0 && reveal < cells.length && !cells[reveal].formula && (
        <text x="45" y="93" fill="var(--theme-muted)" fontSize="6" fontFamily="monospace">
          Raw value: {cells[reveal].val}
        </text>
      )}
    </svg>
  );
}


/* ── CL-024  Class Dataset Builder ─── */
function ClassDatasetSVG({ c, p }) {
  const [added, setAdded] = useState(0);
  const people = [
    { name: 'Ali', age: 20, fav: 'Blue' },
    { name: 'Sam', age: 19, fav: 'Red' },
    { name: 'Jo', age: 21, fav: 'Green' },
    { name: 'Lee', age: 20, fav: 'Blue' },
    { name: 'Mia', age: 22, fav: 'Red' },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setAdded(s => (s + 1) % (people.length + 2)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>CLASS DATASET BUILDER</text>
      {/* People icons on left */}
      {people.map((pr, i) => (
        <g key={i}>
          <text x="22" y={30 + i * 16} fontSize="10" opacity={i < added ? 0.3 : 0.7}>👤</text>
          <text x="36" y={30 + i * 16} fill={i < added ? 'var(--theme-muted)' : c} fontSize="5" fontFamily="monospace">{pr.name}</text>
          {/* Arrow to table */}
          {i < added && (
            <motion.line x1="52" y1={28 + i * 16} x2="80" y2={38 + i * 12}
              stroke={c} strokeWidth="0.8" strokeOpacity={0.2} strokeDasharray="2,2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
          )}
        </g>
      ))}
      {/* Table */}
      <rect x="80" y="18" width="150" height={14 + Math.min(added, people.length) * 12} rx="4" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.1} />
      {/* Header */}
      <rect x="80" y="18" width="150" height="12" rx="4" fill={c} fillOpacity={0.08} />
      {['Name', 'Age', 'Fav Colour'].map((h, i) => (
        <text key={h} x={95 + i * 50} y="27" textAnchor="middle" fill={c} fontSize="5.5" fontWeight="bold" fontFamily="monospace">{h}</text>
      ))}
      {/* Data rows */}
      {people.slice(0, Math.min(added, people.length)).map((pr, i) => (
        <motion.g key={`row-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <text x="95" y={40 + i * 12} textAnchor="middle" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">{pr.name}</text>
          <text x="145" y={40 + i * 12} textAnchor="middle" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">{pr.age}</text>
          <text x="195" y={40 + i * 12} textAnchor="middle" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">{pr.fav}</text>
        </motion.g>
      ))}
      {/* Counter */}
      <text x="120" y="102" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace" opacity={0.5}>
        Rows: {Math.min(added, people.length)} / {people.length}
      </text>
    </svg>
  );
}


/* ── CL-025  Validation Rules ──────── */
function ValidationRulesSVG({ c, p }) {
  const [step, setStep] = useState(0);
  const entries = [
    { val: 'john@mail.com', rule: 'Email format', ok: true },
    { val: '2025-13-45', rule: 'Date format', ok: false },
    { val: '27', rule: 'Age range 0-120', ok: true },
    { val: '-5', rule: 'Positive number', ok: false },
    { val: 'AB12 3CD', rule: 'Postcode format', ok: true },
  ];
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(s => (s + 1) % (entries.length + 2)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>DATA VALIDATION</text>
      {/* Entries */}
      {entries.map((e, i) => {
        const checked = i < step;
        return (
          <g key={i}>
            {/* Value */}
            <rect x="15" y={20 + i * 17} width="90" height="13" rx="3"
              fill={checked ? (e.ok ? '#3fb950' : '#f85149') : c} fillOpacity={checked ? 0.08 : 0.03}
              stroke={checked ? (e.ok ? '#3fb950' : '#f85149') : c} strokeOpacity={checked ? 0.3 : 0.06} strokeWidth="0.7" />
            <text x="20" y={29 + i * 17} fill={checked ? (e.ok ? '#3fb950' : '#f85149') : 'var(--theme-body)'} fontSize="5" fontFamily="monospace">{e.val}</text>
            {/* Shield icon */}
            {checked && (
              <motion.text x="112" y={30 + i * 17} fill={e.ok ? '#3fb950' : '#f85149'} fontSize="8" fontWeight="bold"
                initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {e.ok ? '✓' : '✗'}
              </motion.text>
            )}
            {/* Rule label */}
            <rect x="125" y={20 + i * 17} width="100" height="13" rx="3" fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.05} />
            <text x="130" y={29 + i * 17} fill="var(--theme-body)" fontSize="5" fontFamily="monospace">🛡 {e.rule}</text>
          </g>
        );
      })}
    </svg>
  );
}


/* ── CL-026  Misleading Graphs ─────── */
function MisleadingGraphsSVG({ c, p }) {
  const [honest, setHonest] = useState(false);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setHonest(h => !h), 2200);
    return () => clearInterval(id);
  }, [p]);
  const data = [
    { label: 'A', val: 85 },
    { label: 'B', val: 90 },
    { label: 'C', val: 88 },
    { label: 'D', val: 92 },
  ];
  const minVal = honest ? 0 : 80;
  const maxVal = 100;
  const barW = 28, barGap = 12, ox = 50, oy = 90;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill={c} fontSize="6.5" fontWeight="bold" fontFamily="monospace" opacity={0.5}>
        {honest ? 'HONEST CHART ✓' : 'MISLEADING CHART ✗'}
      </text>
      {/* Y axis */}
      <line x1={ox} y1="20" x2={ox} y2={oy} stroke={c} strokeOpacity={0.15} />
      {/* Y labels */}
      {(honest ? [0, 25, 50, 75, 100] : [80, 85, 90, 95, 100]).map((tick, i) => {
        const y = oy - ((tick - minVal) / (maxVal - minVal)) * 65;
        return (
          <g key={tick}>
            <line x1={ox - 3} y1={y} x2={ox} y2={y} stroke={c} strokeOpacity={0.1} />
            <text x={ox - 6} y={y + 2} textAnchor="end" fill="var(--theme-body)" fontSize="4.5" fontFamily="monospace">{tick}</text>
            <line x1={ox} y1={y} x2={ox + 160} y2={y} stroke={c} strokeOpacity={0.03} strokeDasharray="2,3" />
          </g>
        );
      })}
      {/* X axis */}
      <line x1={ox} y1={oy} x2={ox + 160} y2={oy} stroke={c} strokeOpacity={0.15} />
      {/* Bars */}
      {data.map((d, i) => {
        const barH = ((d.val - minVal) / (maxVal - minVal)) * 65;
        const x = ox + 15 + i * (barW + barGap);
        return (
          <g key={i}>
            <motion.rect x={x} y={oy - barH} width={barW} height={barH} rx="2"
              fill={honest ? '#3fb950' : '#f85149'} fillOpacity={0.25}
              stroke={honest ? '#3fb950' : '#f85149'} strokeOpacity={0.4} strokeWidth="0.7"
              animate={{ height: barH, y: oy - barH }} transition={{ duration: 0.6 }} />
            <text x={x + barW / 2} y={oy + 8} textAnchor="middle" fill="var(--theme-body)" fontSize="5" fontFamily="monospace">{d.label}</text>
            <text x={x + barW / 2} y={oy - barH - 3} textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">{d.val}</text>
          </g>
        );
      })}
      {/* Warning/OK badge */}
      <rect x="175" y="22" width="55" height="22" rx="4"
        fill={honest ? '#3fb950' : '#f85149'} fillOpacity={0.1} stroke={honest ? '#3fb950' : '#f85149'} strokeOpacity={0.3} />
      <text x="202" y="36" textAnchor="middle" fill={honest ? '#3fb950' : '#f85149'} fontSize="5.5" fontWeight="bold" fontFamily="monospace">
        {honest ? 'Y: 0-100' : 'Y: 80-100'}
      </text>
      <text x="202" y="55" textAnchor="middle" fill="var(--theme-body)" fontSize="4.5" fontFamily="monospace">
        {honest ? 'True scale' : 'Truncated!'}
      </text>
    </svg>
  );
}


/* ── CL-030  Chart Types ─────── */
function ChartTypesSVG({ c, p }) {
  const [hi, setHi] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setHi(v => (v + 1) % 4), 1200);
    return () => clearInterval(id);
  }, [p]);
  const barH = [18, 28, 22, 32];
  const lineP = "M130,88 L145,72 L160,80 L175,65 L190,70 L205,60";
  const pieSlices = [
    { d: "M55,85 L55,65 A20,20 0 0,1 73,78 Z", o: 0.15 },
    { d: "M55,85 L73,78 A20,20 0 0,1 47,67 Z", o: 0.25 },
    { d: "M55,85 L47,67 A20,20 0 1,1 55,65 Z", o: 0.1 },
  ];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <line x1="120" y1="5" x2="120" y2="105" stroke={c} strokeOpacity={0.08} />
      <line x1="5" y1="55" x2="235" y2="55" stroke={c} strokeOpacity={0.08} />
      {/* Bar chart – top-left */}
      {barH.map((h, i) => (
        <motion.rect key={i} x={15 + i * 22} y={45 - h} width={14} height={h} rx={2}
          fill={c} fillOpacity={hi === 0 ? 0.25 : 0.08}
          animate={p && hi === 0 ? { fillOpacity: [0.08, 0.3, 0.08] } : {}}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} />
      ))}
      <text x="50" y="52" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Bar</text>
      {/* Line chart – top-right */}
      <motion.path d={lineP} fill="none" stroke={c} strokeWidth={1.5}
        strokeOpacity={hi === 1 ? 0.6 : 0.15}
        animate={p && hi === 1 ? { strokeOpacity: [0.15, 0.6, 0.15] } : {}}
        transition={{ duration: 1, repeat: Infinity }} />
      <text x="168" y="52" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Line</text>
      {/* Pie chart – bottom-left */}
      {pieSlices.map((s, i) => (
        <motion.path key={i} d={s.d} fill={c} fillOpacity={hi === 2 ? s.o + 0.15 : s.o}
          animate={p && hi === 2 ? { fillOpacity: [s.o, s.o + 0.2, s.o] } : {}}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      <text x="55" y="102" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Pie</text>
      {/* Scatter plot – bottom-right */}
      {[[135,68],[150,75],[160,62],[175,80],[185,70],[195,65]].map(([cx2, cy2], i) => (
        <motion.circle key={i} cx={cx2} cy={cy2} r={2.5} fill={c}
          fillOpacity={hi === 3 ? 0.35 : 0.1}
          animate={p && hi === 3 ? { fillOpacity: [0.1, 0.4, 0.1] } : {}}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} />
      ))}
      <text x="168" y="102" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Scatter</text>
    </svg>
  );
}


/* ── CL-031  Logic Gates ─────── */
function LogicGatesSVG({ c, p }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(v => (v + 1) % 3), 1400);
    return () => clearInterval(id);
  }, [p]);
  const gates = [
    { x: 30, label: 'AND', inA: true, inB: true, out: true },
    { x: 100, label: 'OR', inA: false, inB: true, out: true },
    { x: 170, label: 'NOT', inA: true, inB: null, out: false },
  ];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {gates.map((g, i) => (
        <motion.g key={i} animate={p && step === i ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.6 }}
          transition={{ duration: 1.2, repeat: Infinity }}>
          <rect x={g.x} y={30} width={40} height={30} rx={4} fill={c} fillOpacity={step === i ? 0.18 : 0.06} stroke={c} strokeOpacity={0.2} />
          <text x={g.x + 20} y={49} textAnchor="middle" fill={c} fontSize="6" fontFamily="monospace" fontWeight="bold">{g.label}</text>
          {/* Inputs */}
          <motion.rect x={g.x + 5} y={18} width={12} height={10} rx={2} fill={g.inA ? '#22c55e' : '#ef4444'} fillOpacity={0.5}
            animate={p && step === i ? { y: [14, 20, 14] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
          <text x={g.x + 11} y={26} textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace">{g.inA ? 'T' : 'F'}</text>
          {g.inB !== null && <>
            <motion.rect x={g.x + 23} y={18} width={12} height={10} rx={2} fill={g.inB ? '#22c55e' : '#ef4444'} fillOpacity={0.5}
              animate={p && step === i ? { y: [14, 20, 14] } : {}} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
            <text x={g.x + 29} y={26} textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace">{g.inB ? 'T' : 'F'}</text>
          </>}
          {/* Output */}
          <motion.rect x={g.x + 14} y={66} width={12} height={10} rx={2} fill={g.out ? '#22c55e' : '#ef4444'} fillOpacity={step === i ? 0.7 : 0.2}
            animate={p && step === i ? { scale: [1, 1.15, 1] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
          <text x={g.x + 20} y={74} textAnchor="middle" fill="white" fontSize="4" fontFamily="monospace">{g.out ? 'T' : 'F'}</text>
          <line x1={g.x + 20} y1={60} x2={g.x + 20} y2={66} stroke={c} strokeOpacity={0.2} />
        </motion.g>
      ))}
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Logic Gates</text>
    </svg>
  );
}


/* ── CL-032  Decision Tree ─────── */
function DecisionTreeSVG({ c, p }) {
  const [path, setPath] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPath(v => (v + 1) % 4), 1500);
    return () => clearInterval(id);
  }, [p]);
  const paths = [
    [0, 0], [0, 1], [1, 0], [1, 1],
  ];
  const cur = paths[path];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Root diamond */}
      <motion.g animate={p ? { scale: [1, 1.04, 1] } : {}} transition={{ duration: 2, repeat: Infinity }}>
        <polygon points="120,8 140,22 120,36 100,22" fill={c} fillOpacity={0.15} stroke={c} strokeOpacity={0.3} />
        <text x="120" y="25" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">Q1?</text>
      </motion.g>
      {/* Level 1 branches */}
      <line x1="108" y1="36" x2="70" y2="50" stroke={c} strokeOpacity={cur[0] === 0 ? 0.5 : 0.1} strokeWidth={cur[0] === 0 ? 1.5 : 0.8} />
      <line x1="132" y1="36" x2="170" y2="50" stroke={c} strokeOpacity={cur[0] === 1 ? 0.5 : 0.1} strokeWidth={cur[0] === 1 ? 1.5 : 0.8} />
      {/* L1 diamonds */}
      <polygon points="70,50 85,60 70,70 55,60" fill={c} fillOpacity={cur[0] === 0 ? 0.18 : 0.05} stroke={c} strokeOpacity={0.2} />
      <text x="70" y="63" textAnchor="middle" fill={c} fontSize="4.5" fontFamily="monospace">Q2?</text>
      <polygon points="170,50 185,60 170,70 155,60" fill={c} fillOpacity={cur[0] === 1 ? 0.18 : 0.05} stroke={c} strokeOpacity={0.2} />
      <text x="170" y="63" textAnchor="middle" fill={c} fontSize="4.5" fontFamily="monospace">Q3?</text>
      {/* Level 2 branches & leaves */}
      {[[40,85,'A',0,0],[90,85,'B',0,1],[150,85,'C',1,0],[200,85,'D',1,1]].map(([lx,ly,lbl,p0,p1], i) => (
        <g key={i}>
          <line x1={p0 === 0 ? 70 : 170} y1={70} x2={lx} y2={ly - 8} stroke={c}
            strokeOpacity={cur[0] === p0 && cur[1] === p1 ? 0.5 : 0.08} strokeWidth={cur[0] === p0 && cur[1] === p1 ? 1.5 : 0.8} />
          <motion.rect x={lx - 12} y={ly - 8} width={24} height={14} rx={3}
            fill={c} fillOpacity={cur[0] === p0 && cur[1] === p1 ? 0.25 : 0.05} stroke={c} strokeOpacity={0.15}
            animate={p && cur[0] === p0 && cur[1] === p1 ? { fillOpacity: [0.1, 0.3, 0.1] } : {}}
            transition={{ duration: 1, repeat: Infinity }} />
          <text x={lx} y={ly + 1} textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">{lbl}</text>
        </g>
      ))}
      <text x="120" y="106" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Decision Tree</text>
    </svg>
  );
}


/* ── CL-033  Grading Logic ─────── */
function GradingLogicSVG({ c, p }) {
  const [score, setScore] = useState(85);
  useEffect(() => {
    if (!p) return;
    const scores = [92, 78, 65, 45, 85, 55, 72, 38];
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % scores.length; setScore(scores[i]); }, 1300);
    return () => clearInterval(id);
  }, [p]);
  const grade = score >= 75 ? 'A' : score >= 60 ? 'B' : score >= 50 ? 'C' : 'F';
  const gColor = grade === 'A' ? '#22c55e' : grade === 'B' ? '#3b82f6' : grade === 'C' ? '#f59e0b' : '#ef4444';
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Score input */}
      <motion.rect x={95} y={5} width={50} height={16} rx={4} fill={c} fillOpacity={0.12} stroke={c} strokeOpacity={0.25}
        animate={p ? { strokeOpacity: [0.15, 0.4, 0.15] } : {}} transition={{ duration: 1.2, repeat: Infinity }} />
      <text x="120" y="16" textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold">{score}%</text>
      <line x1="120" y1="21" x2="120" y2="30" stroke={c} strokeOpacity={0.2} />
      {/* IF >=75 */}
      <rect x={80} y={30} width={80} height={14} rx={3} fill={c} fillOpacity={score >= 75 ? 0.15 : 0.04} stroke={c} strokeOpacity={0.15} />
      <text x="120" y="40" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">score ≥ 75?</text>
      <line x1="120" y1="44" x2="120" y2="50" stroke={c} strokeOpacity={0.2} />
      {/* IF >=60 */}
      <rect x={80} y={50} width={80} height={14} rx={3} fill={c} fillOpacity={score < 75 && score >= 60 ? 0.15 : 0.04} stroke={c} strokeOpacity={0.15} />
      <text x="120" y="60" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">score ≥ 60?</text>
      <line x1="120" y1="64" x2="120" y2="70" stroke={c} strokeOpacity={0.2} />
      {/* IF >=50 */}
      <rect x={80} y={70} width={80} height={14} rx={3} fill={c} fillOpacity={score < 60 && score >= 50 ? 0.15 : 0.04} stroke={c} strokeOpacity={0.15} />
      <text x="120" y="80" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">score ≥ 50?</text>
      <line x1="120" y1="84" x2="120" y2="90" stroke={c} strokeOpacity={0.2} />
      {/* Grade output */}
      <motion.rect x={105} y={90} width={30} height={16} rx={5} fill={gColor} fillOpacity={0.25} stroke={gColor} strokeOpacity={0.4}
        animate={p ? { scale: [1, 1.08, 1] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
      <text x="120" y="101" textAnchor="middle" fill={gColor} fontSize="8" fontFamily="monospace" fontWeight="bold">{grade}</text>
    </svg>
  );
}


/* ── CL-034  Data Story ─────── */
function DataStorySVG({ c, p }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStage(v => (v + 1) % 3), 1400);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Data table */}
      <motion.g animate={p && stage === 0 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <rect x={10} y={20} width={55} height={60} rx={3} fill={c} fillOpacity={0.06} stroke={c} strokeOpacity={0.15} />
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <line x1={14} y1={30 + i * 10} x2={61} y2={30 + i * 10} stroke={c} strokeOpacity={0.1} />
            <rect x={15} y={32 + i * 10} width={20} height={5} rx={1} fill={c} fillOpacity={0.1} />
            <rect x={38} y={32 + i * 10} width={20} height={5} rx={1} fill={c} fillOpacity={0.06} />
          </g>
        ))}
        <text x="37" y="16" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Data</text>
      </motion.g>
      {/* Arrow 1 */}
      <motion.path d="M70,50 L90,50" fill="none" stroke={c} strokeOpacity={stage >= 1 ? 0.4 : 0.1} strokeWidth={1.5}
        markerEnd="url(#arrowDS)" animate={p && stage === 1 ? { strokeOpacity: [0.1, 0.5, 0.1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }} />
      <defs><marker id="arrowDS" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill={c} fillOpacity={0.4} /></marker></defs>
      {/* Chart */}
      <motion.g animate={p && stage === 1 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <rect x={93} y={25} width={55} height={50} rx={3} fill={c} fillOpacity={0.06} stroke={c} strokeOpacity={0.15} />
        {[15, 30, 22, 38, 25].map((h, i) => (
          <rect key={i} x={100 + i * 9} y={65 - h} width={6} height={h} rx={1} fill={c} fillOpacity={0.2} />
        ))}
        <text x="120" y="20" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Chart</text>
      </motion.g>
      {/* Arrow 2 */}
      <motion.path d="M153,50 L173,50" fill="none" stroke={c} strokeOpacity={stage >= 2 ? 0.4 : 0.1} strokeWidth={1.5}
        markerEnd="url(#arrowDS)" animate={p && stage === 2 ? { strokeOpacity: [0.1, 0.5, 0.1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }} />
      {/* Story doc */}
      <motion.g animate={p && stage === 2 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <rect x={176} y={25} width={55} height={50} rx={3} fill={c} fillOpacity={0.06} stroke={c} strokeOpacity={0.15} />
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x={182} y={32 + i * 6} width={i % 2 === 0 ? 42 : 35} height={3} rx={1} fill={c} fillOpacity={0.12} />
        ))}
        <text x="203" y="20" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Story</text>
      </motion.g>
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Data → Chart → Story</text>
    </svg>
  );
}


/* ── CL-035  Quality Checklist ─────── */
function QualityChecklistSVG({ c, p }) {
  const [checked, setChecked] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setChecked(v => (v + 1) % 7), 800);
    return () => clearInterval(id);
  }, [p]);
  const items = [
    { label: 'Formatting', pass: true },
    { label: 'Spelling', pass: true },
    { label: 'Citations', pass: false },
    { label: 'Data range', pass: true },
    { label: 'Labels', pass: false },
    { label: 'Summary', pass: true },
  ];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Clipboard */}
      <rect x={65} y={5} width={110} height={95} rx={5} fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.15} />
      <rect x={95} y={2} width={50} height={8} rx={3} fill={c} fillOpacity={0.1} />
      <text x="120" y="8" textAnchor="middle" fill={c} fontSize="4" fontFamily="monospace">Checklist</text>
      {items.map((item, i) => {
        const visible = i < checked;
        const y = 20 + i * 13;
        return (
          <g key={i}>
            <rect x={75} y={y} width={10} height={10} rx={2} fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.15} />
            {visible && (
              <motion.text x={80} y={y + 8} textAnchor="middle" fontSize="8" fontFamily="monospace"
                fill={item.pass ? '#22c55e' : '#ef4444'}
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}>
                {item.pass ? '✓' : '✗'}
              </motion.text>
            )}
            <text x={92} y={y + 8} fill={c} fontSize="5" fontFamily="monospace" fillOpacity={visible ? 0.8 : 0.3}>{item.label}</text>
          </g>
        );
      })}
    </svg>
  );
}


/* ── CL-036  AI Content Detect ─────── */
function AIContentDetectSVG({ c, p }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPhase(v => (v + 1) % 4), 1200);
    return () => clearInterval(id);
  }, [p]);
  const conf = phase === 3 ? '87%' : '...';
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Human card */}
      <rect x={15} y={20} width={70} height={50} rx={4} fill={c} fillOpacity={0.06} stroke={c} strokeOpacity={0.15} />
      {[0,1,2,3].map(i => (
        <rect key={i} x={22} y={30 + i * 9} width={i % 2 === 0 ? 52 : 42} height={4} rx={1} fill={c} fillOpacity={0.1} />
      ))}
      <text x="50" y="78" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">Human ✓</text>
      {/* AI card */}
      <rect x={155} y={20} width={70} height={50} rx={4} fill={c} fillOpacity={0.06} stroke={c} strokeOpacity={0.15} />
      {[0,1,2,3].map(i => (
        <rect key={i} x={162} y={30 + i * 9} width={i % 2 === 0 ? 52 : 42} height={4} rx={1} fill={c} fillOpacity={0.1} />
      ))}
      <text x="190" y="78" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">AI?</text>
      {/* Scanner */}
      {phase >= 1 && phase <= 2 && (
        <motion.line x1={155} y1={25} x2={155} y2={65} stroke="#f59e0b" strokeWidth={1} strokeOpacity={0.5}
          animate={{ x1: [155, 225, 155], x2: [155, 225, 155] }}
          transition={{ duration: 1.5, repeat: Infinity }} />
      )}
      {/* Center result */}
      <motion.rect x={98} y={35} width={44} height={24} rx={6} fill={c} fillOpacity={phase === 3 ? 0.18 : 0.05} stroke={c} strokeOpacity={0.2}
        animate={p && phase === 3 ? { scale: [1, 1.06, 1] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
      <text x="120" y="44" textAnchor="middle" fill="var(--theme-muted)" fontSize="4" fontFamily="monospace">Confidence</text>
      <text x="120" y="54" textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold">{conf}</text>
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">AI Detection</text>
    </svg>
  );
}


/* ── CL-037  Misinfo Flowchart ─────── */
function MisinfoFlowchartSVG({ c, p }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(v => (v + 1) % 4), 1300);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Diamond: Source? */}
      <motion.g animate={p && step === 0 ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <polygon points="120,5 145,18 120,31 95,18" fill={c} fillOpacity={step >= 0 ? 0.15 : 0.05} stroke={c} strokeOpacity={0.25} />
        <text x="120" y="21" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">Source?</text>
      </motion.g>
      <line x1="120" y1="31" x2="120" y2="40" stroke={c} strokeOpacity={step >= 1 ? 0.4 : 0.1} />
      {/* Rect: Evaluate */}
      <motion.rect x={85} y={40} width={70} height={16} rx={3} fill={c} fillOpacity={step >= 1 ? 0.15 : 0.04} stroke={c} strokeOpacity={0.15}
        animate={p && step === 1 ? { fillOpacity: [0.05, 0.2, 0.05] } : {}} transition={{ duration: 1, repeat: Infinity }} />
      <text x="120" y="51" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">Evaluate claim</text>
      <line x1="120" y1="56" x2="120" y2="65" stroke={c} strokeOpacity={step >= 2 ? 0.4 : 0.1} />
      {/* Diamond: Cross-ref? */}
      <motion.g animate={p && step === 2 ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <polygon points="120,65 148,78 120,91 92,78" fill={c} fillOpacity={step >= 2 ? 0.15 : 0.05} stroke={c} strokeOpacity={0.25} />
        <text x="120" y="81" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">Cross-ref?</text>
      </motion.g>
      {/* Verdict branches */}
      <line x1="92" y1="78" x2="40" y2="100" stroke="#22c55e" strokeOpacity={step === 3 ? 0.5 : 0.1} />
      <line x1="148" y1="78" x2="200" y2="100" stroke="#ef4444" strokeOpacity={step === 3 ? 0.5 : 0.1} />
      <motion.text x="40" y="107" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace"
        animate={p && step === 3 ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
        transition={{ duration: 1, repeat: Infinity }}>Credible</motion.text>
      <motion.text x="200" y="107" textAnchor="middle" fill="#ef4444" fontSize="5" fontFamily="monospace"
        animate={p && step === 3 ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
        transition={{ duration: 1, repeat: Infinity }}>Suspect</motion.text>
    </svg>
  );
}


/* ── CL-038  Human Router ─────── */
function HumanRouterSVG({ c, p }) {
  const nodes = [[40,30],[100,15],[160,30],[200,60],[160,85],[100,95],[40,75],[70,55],[140,55]];
  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,7],[7,8],[8,2],[7,1],[8,4]];
  const route = [0, 7, 8, 2, 3, 4];
  const [hop, setHop] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setHop(v => (v + 1) % route.length), 700);
    return () => clearInterval(id);
  }, [p]);
  const active = route[hop];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={c} strokeOpacity={0.1} strokeWidth={0.8} />
      ))}
      {/* Highlighted path */}
      {route.slice(0, hop).map((_, i) => {
        if (i >= route.length - 1) return null;
        const a = route[i], b = route[i + 1];
        return <line key={`r${i}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={c} strokeOpacity={0.5} strokeWidth={1.8} />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={6} fill={c} fillOpacity={i === active ? 0.3 : 0.06} stroke={c} strokeOpacity={0.2} />
      ))}
      {/* Packet */}
      <motion.rect x={nodes[active][0] - 3} y={nodes[active][1] - 3} width={6} height={6} rx={1}
        fill={c} fillOpacity={0.7}
        animate={p ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.5, repeat: Infinity }} />
      <text x="120" y="108" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Packet Routing</text>
    </svg>
  );
}


/* ── CL-039  Algorithm Olympics ─────── */
function AlgorithmOlympicsSVG({ c, p }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setActive(v => (v + 1) % 6), 900);
    return () => clearInterval(id);
  }, [p]);
  const stations = [
    { x: 120, y: 15, label: '1' },
    { x: 170, y: 35, label: '2' },
    { x: 170, y: 70, label: '3' },
    { x: 120, y: 90, label: '4' },
    { x: 70, y: 70, label: '5' },
    { x: 70, y: 35, label: '6' },
  ];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Connecting lines */}
      {stations.map((s, i) => {
        const next = stations[(i + 1) % 6];
        return <line key={i} x1={s.x} y1={s.y} x2={next.x} y2={next.y} stroke={c} strokeOpacity={0.08} />;
      })}
      {/* Timer center */}
      <circle cx={120} cy={52} r={14} fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.15} />
      <motion.text x="120" y="56" textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold"
        animate={p ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity }}>⏱</motion.text>
      {/* Station badges */}
      {stations.map((s, i) => (
        <motion.g key={i} animate={p && active === i ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.6, repeat: Infinity }}>
          <circle cx={s.x} cy={s.y} r={10} fill={c} fillOpacity={active === i ? 0.25 : 0.06} stroke={c} strokeOpacity={active === i ? 0.4 : 0.12} />
          <text x={s.x} y={s.y + 3} textAnchor="middle" fill={c} fontSize="6" fontFamily="monospace" fontWeight="bold">{s.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}


/* ── CL-040  Practical Assess ─────── */
function PracticalAssessSVG({ c, p }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setProgress(v => (v + 1) % 5), 1100);
    return () => clearInterval(id);
  }, [p]);
  const sections = ['Word', 'Excel', 'Files', 'Dig.Lit'];
  const pct = Math.round((progress / 4) * 100);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Paper */}
      <rect x={50} y={8} width={140} height={80} rx={4} fill={c} fillOpacity={0.04} stroke={c} strokeOpacity={0.15} />
      <text x="120" y="20" textAnchor="middle" fill={c} fontSize="6" fontFamily="monospace" fontWeight="bold">Assessment</text>
      {/* Sections */}
      {sections.map((s, i) => (
        <motion.g key={i}>
          <rect x={60} y={28 + i * 14} width={120} height={11} rx={2}
            fill={c} fillOpacity={i < progress ? 0.15 : 0.03} stroke={c} strokeOpacity={0.1} />
          <text x={68} y={36 + i * 14} fill={c} fontSize="5" fontFamily="monospace" fillOpacity={i < progress ? 0.9 : 0.3}>{s}</text>
          {i < progress && (
            <motion.text x={170} y={36 + i * 14} textAnchor="end" fill="#22c55e" fontSize="5" fontFamily="monospace"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>Done</motion.text>
          )}
        </motion.g>
      ))}
      {/* Progress bar */}
      <rect x={60} y={90} width={120} height={6} rx={3} fill={c} fillOpacity={0.05} stroke={c} strokeOpacity={0.1} />
      <motion.rect x={60} y={90} width={progress * 30} height={6} rx={3} fill={c} fillOpacity={0.25}
        animate={p ? { fillOpacity: [0.15, 0.3, 0.15] } : {}} transition={{ duration: 1, repeat: Infinity }} />
      <text x="120" y="104" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">{pct}% complete</text>
    </svg>
  );
}


/* ── CL-041  Binary Necklace ─────── */
function BinaryNecklaceSVG({ c, p }) {
  const bits = [0, 1, 0, 0, 0, 0, 0, 1]; // 'A' = 65
  const [reveal, setReveal] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setReveal(v => (v + 1) % 10), 600);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="14" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Binary Necklace</text>
      {/* String / beads */}
      <line x1={30} y1={45} x2={210} y2={45} stroke={c} strokeOpacity={0.1} strokeWidth={1} />
      {bits.map((b, i) => {
        const cx2 = 42 + i * 22;
        return (
          <motion.g key={i}>
            <motion.circle cx={cx2} cy={45} r={8}
              fill={b === 1 ? c : 'transparent'} fillOpacity={b === 1 ? 0.3 : 0}
              stroke={c} strokeOpacity={0.25} strokeWidth={1.2}
              animate={p && reveal > i ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.08 }} />
            <text x={cx2} y={48} textAnchor="middle" fill={c} fontSize="6" fontFamily="monospace" fillOpacity={reveal > i ? 0.9 : 0.2}>{b}</text>
          </motion.g>
        );
      })}
      {/* Decode line */}
      <line x1={60} y1={65} x2={180} y2={65} stroke={c} strokeOpacity={0.06} />
      <text x="70" y="75" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">01000001 =</text>
      <motion.text x="150" y="75" fill={c} fontSize="10" fontFamily="monospace" fontWeight="bold"
        animate={p && reveal >= 9 ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.15 }}
        transition={{ duration: 1, repeat: Infinity }}>A</motion.text>
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">ASCII: 65</text>
    </svg>
  );
}


/* ── CL-042  Algorithmic Art ─────── */
function AlgorithmicArtSVG({ c, p }) {
  const [drawn, setDrawn] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setDrawn(v => (v + 1) % 7), 900);
    return () => clearInterval(id);
  }, [p]);
  const steps = [
    { el: <rect x={80} y={25} width={30} height={30} rx={0} fill="none" stroke={c} strokeOpacity={0.3} />, label: '1: Square' },
    { el: <rect x={90} y={35} width={30} height={30} rx={0} fill="none" stroke={c} strokeOpacity={0.25} />, label: '2: Offset' },
    { el: <rect x={100} y={45} width={30} height={30} rx={0} fill="none" stroke={c} strokeOpacity={0.2} />, label: '3: Offset' },
    { el: <circle cx={120} cy={50} r={20} fill="none" stroke={c} strokeOpacity={0.15} />, label: '4: Circle' },
    { el: <line x1={80} y1={25} x2={130} y2={75} stroke={c} strokeOpacity={0.2} />, label: '5: Diagonal' },
    { el: <line x1={130} y1={25} x2={80} y2={75} stroke={c} strokeOpacity={0.2} />, label: '6: Cross' },
  ];
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Algorithmic Art</text>
      {/* Canvas area */}
      <rect x={70} y={18} width={100} height={68} rx={3} fill={c} fillOpacity={0.02} stroke={c} strokeOpacity={0.08} />
      {steps.map((s, i) => i < drawn ? <g key={i}>{s.el}</g> : null)}
      {/* Instruction labels on right */}
      {steps.map((s, i) => (
        <motion.text key={i} x={185} y={24 + i * 10} fill={c} fontSize="4.5" fontFamily="monospace"
          fillOpacity={i < drawn ? 0.7 : 0.15}
          animate={p && i === drawn - 1 ? { fillOpacity: [0.3, 0.9, 0.3] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}>{s.label}</motion.text>
      ))}
      <text x="120" y="100" textAnchor="middle" fill="var(--theme-muted)" fontSize="4.5" fontFamily="monospace">Step-by-step pattern</text>
    </svg>
  );
}


/* ── CL-043  Compression ─────── */
function CompressionSVG({ c, p }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setPhase(v => (v + 1) % 3), 1400);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* Original block */}
      <motion.g animate={p && phase === 0 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.7 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <rect x={15} y={20} width={80} height={55} rx={3} fill={c} fillOpacity={0.08} stroke={c} strokeOpacity={0.15} />
        {[0,1,2,3,4,5,6].map(i => (
          <rect key={i} x={20} y={26 + i * 7} width={i % 2 === 0 ? 68 : 55} height={4} rx={1} fill={c} fillOpacity={0.12} />
        ))}
        <text x="55" y="84" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Original</text>
      </motion.g>
      {/* Arrow */}
      <motion.path d="M100,48 L140,48" fill="none" stroke={c} strokeWidth={2} strokeOpacity={phase >= 1 ? 0.4 : 0.1}
        markerEnd="url(#arrowCMP)"
        animate={p && phase === 1 ? { strokeOpacity: [0.1, 0.5, 0.1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }} />
      <defs><marker id="arrowCMP" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill={c} fillOpacity={0.4} /></marker></defs>
      <text x="120" y="43" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">compress</text>
      {/* Compressed block */}
      <motion.g animate={p && phase === 2 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.7 }}
        transition={{ duration: 1, repeat: Infinity }}>
        <rect x={150} y={30} width={50} height={35} rx={3} fill={c} fillOpacity={0.12} stroke={c} strokeOpacity={0.2} />
        {[0,1,2,3].map(i => (
          <rect key={i} x={155} y={36 + i * 7} width={i % 2 === 0 ? 38 : 30} height={4} rx={1} fill={c} fillOpacity={0.18} />
        ))}
        <text x="175" y="74" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Compressed</text>
      </motion.g>
      {/* Ratio */}
      <motion.text x="120" y="98" textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace" fontWeight="bold"
        animate={p && phase === 2 ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.4 }}
        transition={{ duration: 1, repeat: Infinity }}>3:1 ratio</motion.text>
    </svg>
  );
}


/* ── CL-044  Shortest Path ─────── */
function ShortestPathSVG({ c, p }) {
  const nodes = [[30,55],[75,20],[75,85],[130,55],[185,25],[185,80],[220,55]];
  const edges = [
    [0,1,4],[0,2,2],[1,3,5],[2,3,1],[1,4,6],[3,4,3],[3,5,4],[4,6,2],[5,6,3]
  ];
  const shortPath = [0, 2, 3, 4, 6]; // shortest
  const [seg, setSeg] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setSeg(v => (v + 1) % (shortPath.length + 1)), 800);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      {/* All edges with weights */}
      {edges.map(([a, b, w], i) => {
        const isOnPath = shortPath.includes(a) && shortPath.includes(b) &&
          Math.abs(shortPath.indexOf(a) - shortPath.indexOf(b)) === 1;
        const lit = isOnPath && seg > Math.min(shortPath.indexOf(a), shortPath.indexOf(b));
        return (
          <g key={i}>
            <line x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
              stroke={lit ? c : c} strokeOpacity={lit ? 0.55 : 0.1} strokeWidth={lit ? 2 : 0.8} />
            <text x={(nodes[a][0] + nodes[b][0]) / 2 + 3} y={(nodes[a][1] + nodes[b][1]) / 2 - 3}
              fill="var(--theme-body)" fontSize="5" fontFamily="monospace">{w}</text>
          </g>
        );
      })}
      {/* Nodes */}
      {nodes.map(([x, y], i) => {
        const onPath = shortPath.includes(i) && seg > shortPath.indexOf(i);
        return (
          <motion.circle key={i} cx={x} cy={y} r={7}
            fill={c} fillOpacity={onPath ? 0.3 : 0.06} stroke={c} strokeOpacity={onPath ? 0.5 : 0.15}
            animate={p && onPath ? { r: [7, 9, 7] } : {}} transition={{ duration: 1, repeat: Infinity }} />
        );
      })}
      <text x="30" y="66" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">S</text>
      <text x="220" y="66" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">E</text>
      <text x="120" y="106" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Shortest Path</text>
    </svg>
  );
}


/* ── CL-045  Searching Challenge ─────── */
function SearchingChallengeSVG({ c, p }) {
  const items = [3, 7, 12, 19, 24, 31, 38, 42, 55, 63];
  const target = 31;
  const searchSteps = [4, 7, 5]; // indices checked in binary search for 31
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!p) return;
    const id = setInterval(() => setStep(v => (v + 1) % 5), 1000);
    return () => clearInterval(id);
  }, [p]);
  const activeIdx = step < searchSteps.length ? searchSteps[step] : step === 3 ? 5 : -1;
  const found = step >= 3;
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="14" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Binary Search for {target}</text>
      {/* Number line */}
      <line x1={15} y1={50} x2={225} y2={50} stroke={c} strokeOpacity={0.1} />
      {items.map((v, i) => {
        const x = 24 + i * 20;
        const isActive = i === activeIdx;
        const isFound = found && v === target;
        return (
          <g key={i}>
            <motion.rect x={x - 8} y={35} width={16} height={16} rx={2}
              fill={c} fillOpacity={isFound ? 0.35 : isActive ? 0.2 : 0.05} stroke={c} strokeOpacity={isActive || isFound ? 0.4 : 0.1}
              animate={p && isActive ? { fillOpacity: [0.08, 0.25, 0.08] } : {}}
              transition={{ duration: 0.6, repeat: Infinity }} />
            <text x={x} y={46} textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">{v}</text>
          </g>
        );
      })}
      {/* Arrow pointer */}
      {activeIdx >= 0 && (
        <motion.g animate={p ? { y: [0, -3, 0] } : {}} transition={{ duration: 0.5, repeat: Infinity }}>
          <polygon points={`${24 + activeIdx * 20},58 ${24 + activeIdx * 20 - 4},66 ${24 + activeIdx * 20 + 4},66`}
            fill={c} fillOpacity={0.4} />
          <text x={24 + activeIdx * 20} y="75" textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">
            {found ? '✓' : 'check'}
          </text>
        </motion.g>
      )}
      {/* Status */}
      <motion.text x="120" y="95" textAnchor="middle" fill={found ? '#22c55e' : c} fontSize="6" fontFamily="monospace" fontWeight="bold"
        animate={p && found ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.5 }}
        transition={{ duration: 0.8, repeat: Infinity }}>
        {found ? 'Found!' : `Step ${Math.min(step + 1, 3)} of 3`}
      </motion.text>
    </svg>
  );
}


/* ── CL-046  Sorting Showdown ─────── */
function SortingShowdownSVG({ c, p }) {
  const initial = [35, 15, 40, 10, 25, 30, 20];
  const [bars, setBars] = useState(initial);
  const [swapIdx, setSwapIdx] = useState(0);
  const [comps, setComps] = useState(0);
  useEffect(() => {
    if (!p) return;
    let arr = [...initial];
    let idx = 0;
    let count = 0;
    const id = setInterval(() => {
      if (idx >= arr.length - 1) { idx = 0; arr = [...initial]; count = 0; }
      count++;
      if (arr[idx] > arr[idx + 1]) {
        const tmp = arr[idx]; arr[idx] = arr[idx + 1]; arr[idx + 1] = tmp;
      }
      setBars([...arr]);
      setSwapIdx(idx);
      setComps(count);
      idx++;
    }, 700);
    return () => clearInterval(id);
  }, [p]);
  return (
    <svg viewBox="0 0 240 110" className="w-full h-auto">
      <text x="120" y="12" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">Bubble Sort</text>
      {bars.map((h, i) => {
        const x = 40 + i * 25;
        const active = i === swapIdx || i === swapIdx + 1;
        return (
          <motion.g key={i}>
            <motion.rect x={x} y={85 - h} width={18} height={h} rx={2}
              fill={c} fillOpacity={active ? 0.35 : 0.12} stroke={c} strokeOpacity={active ? 0.4 : 0.1}
              animate={p && active ? { fillOpacity: [0.12, 0.4, 0.12] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }} />
            <text x={x + 9} y={92} textAnchor="middle" fill={c} fontSize="5" fontFamily="monospace">{h}</text>
          </motion.g>
        );
      })}
      {/* Comparison counter */}
      <text x="120" y="104" textAnchor="middle" fill="var(--theme-muted)" fontSize="5" fontFamily="monospace">
        Comparisons: {comps}
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

  const cx = 130, cy = 125, r = 70;
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
      <svg viewBox="0 0 260 255" className="w-full max-w-[260px] mx-auto">
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
          const lx = cx + (r + 22) * Math.cos(a);
          const ly = cy + (r + 22) * Math.sin(a);
          const label = s.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
          const cosA = Math.cos(a);
          const anchor = cosA < -0.1 ? 'end' : cosA > 0.1 ? 'start' : 'middle';
          return (
            <text key={i} x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle"
              fill="var(--theme-body)" fontSize="7" fontFamily="Inter, sans-serif">
              {label.length > 18 ? label.slice(0, 16) + '..' : label}
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
              style={{ width: `${pct}%`, backgroundColor: c, opacity: op, color: '#fff', minWidth: pct > 5 ? 0 : 14 }}>
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
              <span className="text-[10px] text-body">{s.title} ({s.duration}m)</span>
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
          <p className="text-[9px] text-body uppercase tracking-[0.04em]">{item.label}</p>
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
                  style={{ backgroundColor: c, color: '#fff', opacity: 0.8 }}>
                  {s.step}
                </div>
                <span className="text-[9px] text-body text-center leading-tight">{s.title}</span>
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
              <span className="flex-shrink-0 w-16 text-[10px] font-mono text-body text-right">{seg.time}</span>
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
          <span key={m} className="text-[9px] text-body font-mono">{m}m</span>
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
              <p className="text-[10px] text-body leading-snug">{desc}</p>
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
                    style={{ backgroundColor: c, color: '#fff', opacity: 0.15 + (prog / 100) * 0.7 }}>
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
              style={{ backgroundColor: c, color: '#fff', opacity: 0.7 }}>
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
              <text x={x} y={h - 1} textAnchor="middle" fill="var(--theme-body)" fontSize="6.5" fontFamily="Inter, sans-serif">S{i + 1}</text>
            </g>
          );
        })}
        <text x={px - 3} y={py + 3} textAnchor="end" fill="var(--theme-body)" fontSize="6">High</text>
        <text x={px - 3} y={py + ph} textAnchor="end" fill="var(--theme-body)" fontSize="6">Low</text>
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
              style={{ backgroundColor: c, color: '#fff', opacity: 0.7 }}>
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
      <div className="flex justify-between text-[9px] text-body">
        <span>Most common</span>
        <span>Less common</span>
      </div>
    </div>
  );
}
