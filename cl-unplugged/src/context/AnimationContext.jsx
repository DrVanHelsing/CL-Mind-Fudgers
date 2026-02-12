import { createContext, useContext, useState, useCallback } from 'react';

const AnimationContext = createContext();

const STORAGE_KEY = 'cl-unplugged-animations';

export function AnimationProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === null ? true : stored === 'true';
    } catch { return true; }
  });

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return (
    <AnimationContext.Provider value={{ enabled, toggle }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimations() {
  const ctx = useContext(AnimationContext);
  if (!ctx) throw new Error('useAnimations must be used inside AnimationProvider');
  return ctx;
}
