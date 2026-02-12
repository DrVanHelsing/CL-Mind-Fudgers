import { useAnimations } from '../context/AnimationContext';

/* ── Inline science SVG icons (line-art, currentColor) ── */

const AtomIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <ellipse cx="24" cy="24" rx="20" ry="8" />
    <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
    <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
  </svg>
);

const DNAIcon = (props) => (
  <svg viewBox="0 0 32 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <path d="M6 4c8 8 12 12 20 0" />
    <path d="M6 16c8-8 12-12 20 0" />
    <path d="M6 28c8 8 12 12 20 0" />
    <path d="M6 40c8-8 12-12 20 0" />
    <path d="M6 52c8 8 12 12 20 0" />
    <path d="M6 64c8-8 12-12 20 0" />
    <line x1="10" y1="8" x2="22" y2="8" opacity="0.5" />
    <line x1="10" y1="20" x2="22" y2="20" opacity="0.5" />
    <line x1="10" y1="34" x2="22" y2="34" opacity="0.5" />
    <line x1="10" y1="46" x2="22" y2="46" opacity="0.5" />
  </svg>
);

const BeakerIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 4h12" />
    <path d="M20 4v14l-10 22a2 2 0 002 2h24a2 2 0 002-2L28 18V4" />
    <path d="M12 32h24" opacity="0.4" />
    <circle cx="22" cy="36" r="1.5" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="28" cy="34" r="1" fill="currentColor" stroke="none" opacity="0.5" />
  </svg>
);

const MoleculeIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <circle cx="24" cy="16" r="5" />
    <circle cx="12" cy="36" r="4" />
    <circle cx="36" cy="36" r="4" />
    <circle cx="40" cy="16" r="3" />
    <line x1="24" y1="21" x2="14" y2="33" />
    <line x1="24" y1="21" x2="34" y2="33" />
    <line x1="29" y1="16" x2="37" y2="16" />
  </svg>
);

const BinaryIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="currentColor" stroke="none" {...props}>
    <text x="2" y="14" fontSize="11" fontFamily="monospace" opacity="0.8">01</text>
    <text x="22" y="14" fontSize="11" fontFamily="monospace" opacity="0.6">10</text>
    <text x="8" y="28" fontSize="11" fontFamily="monospace" opacity="0.7">11</text>
    <text x="28" y="28" fontSize="11" fontFamily="monospace" opacity="0.5">00</text>
    <text x="4" y="42" fontSize="11" fontFamily="monospace" opacity="0.6">10</text>
    <text x="24" y="42" fontSize="11" fontFamily="monospace" opacity="0.8">01</text>
  </svg>
);

const FlaskIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 4h8" />
    <path d="M22 4v16L8 42a2 2 0 002 2h28a2 2 0 002-2L26 20V4" />
    <path d="M14 34c4-3 12-3 20 0" opacity="0.4" />
  </svg>
);

const MicroscopeIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 6l6 3-12 24-6-3z" />
    <circle cx="28" cy="32" r="8" />
    <path d="M10 44h28" />
    <path d="M24 40v4" />
    <path d="M20 30l-4 2" opacity="0.5" />
  </svg>
);

const GraphIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 42V6" />
    <path d="M6 42h36" />
    <path d="M10 34l8-10 6 6 8-14 8-4" />
    <circle cx="18" cy="24" r="2" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="24" cy="30" r="2" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="32" cy="16" r="2" fill="currentColor" stroke="none" opacity="0.5" />
  </svg>
);

const SigmaIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M36 8H14l14 16L14 40h22" />
  </svg>
);

const CircuitIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
    <path d="M4 24h10m20 0h10" />
    <path d="M24 4v10m0 20v10" />
    <rect x="14" y="14" width="20" height="20" rx="2" />
    <circle cx="24" cy="24" r="4" />
    <line x1="14" y1="20" x2="8" y2="20" opacity="0.5" />
    <line x1="14" y1="28" x2="8" y2="28" opacity="0.5" />
  </svg>
);

/* ── Floating icon definitions with position, size, animation class, delay ── */
const colorKeys = ['cl', 'al', 'ql', 'accent'];

const floatingItems = [
  { Icon: AtomIcon,      cls: 'sci-drift-a', top: '8%',   left: '5%',   size: 64, delay: '0s',    colorIdx: 0 },
  { Icon: DNAIcon,       cls: 'sci-drift-b', top: '15%',  left: '85%',  size: 56, delay: '-7s',   colorIdx: 1 },
  { Icon: BeakerIcon,    cls: 'sci-drift-c', top: '55%',  left: '10%',  size: 58, delay: '-14s',  colorIdx: 2 },
  { Icon: MoleculeIcon,  cls: 'sci-drift-a', top: '70%',  left: '78%',  size: 62, delay: '-21s',  colorIdx: 3 },
  { Icon: BinaryIcon,    cls: 'sci-drift-b', top: '35%',  left: '92%',  size: 56, delay: '-5s',   colorIdx: 0 },
  { Icon: FlaskIcon,     cls: 'sci-drift-c', top: '85%',  left: '30%',  size: 52, delay: '-18s',  colorIdx: 1 },
  { Icon: MicroscopeIcon,cls: 'sci-drift-a', top: '25%',  left: '45%',  size: 54, delay: '-10s',  colorIdx: 2 },
  { Icon: GraphIcon,     cls: 'sci-drift-b', top: '60%',  left: '55%',  size: 58, delay: '-25s',  colorIdx: 3 },
  { Icon: SigmaIcon,     cls: 'sci-drift-c', top: '5%',   left: '65%',  size: 48, delay: '-3s',   colorIdx: 0 },
  { Icon: CircuitIcon,   cls: 'sci-drift-a', top: '45%',  left: '25%',  size: 60, delay: '-15s',  colorIdx: 1 },
  { Icon: AtomIcon,      cls: 'sci-drift-b', top: '90%',  left: '70%',  size: 46, delay: '-30s',  colorIdx: 2 },
  { Icon: FlaskIcon,     cls: 'sci-drift-c', top: '75%',  left: '48%',  size: 50, delay: '-22s',  colorIdx: 3 },
];

function FloatingScience() {
  const { enabled: animEnabled } = useAnimations();

  return (
    <>
      {floatingItems.map((item, i) => {
        const { Icon, cls, top, left, size, delay, colorIdx } = item;
        const key = colorKeys[colorIdx];
        return (
          <div
            key={i}
            className={`sci-icon ${animEnabled ? cls : ''}`}
            style={{
              top,
              left,
              width: size,
              height: size,
              animationDelay: animEnabled ? delay : undefined,
              color: `var(--theme-sci-${key})`,
            }}
          >
            <Icon style={{ width: '100%', height: '100%' }} />
          </div>
        );
      })}
    </>
  );
}

export default FloatingScience;
