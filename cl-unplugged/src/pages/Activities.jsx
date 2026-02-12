import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX, Layers } from 'lucide-react';
import { activities } from '../data/activities';
import FilterBar from '../components/FilterBar';
import ActivityCard from '../components/ActivityCard';
import ActivityPopup from '../components/ActivityPopup';

export default function Activities() {
  const [searchParams] = useSearchParams();
  const initialStream = searchParams.get('stream') || '';
  const initialMode   = searchParams.get('mode')   || '';

  const [search,          setSearch]          = useState('');
  const [activeStream,    setActiveStream]    = useState(initialStream);
  const [activeMode,      setActiveMode]      = useState(initialMode);
  const [activeDuration,  setActiveDuration]  = useState('');
  const [activeGroupSize, setActiveGroupSize] = useState('');
  const [activeWeek,        setActiveWeek]        = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filtered = useMemo(() => {
    let result = activities.filter((a) => {
      if (activeStream && a.stream !== activeStream) return false;
      if (activeMode   && a.mode   !== activeMode)   return false;
      if (activeDuration) {
        if (a.durationMin > parseInt(activeDuration, 10)) return false;
      }
      if (activeGroupSize) {
        if (a.groupSize.replace(/\s/g, '') !== activeGroupSize) return false;
      }
      if (activeWeek) {
        if (!a.week || a.week !== parseInt(activeWeek, 10)) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        const hay = [a.title, a.objective, ...a.skills, a.stream, a.mode].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    // Sort CL activities by week when CL filter is active
    if (activeStream === 'CL' || activeWeek) {
      result.sort((a, b) => (a.week || 99) - (b.week || 99));
    }
    return result;
  }, [search, activeStream, activeMode, activeDuration, activeGroupSize, activeWeek]);

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <div className="mb-5 glass-panel-soft p-4">
          <h1 className="text-xl font-bold text-heading flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-accent" /> Activity Library
          </h1>
          <p className="text-[13px] text-body">Browse, filter, and explore all unplugged activities.</p>
        </div>

        <FilterBar
          search={search}           setSearch={setSearch}
          activeStream={activeStream} setActiveStream={setActiveStream}
          activeMode={activeMode}     setActiveMode={setActiveMode}
          activeDuration={activeDuration} setActiveDuration={setActiveDuration}
          activeGroupSize={activeGroupSize} setActiveGroupSize={setActiveGroupSize}
          activeWeek={activeWeek} setActiveWeek={setActiveWeek}
          resultCount={filtered.length}
        />

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <AnimatePresence>
              {filtered.map((a, i) => (
                <ActivityCard key={a.id} activity={a} index={i} onClick={() => setSelectedActivity(a)} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-[14px] glass-element flex items-center justify-center mb-4">
              <SearchX className="w-7 h-7 text-muted" />
            </div>
            <h3 className="text-[15px] font-semibold text-heading mb-1">No activities found</h3>
            <p className="text-[12.5px] text-muted max-w-xs">Try adjusting your filters or search query.</p>
          </motion.div>
        )}
      </div>

      <ActivityPopup
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
}
