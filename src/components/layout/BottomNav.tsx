import type { ReactNode } from 'react'

function GoldenNetIcon({ active }: { active: boolean }) {
  const gold = active ? 'rgba(232,201,107,1)' : 'rgba(201,168,76,0.4)'
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" stroke={gold} strokeWidth="1" fill="none"/>
      {/* Mid circle */}
      <circle cx="12" cy="12" r="6" stroke={gold} strokeWidth="0.8" fill="none" opacity="0.7"/>
      {/* Inner circle */}
      <circle cx="12" cy="12" r="2.5" stroke={gold} strokeWidth="0.8" fill="none" opacity="0.6"/>
      {/* Radial lines — 8 spokes */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x2 = 12 + Math.cos(rad) * 10
        const y2 = 12 + Math.sin(rad) * 10
        return <line key={i} x1="12" y1="12" x2={x2} y2={y2} stroke={gold} strokeWidth="0.8" opacity="0.7"/>
      })}
      {/* Center node glow */}
      <circle cx="12" cy="12" r="1.5" fill={gold}/>
    </svg>
  )
}

export type TabId = 'sanctuary' | 'table' | 'stations' | 'office' | 'christ' | 'rose'

function ChaliceIcon({ active }: { active: boolean }) {
  const gold = active ? 'rgba(232,201,107,1)' : 'rgba(201,168,76,0.4)'
  const wine = active ? 'rgba(180,30,30,0.9)' : 'rgba(127,0,0,0.35)'
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {/* Cup bowl */}
      <path d="M5 3h14l-2 8a6 6 0 0 1-10 0L5 3z" fill={wine} stroke={gold} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Stem */}
      <rect x="11" y="11" width="2" height="6" rx="1" fill={gold}/>
      {/* Base */}
      <rect x="7" y="17" width="10" height="2" rx="1" fill={gold}/>
      {/* Shine on cup */}
      <path d="M8 5.5 Q9 9 8.5 10.5" stroke="rgba(255,240,200,0.4)" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

interface Tab { id: TabId; icon: ReactNode; label: string }

const TABS: Tab[] = [
  { id: 'sanctuary', icon: '⛪',    label: 'Theosis'    },
  { id: 'table',     icon: null,    label: 'Eucharist'  },
  { id: 'stations',  icon: '✝️',   label: 'Stations'   },
  { id: 'office',    icon: '📖',   label: 'Teachings'  },
  { id: 'christ',    icon: '👑',   label: 'Christ'     },
  { id: 'rose',      icon: null,    label: 'Golden Net' },
]

interface Props {
  active: TabId
  onChange: (id: TabId) => void
}

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-40">
      <div className="relative flex items-stretch h-[68px]"
        style={{ background: 'linear-gradient(180deg,#0d0e1a 0%,#0a0b14 100%)', borderTop: '1px solid rgba(201,168,76,0.25)' }}>
        <div className="absolute top-[-1px] left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(201,168,76,0.15) 15%,rgba(201,168,76,0.5) 35%,rgba(201,168,76,0.7) 50%,rgba(201,168,76,0.5) 65%,rgba(201,168,76,0.15) 85%,transparent 100%)' }} />
        {TABS.map(tab => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-1 flex flex-col items-center justify-center gap-[3px] relative pt-2 pb-3 border-none bg-transparent cursor-pointer"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {isActive && (
                <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-9 h-[3px]"
                  style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />
              )}
              <span className="leading-none flex items-center justify-center"
                style={{
                  filter: isActive ? 'drop-shadow(0 0 8px rgba(201,168,76,0.7))' : undefined,
                  opacity: tab.id === 'table' ? 1 : (isActive ? 1 : 0.4),
                  transform: isActive ? 'translateY(-1px)' : undefined,
                  fontSize: tab.icon ? '1.25rem' : undefined,
                }}>
                {tab.id === 'table' ? <ChaliceIcon active={isActive} /> : tab.id === 'rose' ? <GoldenNetIcon active={isActive} /> : tab.icon}
              </span>
              <span className="font-heading uppercase"
                style={{
                  fontSize: '6.5px',
                  letterSpacing: '0.3em',
                  color: isActive ? '#c9a84c' : '#d4c5a0',
                  opacity: isActive ? 0.85 : 0.3,
                }}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
