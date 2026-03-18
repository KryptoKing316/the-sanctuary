import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BottomNav, { TabId } from './components/layout/BottomNav'
import HomeScreen from './screens/HomeScreen'
import ComingSoonScreen from './screens/ComingSoonScreen'

const SCREENS: Record<TabId, React.ReactNode> = {
  sanctuary: <HomeScreen />,
  table: (
    <ComingSoonScreen
      icon="🕯️"
      title="The Table"
      description="Join thousands of brothers and sisters in simultaneous global communion — guided liturgy, live participant count, Orthodox and Catholic tracks. Building now."
    />
  ),
  stations: (
    <ComingSoonScreen
      icon="✝️"
      title="Stations of Prayer"
      description="Seven immersive intercession stations — War, Trafficking, Widows, the Sick, the Lost, the Persecuted. Full-screen sacred art, ambient music, guided prayers."
    />
  ),
  office: (
    <ComingSoonScreen
      icon="📖"
      title="Daily Office"
      description="Morning Lauds, Evening Vespers, Night Compline. Personal prayer streaks, journal, Scripture of the Day. Voice of the Fathers library — 300 sayings from the Patristic tradition."
      phase="In Development"
    />
  ),
  rose: (
    <ComingSoonScreen
      icon="🌹"
      title="The Rose Window"
      description="A living rose window that fills petal by petal as the global community prays. Your contribution made visible. A world map of intercession hotspots."
    />
  ),
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('sanctuary')

  return (
    <div className="relative flex flex-col h-full max-w-[430px] mx-auto overflow-hidden"
      style={{ background: '#0d0e1a' }}>
      <div className="fixed inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse at 50% 50%,transparent 60%,rgba(0,0,0,0.35) 100%)' }} />
      <div className="flex-1 relative z-[2] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}>
            {SCREENS[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-[10]">
        <BottomNav active={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  )
}
