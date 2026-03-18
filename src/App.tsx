import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BottomNav from './components/layout/BottomNav'
import type { TabId } from './components/layout/BottomNav'
import HomeScreen from './screens/HomeScreen'
import FathersScreen from './screens/FathersScreen'
import ChristScreen from './screens/ChristScreen'
import GoldenNetScreen from './screens/GoldenNetScreen'
import ComingSoonScreen from './screens/ComingSoonScreen'

const EMPTY_KEYS: Record<TabId, number> = { sanctuary: 0, table: 0, stations: 0, office: 0, christ: 0, rose: 0 }

function renderScreen(tab: TabId) {
  switch (tab) {
    case 'sanctuary': return <HomeScreen />
    case 'table':     return <ComingSoonScreen icon="🍷" title="The Eucharist" description="Join thousands of brothers and sisters in simultaneous global communion — guided liturgy, live participant count, Orthodox track. Building now." />
    case 'stations':  return <ComingSoonScreen icon="✝️" title="Stations of Prayer" description="Seven immersive intercession stations — War, Trafficking, Widows, the Sick, the Lost, the Persecuted. Full-screen sacred art, ambient music, guided prayers." />
    case 'office':    return <FathersScreen />
    case 'christ':    return <ChristScreen />
    case 'rose':      return <GoldenNetScreen />
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('sanctuary')
  const [tabKeys, setTabKeys] = useState<Record<TabId, number>>(EMPTY_KEYS)

  function handleTabChange(id: TabId) {
    // Always increment key — resets screen to home if same tab tapped again
    setTabKeys(prev => ({ ...prev, [id]: prev[id] + 1 }))
    setActiveTab(id)
  }

  return (
    <div className="relative flex flex-col h-full max-w-[430px] mx-auto overflow-hidden"
      style={{ background: '#0d0e1a' }}>
      <div className="fixed inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse at 50% 50%,transparent 60%,rgba(0,0,0,0.35) 100%)' }} />
      <div className="flex-1 relative z-[2] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={`${activeTab}-${tabKeys[activeTab]}`} className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}>
            {renderScreen(activeTab)}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-[10]">
        <BottomNav active={activeTab} onChange={handleTabChange} />
      </div>
    </div>
  )
}
