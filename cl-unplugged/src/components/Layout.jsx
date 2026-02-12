import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Home,
  Layers,
  GraduationCap,
  Users,
  Info,
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  Monitor,
  Play,
  Pause,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAnimations } from '../context/AnimationContext';
import FloatingScience from './FloatingScience';

const navItems = [
  { path: '/',               label: 'Home',            icon: Home },
  { path: '/activities',     label: 'Activities',      icon: Layers },
  { path: '/student-guides', label: 'Student Guides',  icon: GraduationCap },
  { path: '/lecturer-guides',label: 'Lecturer Guides', icon: Users },
  { path: '/about',          label: 'About',           icon: Info },
];

const themeIcons = { system: Monitor, light: Sun, dark: Moon };
const themeLabels = { system: 'System', light: 'Light', dark: 'Dark' };

function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, cycle } = useTheme();
  const { enabled: animEnabled, toggle: toggleAnim } = useAnimations();

  const ThemeIcon = themeIcons[mode] || Monitor;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-base relative">
      {/* ── Background orbs for glassmorphism ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="bg-orb w-[500px] h-[500px] -top-40 -right-20 opacity-[0.12]" style={{ background: 'var(--theme-cl)' }} />
        <div className="bg-orb w-[400px] h-[400px] top-[40%] -left-32 opacity-[0.09]" style={{ background: 'var(--theme-al)', animationDelay: '-8s' }} />
        <div className="bg-orb w-[350px] h-[350px] bottom-10 right-[20%] opacity-[0.09]" style={{ background: 'var(--theme-ql)', animationDelay: '-16s' }} />
        <div className="bg-orb w-[300px] h-[300px] top-[20%] left-[45%] opacity-[0.07]" style={{ background: 'var(--theme-accent)', animationDelay: '-12s' }} />
        <FloatingScience />
      </div>

      {/* ── Nav ──────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 glass-nav bg-panel border-b transition-all duration-300 ${
          scrolled ? 'border-divider shadow-[0_1px_3px_rgba(0,0,0,0.2)]' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-[10px] bg-accent-dim border border-accent-subtle flex items-center justify-center text-accent group-hover:bg-accent-subtle transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-[15px] text-heading hidden sm:block tracking-tight">
                CL Unplugged
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                      active
                        ? 'text-accent bg-accent-dim'
                        : 'text-body hover:text-heading hover:bg-surface-raised'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-1">
              {/* Animation toggle */}
              <button
                onClick={toggleAnim}
                className="w-8 h-8 rounded-lg glass-element flex items-center justify-center text-muted hover:text-heading"
                title={animEnabled ? 'Pause animations' : 'Play animations'}
              >
                {animEnabled ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Theme toggle */}
              <button
                onClick={cycle}
                className="w-8 h-8 rounded-lg glass-element flex items-center justify-center text-muted hover:text-heading"
                title={`Theme: ${themeLabels[mode]}`}
              >
                <ThemeIcon className="w-3.5 h-3.5" />
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-body hover:text-heading glass-element"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-divider overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1 bg-panel glass-card">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${
                        active
                          ? 'bg-accent-dim text-accent font-medium'
                          : 'text-body hover:text-heading hover:bg-surface'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Content ──────────────────────── */}
      <main className="flex-1 relative">{children}</main>

      {/* ── Footer ───────────────────────── */}
      <footer className="border-t border-divider mt-auto relative glass-panel rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-accent-dim flex items-center justify-center text-accent">
                <Sparkles className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold text-heading">CL Unplugged</span>
            </div>
            <p className="text-xs text-muted">
              First-Year Computer Literacy Activities
            </p>
            <div className="flex items-center gap-4 text-[11px] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cl" /> CL
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-al" /> AL
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ql" /> QL
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
