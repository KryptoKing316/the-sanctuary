import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrayerCard from '../components/ui/PrayerCard'
import { usePrayerCounter, formatCount } from '../hooks/usePrayerCounter'
import { useParticles } from '../hooks/useParticles'
import type { PrayerRequest, PrayerCategory } from '../data/prayers'
import { MOCK_PRAYERS, CATEGORY_META } from '../data/prayers'

export default function HomeScreen() {
  const { count, increment } = usePrayerCounter()
  const { canvasRef, launch } = useParticles()
  const [prayers, setPrayers] = useState<PrayerRequest[]>(MOCK_PRAYERS)
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [selectedCat, setSelectedCat] = useState<PrayerCategory>('war')
  const [prayerText, setPrayerText] = useState('')
  const [isAnon, setIsAnon] = useState(true)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function handlePray(id: string) {
    increment()
    setPrayers(prev => prev.map(p => p.id === id ? { ...p, prayCount: p.prayCount + 1 } : p))
    fireToast()
    const el = document.getElementById(`card-${id}`)
    if (el) {
      const rect = el.getBoundingClientRect()
      launch(rect.left + rect.width / 2, rect.top)
    }
  }

  function fireToast() {
    setShowToast(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setShowToast(false), 2200)
  }

  function submitPrayer() {
    if (!prayerText.trim()) return
    const newPrayer: PrayerRequest = {
      id: Date.now().toString(),
      category: selectedCat,
      body: prayerText.trim(),
      author: isAnon ? 'Anonymous' : 'You',
      prayCount: 1,
      createdAt: 'just now',
      isAnonymous: isAnon,
    }
    setPrayers(prev => [newPrayer, ...prev])
    setPrayerText('')
    setShowModal(false)
    fireToast()
    launch(window.innerWidth / 2, window.innerHeight / 2)
    increment()
  }

  return (
    <div className="relative flex flex-col h-full overflow-hidden">

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[100]" />

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: '-50%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1,    y: '-50%', x: '-50%' }}
            exit={{   opacity: 0, scale: 0.85,  y: '-50%', x: '-50%' }}
            className="fixed top-1/2 left-1/2 z-[200] text-center rounded-lg"
            style={{ padding: '20px 28px', background: 'linear-gradient(135deg,rgba(26,35,126,0.97),rgba(40,25,80,0.97))', border: '1px solid rgba(201,168,76,0.5)', boxShadow: '0 8px 40px rgba(0,0,0,0.8)' }}>
            <span className="block text-4xl mb-2">✝</span>
            <div className="font-display text-gold-light" style={{ fontSize: '13px' }}>Prayer Offered</div>
            <div className="font-body italic text-parchment mt-1" style={{ fontSize: '11px', opacity: 0.7 }}>Your intercession rises before the Throne</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[80px]">

        {/* ── HERO ────────────────────────────── */}
        <div className="relative w-full overflow-hidden" style={{ height: '360px' }}>
          {/* Stone base */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#08090f 0%,#0d0e1a 100%)' }} />
          {/* Glass panels */}
          <div className="absolute top-0 left-0 w-[28%] h-[95%]"
            style={{ backgroundImage: 'url(/glass-archangel.webp)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.6) saturate(1.4) contrast(1.1)', WebkitMaskImage: 'linear-gradient(to right,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.8) 50%,transparent 100%)', maskImage: 'linear-gradient(to right,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.8) 50%,transparent 100%)' }} />
          <div className="absolute top-0 right-0 w-[28%] h-[90%]"
            style={{ backgroundImage: 'url(/glass-pantocrator.png)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.55) saturate(1.5) contrast(1.1)', WebkitMaskImage: 'linear-gradient(to left,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.8) 50%,transparent 100%)', maskImage: 'linear-gradient(to left,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.8) 50%,transparent 100%)' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[68%] h-full"
            style={{ backgroundImage: 'url(/glass-ascension.webp)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.72) saturate(1.5) contrast(1.15)' }} />
          {/* Divine light */}
          <div className="absolute animate-divine-breath pointer-events-none z-[3]"
            style={{ top: '20px', left: '50%', transform: 'translateX(-50%)', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,230,140,0.25) 0%,rgba(201,168,76,0.12) 30%,rgba(201,168,76,0.05) 55%,transparent 75%)', mixBlendMode: 'screen' }} />
          {/* Floor fade */}
          <div className="absolute bottom-0 left-0 right-0 z-[5]"
            style={{ height: '120px', background: 'linear-gradient(180deg,transparent 0%,rgba(8,9,15,0.55) 40%,rgba(8,9,15,0.88) 70%,#0d0e1a 100%)' }} />
          {/* Arch SVG */}
          <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[6]" viewBox="0 0 430 200" fill="none" preserveAspectRatio="none">
            <path d="M0,200 L0,115 Q55,-10 115,115 L115,200 Z" fill="rgba(8,9,15,0.55)"/>
            <path d="M8,200 L8,118 Q57,5 112,118" fill="none" stroke="rgba(201,168,76,0.45)" strokeWidth="1.2"/>
            <path d="M315,200 L315,115 Q375,-10 430,115 L430,200 Z" fill="rgba(8,9,15,0.55)"/>
            <path d="M322,200 L322,118 Q378,5 423,118" fill="none" stroke="rgba(201,168,76,0.45)" strokeWidth="1.2"/>
            <rect x="108" y="80" width="18" height="120" fill="rgba(8,9,15,0.65)"/>
            <rect x="304" y="80" width="18" height="120" fill="rgba(8,9,15,0.65)"/>
            <path d="M108,200 L108,85 Q215,-45 322,85 L322,200" fill="none" stroke="rgba(8,9,15,0.85)" strokeWidth="22"/>
            <path d="M119,200 L119,90 Q215,-30 311,90 L311,200" fill="none" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5"/>
            <circle cx="215" cy="14" r="7"  fill="rgba(8,9,15,0.9)" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2"/>
            <circle cx="215" cy="14" r="3"  fill="rgba(201,168,76,0.55)"/>
            <circle cx="215" cy="50" r="16" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.9"/>
            <circle cx="215" cy="50" r="9"  fill="none" stroke="rgba(201,168,76,0.2)"  strokeWidth="0.8"/>
            <circle cx="215" cy="50" r="3"  fill="rgba(201,168,76,0.3)"/>
            <line x1="199" y1="50" x2="231" y2="50" stroke="rgba(201,168,76,0.18)" strokeWidth="0.7"/>
            <line x1="215" y1="34" x2="215" y2="66" stroke="rgba(201,168,76,0.18)" strokeWidth="0.7"/>
            <line x1="119" y1="155" x2="311" y2="155" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>
            <line x1="0" y1="199" x2="430" y2="199" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5"/>
          </svg>
          {/* Title */}
          <div className="absolute bottom-7 left-0 right-0 text-center z-10 px-5">
            <span className="block font-heading uppercase text-gold mb-1" style={{ fontSize: '7.5px', letterSpacing: '0.55em', opacity: 0.65 }}>Est. Anno Domini MMXXV</span>
            <h1 className="font-display text-ivory" style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '0.05em', textShadow: '0 0 20px rgba(201,168,76,1),0 0 40px rgba(201,168,76,0.6),0 2px 6px rgba(0,0,0,1)' }}>Theosis</h1>
            <span className="block font-body italic text-parchment mt-2" style={{ fontSize: '17px', fontWeight: 700, opacity: 0.92, textShadow: '0 0 16px rgba(201,168,76,0.4),0 1px 6px rgba(0,0,0,0.9)', letterSpacing: '0.01em' }}>Where Millions Pray as One With Christ</span>
          </div>
        </div>

        {/* ── COUNTER BAND ─────────────────── */}
        <div className="flex items-center justify-center gap-3 px-5 py-3" style={{ background: 'linear-gradient(90deg,#1a237e 0%,#1e2d7a 50%,#1a237e 100%)', borderTop: '1px solid rgba(201,168,76,0.4)', borderBottom: '1px solid rgba(201,168,76,0.4)', boxShadow: 'inset 0 1px 0 rgba(201,168,76,0.15),0 4px 20px rgba(0,0,0,0.5)' }}>
          <span className="text-gold" style={{ fontSize: '10px', opacity: 0.6 }}>✦</span>
          <div className="text-center">
            <span className="block font-heading uppercase text-gold mb-0.5" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.8 }}>
              <span className="inline-block w-[7px] h-[7px] rounded-full bg-green-500 mr-1 animate-live-blink" style={{ boxShadow: '0 0 6px rgba(76,175,80,0.8)' }} />
              Prayers Offered Today
            </span>
            <span className="block font-display text-gold-light animate-counter-pulse" style={{ fontSize: '28px', letterSpacing: '0.04em' }}>{formatCount(count)}</span>
            <span className="block font-heading uppercase text-parchment" style={{ fontSize: '7.5px', letterSpacing: '0.3em', opacity: 0.55, marginTop: '2px' }}>Across 147 Nations · Rising Every Second</span>
          </div>
          <span className="text-gold" style={{ fontSize: '10px', opacity: 0.6 }}>✦</span>
        </div>

        {/* ── COMMUNION BANNER ─────────────── */}
        <div className="mx-4 mt-3 mb-1 rounded-[4px] overflow-hidden relative cursor-pointer" style={{ background: 'linear-gradient(135deg,rgba(26,35,126,0.8) 0%,rgba(40,25,80,0.9) 50%,rgba(127,0,0,0.5) 100%)', border: '1px solid rgba(201,168,76,0.35)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          <div className="relative z-[1] flex items-center gap-3.5 p-4">
            <span className="text-3xl" style={{ filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.6))' }}>🏛️</span>
            <div className="flex-1">
              <span className="block font-heading uppercase text-gold mb-0.5" style={{ fontSize: '7px', letterSpacing: '0.45em', opacity: 0.8 }}>Live Now · The Eucharist</span>
              <div className="font-display text-ivory" style={{ fontSize: '14px', textShadow: '0 0 15px rgba(201,168,76,0.5)' }}>Join Global Holy Communion</div>
              <div className="font-body italic text-parchment flex items-center gap-1 mt-0.5" style={{ fontSize: '11px', opacity: 0.7 }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-live-blink" />
                12,847 brothers & sisters gathered
              </div>
            </div>
            <button className="font-heading uppercase font-bold px-3.5 py-2 rounded-[2px]" style={{ fontSize: '7.5px', letterSpacing: '0.3em', color: '#0a0b12', background: 'linear-gradient(135deg,#8a6c20,#c9a84c)' }}>Enter</button>
          </div>
        </div>

        {/* ── MANIFESTO ────────────────────── */}
        <div className="text-center px-6 py-4 relative flex flex-col gap-1">
          <span className="absolute top-1/2 left-3.5 -translate-y-1/2 text-gold" style={{ fontSize: '9px', opacity: 0.3 }}>✦</span>
          <span className="font-heading uppercase text-parchment" style={{ fontSize: '9px', letterSpacing: '0.35em', opacity: 0.45 }}>This is not a wellness app.</span>
          <span className="font-body italic text-gold-light" style={{ fontSize: '13px', opacity: 0.8, textShadow: '0 0 18px rgba(201,168,76,0.35)' }}>This is a digital sacred space.</span>
          <span className="absolute top-1/2 right-3.5 -translate-y-1/2 text-gold" style={{ fontSize: '9px', opacity: 0.3 }}>✦</span>
        </div>

        {/* ── SECTION HEADER ───────────────── */}
        <div className="flex items-center gap-2.5 px-5 pb-3">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />
          <span className="font-heading uppercase text-gold" style={{ fontSize: '9px', letterSpacing: '0.5em' }}>The Prayer Wall</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />
        </div>

        {/* ── PRAYER CARDS ─────────────────── */}
        <div className="flex flex-col gap-3.5 px-4 pb-5">
          <AnimatePresence initial={false}>
            {prayers.map(prayer => (
              <motion.div key={prayer.id} id={`card-${prayer.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                <PrayerCard prayer={prayer} onPray={handlePray} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── FAB ──────────────────────────── */}
      <button onClick={() => setShowModal(true)}
        className="fixed z-50 flex items-center justify-center rounded-full font-bold cursor-pointer animate-fab-glow"
        style={{ bottom: '96px', right: '20px', width: '56px', height: '56px', fontSize: '26px', color: '#0a0b12', background: 'radial-gradient(circle,#e8c96b,#c9a84c,#8a6c20)', border: 'none', boxShadow: '0 4px 20px rgba(201,168,76,0.5),0 0 40px rgba(201,168,76,0.2),0 2px 6px rgba(0,0,0,0.6)' }}>
        ⊕
      </button>

      {/* ── ADD PRAYER MODAL ─────────────── */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150]" style={{ background: 'rgba(0,0,0,0.75)' }}
              onClick={() => setShowModal(false)} />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[160] rounded-t-2xl"
              style={{ background: 'linear-gradient(180deg,#12141f 0%,#0d0e1a 100%)', borderTop: '1px solid rgba(201,168,76,0.3)', padding: '24px 20px 40px' }}>
              <div className="w-9 h-[3px] rounded mx-auto mb-5" style={{ background: 'rgba(201,168,76,0.3)' }} />
              <div className="font-display text-gold-light text-center mb-5" style={{ fontSize: '16px', textShadow: '0 0 15px rgba(201,168,76,0.4)' }}>Offer a Prayer</div>
              {/* Category grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {(Object.entries(CATEGORY_META) as [PrayerCategory, typeof CATEGORY_META[PrayerCategory]][]).map(([key, meta]) => (
                  <button key={key} onClick={() => setSelectedCat(key)}
                    className="flex flex-col items-center gap-1 py-2.5 rounded cursor-pointer transition-all"
                    style={{ background: selectedCat === key ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${selectedCat === key ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.2)'}` }}>
                    <span style={{ fontSize: '18px' }}>{meta.icon}</span>
                    <span className="font-heading uppercase text-parchment" style={{ fontSize: '6.5px', letterSpacing: '0.25em', opacity: 0.7 }}>{meta.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
              <textarea value={prayerText} onChange={e => setPrayerText(e.target.value)}
                placeholder="Write your prayer request..."
                className="w-full rounded font-body text-ivory resize-none outline-none"
                style={{ height: '100px', padding: '12px 14px', fontSize: '15px', background: 'rgba(245,240,232,0.05)', border: '1px solid rgba(201,168,76,0.25)', color: '#f5f0e8' }} />
              <div className="flex items-center justify-between my-3">
                <span className="font-heading uppercase text-parchment" style={{ fontSize: '8.5px', letterSpacing: '0.3em', opacity: 0.6 }}>Offer Anonymously</span>
                <button onClick={() => setIsAnon(a => !a)} className="rounded-full relative cursor-pointer"
                  style={{ width: '40px', height: '22px', background: isAnon ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.1)', border: `1px solid ${isAnon ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`, transition: 'all 0.2s' }}>
                  <span className="absolute top-[2px] rounded-full transition-all"
                    style={{ width: '16px', height: '16px', left: isAnon ? '20px' : '2px', background: isAnon ? '#c9a84c' : 'rgba(201,168,76,0.7)', transition: 'left 0.2s' }} />
                </button>
              </div>
              <button onClick={submitPrayer}
                className="w-full py-3.5 rounded font-heading uppercase font-bold cursor-pointer mt-1"
                style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#0a0b12', background: 'linear-gradient(135deg,#8a6c20,#c9a84c,#8a6c20)', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}>
                ⊕ &nbsp; Lift This Prayer
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
