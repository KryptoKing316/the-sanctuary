import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  icon: string
  title: string
  description: string
  phase?: string
}

export default function ComingSoonScreen({ icon, title, description, phase = 'Phase 2' }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Rose window ornament */}
        <svg className="animate-rose-spin mx-auto mb-6" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
          <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8"/>
          <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
          <circle cx="50" cy="50" r="4"  fill="rgba(201,168,76,0.4)"/>
          <g stroke="rgba(201,168,76,0.15)" strokeWidth="0.7">
            <line x1="50" y1="2"  x2="50" y2="98"/>
            <line x1="2"  y1="50" x2="98" y2="50"/>
            <line x1="15" y1="15" x2="85" y2="85"/>
            <line x1="85" y1="15" x2="15" y2="85"/>
          </g>
        </svg>

        <span className="text-5xl block mb-4">{icon}</span>

        <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '7.5px', letterSpacing: '0.5em', opacity: 0.6 }}>{phase}</span>
        <h2 className="font-display text-gold-light mb-4" style={{ fontSize: '22px', textShadow: '0 0 20px rgba(201,168,76,0.4)' }}>{title}</h2>
        <p className="font-body italic text-parchment" style={{ fontSize: '14px', lineHeight: '1.65', opacity: 0.65 }}>{description}</p>

        <div className="flex items-center gap-3 mt-8 justify-center opacity-40">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
          <span className="text-gold text-xs">✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
        </div>
        <p className="font-body italic text-parchment mt-4" style={{ fontSize: '11px', opacity: 0.4 }}>"Unless the Lord builds the house, the builders labor in vain." — Ps. 127:1</p>
      </motion.div>
    </div>
  )
}
