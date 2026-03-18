
export type TabId = 'sanctuary' | 'table' | 'stations' | 'office' | 'rose'

interface Tab { id: TabId; icon: string; label: string }

const TABS: Tab[] = [
  { id: 'sanctuary', icon: '⛪', label: 'Sanctuary'  },
  { id: 'table',     icon: '🕯️', label: 'The Table'  },
  { id: 'stations',  icon: '✝️',  label: 'Stations'   },
  { id: 'office',    icon: '📖', label: 'Daily Office'},
  { id: 'rose',      icon: '🌹', label: 'Rose Window' },
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
        {/* Gold gradient top line */}
        <div className="absolute top-[-1px] left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(201,168,76,0.15) 15%,rgba(201,168,76,0.5) 35%,rgba(201,168,76,0.7) 50%,rgba(201,168,76,0.5) 65%,rgba(201,168,76,0.15) 85%,transparent 100%)' }} />
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="flex-1 flex flex-col items-center justify-center gap-[3px] relative pt-2 pb-3 border-none bg-transparent cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Active indicator arch */}
            {active === tab.id && (
              <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-9 h-[3px]"
                style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />
            )}
            <span className="text-xl leading-none"
              style={{
                filter: active === tab.id ? 'drop-shadow(0 0 8px rgba(201,168,76,0.7))' : undefined,
                opacity: active === tab.id ? 1 : 0.4,
                transform: active === tab.id ? 'translateY(-1px)' : undefined,
              }}>
              {tab.icon}
            </span>
            <span className="font-heading uppercase"
              style={{
                fontSize: '6.5px',
                letterSpacing: '0.3em',
                color: active === tab.id ? '#c9a84c' : '#d4c5a0',
                opacity: active === tab.id ? 0.85 : 0.3,
              }}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
