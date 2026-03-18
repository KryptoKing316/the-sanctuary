import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  JESUS_TEACHINGS,
  BOOK_OF_ENOCH_PASSAGES,
  BOOK_OF_ENOCH_STRUCTURE,
  ETHIOPIAN_BIBLE_BOOKS,
} from '../data/scripture'
import type { ScripturePassage } from '../data/scripture'

type View = 'home' | 'christ-themes' | 'christ-reader' | 'enoch-books' | 'enoch-reader' | 'bible-parts' | 'bible-books'

const CHRIST_THEMES: { id: string; label: string; icon: string; desc: string }[] = [
  { id: 'beatitudes',       label: 'The Beatitudes',       icon: '⛰️', desc: 'Blessed are the poor in spirit…' },
  { id: 'i-am',            label: 'I AM Declarations',    icon: '☀️', desc: 'Before Abraham was, I AM' },
  { id: 'prayer',          label: 'On Prayer',            icon: '🙏🏽', desc: 'Ask, seek, knock — your Father hears' },
  { id: 'love',            label: 'Love & Mercy',         icon: '❤️', desc: 'Love one another as I have loved you' },
  { id: 'kingdom',         label: 'Kingdom of God',       icon: '👑', desc: 'Seek first the Kingdom' },
  { id: 'discipleship',    label: 'The Cost of Following', icon: '✝️', desc: 'Take up your cross and follow me' },
  { id: 'mission',         label: 'The Great Commission', icon: '🌍', desc: 'Go and make disciples of all nations' },
  { id: 'hope',            label: 'Hope & Peace',         icon: '🕊️', desc: 'I have overcome the world' },
  { id: 'trust',           label: 'Do Not Worry',         icon: '🌿', desc: 'Consider the birds of the air' },
  { id: 'holiness',        label: 'Holiness',             icon: '✨', desc: 'Be perfect as your Father is perfect' },
  { id: 'servanthood',     label: 'Servant Leadership',   icon: '🫙', desc: 'Whoever would be great must serve' },
  { id: 'abiding',         label: 'Abiding in Christ',    icon: '🍇', desc: 'Apart from me you can do nothing' },
]

// ── Cross SVG ─────────────────────────────────────────────────
function GoldenCross({ size = 64 }: { size?: number }) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 64 64">
      <defs>
        <radialGradient id="crossGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(232,201,107,1)" />
          <stop offset="60%" stopColor="rgba(201,168,76,0.9)" />
          <stop offset="100%" stopColor="rgba(140,110,30,0.6)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Vertical beam */}
      <rect x="28" y="6" width="8" height="52" rx="2" fill="url(#crossGlow)" filter="url(#glow)" />
      {/* Horizontal beam */}
      <rect x="10" y="20" width="44" height="8" rx="2" fill="url(#crossGlow)" filter="url(#glow)" />
      {/* Center jewel */}
      <circle cx="32" cy="24" r="5" fill="rgba(255,240,200,0.95)" filter="url(#glow)" />
    </svg>
  )
}

// ── HOME SCREEN ───────────────────────────────────────────────
function HomeView({ onNav }: { onNav: (v: View) => void }) {
  const daily = JESUS_TEACHINGS[new Date().getDate() % JESUS_TEACHINGS.length]

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24"
      style={{ background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(127,0,0,0.45) 0%, transparent 55%), linear-gradient(180deg,#0e0608 0%,#080910 100%)' }}>

      {/* Hero */}
      <div className="text-center pt-12 px-6 pb-4">
        <div className="mx-auto mb-4 flex justify-center" style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.5))' }}>
          <GoldenCross size={72} />
        </div>
        <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '8px', letterSpacing: '0.55em', opacity: 0.7 }}>
          Ethiopian Bible · 88 Books
        </span>
        <h1 className="font-display text-gold-light mb-2" style={{ fontSize: '26px', fontWeight: 900, textShadow: '0 0 30px rgba(201,168,76,0.7),0 0 60px rgba(127,0,0,0.5)', lineHeight: 1.1 }}>
          Christ Is King
        </h1>
        <p className="font-body italic text-parchment mb-4" style={{ fontSize: '12px', opacity: 0.6, lineHeight: 1.55, maxWidth: 280, margin: '0 auto 16px' }}>
          The teachings, the prophecies, and the hidden texts of the Ethiopian Orthodox canon
        </p>
        <div className="flex items-center gap-2 mx-4 mb-4 opacity-30">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.8))' }} />
          <span className="text-gold font-heading text-xs">✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.8),transparent)' }} />
        </div>

        {/* Daily word */}
        <div className="mx-2 p-4 rounded mb-2 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,rgba(127,0,0,0.4),rgba(26,35,126,0.25))', border: '1px solid rgba(201,168,76,0.3)' }}>
          <span className="absolute top-0 left-2 text-5xl leading-none" style={{ color: 'rgba(201,168,76,0.1)', fontFamily: 'Georgia,serif' }}>❝</span>
          <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '7px', letterSpacing: '0.45em', opacity: 0.7 }}>Word of Christ Today</span>
          <p className="font-body italic text-ivory mb-2" style={{ fontSize: '13px', lineHeight: 1.65 }}>"{daily.text}"</p>
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7.5px', letterSpacing: '0.3em', opacity: 0.65 }}>— {daily.reference}</span>
        </div>
      </div>

      {/* Navigation tiles */}
      <div className="px-4 flex flex-col gap-3">
        {/* Teachings of Jesus */}
        <NavTile
          onPress={() => onNav('christ-themes')}
          gradient="linear-gradient(135deg,rgba(127,0,0,0.6) 0%,rgba(60,0,0,0.85) 100%)"
          icon="✝️"
          title="Teachings of Jesus Christ"
          subtitle="Red-letter sayings from Matthew, Mark, Luke & John"
          badge={`${JESUS_TEACHINGS.length} passages`}
          borderColor="rgba(201,168,76,0.4)"
        />

        {/* Book of Enoch */}
        <NavTile
          onPress={() => onNav('enoch-books')}
          gradient="linear-gradient(135deg,rgba(26,35,126,0.6) 0%,rgba(10,15,60,0.9) 100%)"
          icon="📜"
          title="The Book of Enoch"
          subtitle="5 books · The Watchers, Parables, Son of Man prophecies"
          badge={`${BOOK_OF_ENOCH_PASSAGES.length} passages`}
          borderColor="rgba(100,120,255,0.35)"
        />

        {/* Ethiopian Bible */}
        <NavTile
          onPress={() => onNav('bible-parts')}
          gradient="linear-gradient(135deg,rgba(0,77,64,0.55) 0%,rgba(5,35,30,0.9) 100%)"
          icon="📖"
          title="The Ethiopian Bible"
          subtitle="Full 88-book canon · 3 parts including hidden texts"
          badge="88 books"
          borderColor="rgba(0,200,150,0.25)"
        />
      </div>
    </div>
  )
}

function NavTile({ onPress, gradient, icon, title, subtitle, badge, borderColor }: {
  onPress: () => void; gradient: string; icon: string
  title: string; subtitle: string; badge: string; borderColor: string
}) {
  return (
    <motion.button whileTap={{ scale: 0.985 }} onClick={onPress}
      className="w-full text-left rounded overflow-hidden"
      style={{ border: `1px solid ${borderColor}`, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
      <div className="relative">
        <div className="absolute inset-0" style={{ background: gradient }} />
        <div className="relative z-10 flex items-center gap-4 p-4">
          <span style={{ fontSize: 32, filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))', flexShrink: 0, width: 44, textAlign: 'center' }}>{icon}</span>
          <div className="flex-1">
            <div className="font-display text-gold-light mb-1" style={{ fontSize: '14px', textShadow: '0 0 12px rgba(201,168,76,0.4)' }}>{title}</div>
            <div className="font-body italic text-parchment" style={{ fontSize: '11.5px', opacity: 0.65, lineHeight: 1.4 }}>{subtitle}</div>
            <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.6 }}>{badge}</span>
          </div>
          <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 16, flexShrink: 0 }}>›</span>
        </div>
      </div>
    </motion.button>
  )
}

// ── CHRIST THEMES LIST ────────────────────────────────────────
function ChristThemesView({ onBack, onTheme }: { onBack: () => void; onTheme: (theme: string, label: string) => void }) {
  return (
    <div className="flex flex-col h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(127,0,0,0.4) 0%, transparent 55%), linear-gradient(180deg,#0e0608 0%,#080910 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Christ Is King
        </button>
        <div className="flex items-center gap-3 mb-3">
          <GoldenCross size={32} />
          <h2 className="font-display text-gold-light" style={{ fontSize: '18px', textShadow: '0 0 20px rgba(201,168,76,0.5)' }}>Teachings of Jesus</h2>
        </div>
        <div className="h-px mb-3 opacity-30" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {CHRIST_THEMES.map(t => (
          <motion.button key={t.id} whileTap={{ scale: 0.985 }}
            onClick={() => onTheme(t.id, t.label)}
            className="w-full text-left mb-3 p-4 rounded flex items-center gap-4"
            style={{ background: 'rgba(127,0,0,0.15)', border: '1px solid rgba(201,168,76,0.18)' }}>
            <span style={{ fontSize: 24, flexShrink: 0, width: 32, textAlign: 'center' }}>{t.icon}</span>
            <div className="flex-1">
              <div className="font-display text-gold-light mb-1" style={{ fontSize: '13px' }}>{t.label}</div>
              <div className="font-body italic text-parchment" style={{ fontSize: '11px', opacity: 0.6 }}>{t.desc}</div>
              <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.5 }}>
                {JESUS_TEACHINGS.filter(p => p.theme === t.id).length} passages
              </span>
            </div>
            <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14, flexShrink: 0 }}>›</span>
          </motion.button>
        ))}
        {/* All teachings */}
        <motion.button whileTap={{ scale: 0.985 }}
          onClick={() => onTheme('__all__', 'All Teachings')}
          className="w-full text-left mb-3 p-4 rounded flex items-center gap-4"
          style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}>
          <span style={{ fontSize: 24, flexShrink: 0, width: 32, textAlign: 'center' }}>📋</span>
          <div className="flex-1">
            <div className="font-display text-gold-light mb-1" style={{ fontSize: '13px' }}>All Teachings</div>
            <div className="font-body italic text-parchment" style={{ fontSize: '11px', opacity: 0.6 }}>Every passage in one scroll</div>
            <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.5 }}>{JESUS_TEACHINGS.length} passages</span>
          </div>
          <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14, flexShrink: 0 }}>›</span>
        </motion.button>
      </div>
    </div>
  )
}

// ── SCRIPTURE READER ──────────────────────────────────────────
function ScriptureReader({ passages, startIndex, title, onBack, accentColor = 'rgba(127,0,0,0.5)' }: {
  passages: ScripturePassage[]; startIndex: number; title: string
  onBack: () => void; accentColor?: string
}) {
  const [idx, setIdx] = useState(startIndex)
  const [shared, setShared] = useState(false)
  const [meditating, setMeditating] = useState(false)
  const p = passages[idx]

  function handleShare() {
    const text = `"${p.text}" — ${p.reference}\n\nFrom Theosis`
    if (navigator.share) {
      navigator.share({ text }).catch(() => {})
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      })
    }
  }

  return (
    <div className="flex flex-col h-full relative"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor} 0%, transparent 55%), linear-gradient(180deg,#080910 0%,#060708 100%)` }}>

      {/* Meditation overlay */}
      <AnimatePresence>
        {meditating && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center"
            style={{ background: 'rgba(4,4,12,0.95)', backdropFilter: 'blur(8px)' }}
            onClick={() => setMeditating(false)}>
            <div className="mb-6" style={{ animation: 'divineBreath 4s ease-in-out infinite' }}>
              <GoldenCross size={56} />
            </div>
            <p className="font-body italic text-ivory mb-4" style={{ fontSize: '15px', lineHeight: 1.85, opacity: 0.95 }}>"{p.text}"</p>
            <span className="font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.6 }}>— {p.reference}</span>
            <p className="font-heading uppercase text-gold mt-8" style={{ fontSize: '7px', letterSpacing: '0.35em', opacity: 0.35 }}>Tap to close</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-3 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ {title}
        </button>
        <div className="flex justify-between mb-3">
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.5 }}>{idx + 1} of {passages.length}</span>
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.5 }}>{title}</span>
        </div>
        <div className="h-px mb-3 opacity-25" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <p className="font-body text-ivory mb-5" style={{ fontSize: '16px', lineHeight: 1.85, position: 'relative' }}>
              <span className="font-display text-gold float-left mr-2" style={{ fontSize: '64px', lineHeight: 0.82, marginTop: 6, textShadow: '0 0 28px rgba(201,168,76,0.7)' }}>
                {p.text[0]}
              </span>
              <span style={{ fontStyle: 'italic', opacity: 0.92 }}>{p.text.slice(1)}</span>
            </p>

            {/* Reference */}
            <div className="flex items-center gap-3 mt-4 mb-3 opacity-70">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
              <span className="font-heading uppercase text-gold" style={{ fontSize: '7.5px', letterSpacing: '0.35em' }}>{p.reference}</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Actions */}
      <div className="flex-shrink-0 px-5 pb-6 pt-2 flex flex-col gap-3">
        <button onClick={() => setMeditating(true)}
          className="w-full py-3 rounded font-heading uppercase text-gold"
          style={{ fontSize: '9px', letterSpacing: '0.4em', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)' }}>
          ✝ Meditate on This
        </button>
        <div className="flex gap-3">
          <button disabled={idx === 0} onClick={() => setIdx(i => i - 1)}
            className="flex-1 py-2 rounded font-heading uppercase text-gold"
            style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.2)', opacity: idx === 0 ? 0.3 : 1 }}>
            ‹ Prev
          </button>
          <button onClick={handleShare}
            className="flex-1 py-2 rounded font-heading uppercase text-gold"
            style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.2)' }}>
            {shared ? '✓ Copied' : '↑ Share'}
          </button>
          <button disabled={idx === passages.length - 1} onClick={() => setIdx(i => i + 1)}
            className="flex-1 py-2 rounded font-heading uppercase text-gold"
            style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.2)', opacity: idx === passages.length - 1 ? 0.3 : 1 }}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  )
}

// ── ENOCH BOOKS LIST ──────────────────────────────────────────
function EnochBooksView({ onBack, onBook }: { onBack: () => void; onBook: (bookTitle: string) => void }) {
  const bookColors = [
    'rgba(26,35,126,0.55)',
    'rgba(60,0,100,0.55)',
    'rgba(0,60,80,0.55)',
    'rgba(80,60,0,0.55)',
    'rgba(0,60,30,0.55)',
  ]
  return (
    <div className="flex flex-col h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(26,35,126,0.5) 0%, transparent 55%), linear-gradient(180deg,#08090e 0%,#080910 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Christ Is King
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span style={{ fontSize: 28 }}>📜</span>
          <h2 className="font-display text-gold-light" style={{ fontSize: '18px', textShadow: '0 0 20px rgba(201,168,76,0.5)' }}>The Book of Enoch</h2>
        </div>
        <p className="font-body italic text-parchment mb-3" style={{ fontSize: '11px', opacity: 0.5, lineHeight: 1.5 }}>
          Ethiopian Orthodx canon · Translated by Dr. Jay Winter from the Ethiopic manuscript
        </p>
        <div className="h-px mb-3 opacity-30" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {BOOK_OF_ENOCH_STRUCTURE.map((book, i) => (
          <motion.button key={book.book} whileTap={{ scale: 0.985 }}
            onClick={() => onBook(book.title)}
            className="w-full text-left mb-3 rounded overflow-hidden"
            style={{ border: '1px solid rgba(100,120,255,0.25)', boxShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            <div className="relative">
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${bookColors[i]},rgba(5,8,20,0.95))` }} />
              <div className="relative z-10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.6 }}>Book {book.book}</span>
                  <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.5 }}>{book.chapters.length} chapters</span>
                </div>
                <div className="font-display text-gold-light mb-2" style={{ fontSize: '14px', textShadow: '0 0 12px rgba(201,168,76,0.4)' }}>{book.title}</div>
                <div className="flex flex-col gap-1">
                  {book.chapters.slice(0, 3).map(ch => (
                    <span key={ch.chapter} className="font-body italic text-parchment" style={{ fontSize: '10.5px', opacity: 0.5 }}>Ch. {ch.chapter} — {ch.title}</span>
                  ))}
                  {book.chapters.length > 3 && (
                    <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.4 }}>+{book.chapters.length - 3} more chapters</span>
                  )}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
        {/* All passages */}
        <motion.button whileTap={{ scale: 0.985 }}
          onClick={() => onBook('__all__')}
          className="w-full text-left mb-3 p-4 rounded flex items-center gap-4"
          style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
          <span style={{ fontSize: 24 }}>📋</span>
          <div className="flex-1">
            <div className="font-display text-gold-light mb-1" style={{ fontSize: '13px' }}>All Passages</div>
            <div className="font-body italic text-parchment" style={{ fontSize: '11px', opacity: 0.6 }}>Every extracted passage in sequence</div>
            <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.5 }}>{BOOK_OF_ENOCH_PASSAGES.length} passages</span>
          </div>
          <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14 }}>›</span>
        </motion.button>
      </div>
    </div>
  )
}

// ── ETHIOPIAN BIBLE PARTS ─────────────────────────────────────
function BiblePartsView({ onBack, onPart }: { onBack: () => void; onPart: (partIdx: number) => void }) {
  const partColors = [
    { bg: 'rgba(0,77,40,0.5)', border: 'rgba(0,200,100,0.25)' },
    { bg: 'rgba(100,0,0,0.5)', border: 'rgba(201,168,76,0.3)' },
    { bg: 'rgba(40,0,80,0.5)', border: 'rgba(150,100,255,0.25)' },
  ]
  return (
    <div className="flex flex-col h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,60,30,0.4) 0%, transparent 55%), linear-gradient(180deg,#050e08 0%,#080910 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Christ Is King
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span style={{ fontSize: 28 }}>📖</span>
          <h2 className="font-display text-gold-light" style={{ fontSize: '18px', textShadow: '0 0 20px rgba(201,168,76,0.5)' }}>Ethiopian Bible</h2>
        </div>
        <p className="font-body italic text-parchment mb-3" style={{ fontSize: '11px', opacity: 0.5, lineHeight: 1.5 }}>
          88-book Orthodox canon · Foundations, Prophets & Apostolic texts
        </p>
        <div className="h-px mb-4 opacity-30" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {ETHIOPIAN_BIBLE_BOOKS.map((part, i) => (
          <motion.button key={part.part} whileTap={{ scale: 0.985 }}
            onClick={() => onPart(i)}
            className="w-full text-left mb-4 rounded overflow-hidden"
            style={{ border: `1px solid ${partColors[i].border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <div className="relative">
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${partColors[i].bg},rgba(5,8,15,0.95))` }} />
              <div className="relative z-10 p-5">
                <span className="font-heading uppercase text-gold block mb-1" style={{ fontSize: '7px', letterSpacing: '0.5em', opacity: 0.6 }}>{part.part}</span>
                <div className="font-display text-gold-light mb-2" style={{ fontSize: '16px', textShadow: '0 0 16px rgba(201,168,76,0.4)', lineHeight: 1.2 }}>{part.section}</div>
                <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.35em', opacity: 0.55 }}>{part.books.length} books</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// ── BIBLE BOOKS LIST ──────────────────────────────────────────
function BibleBooksView({ partIdx, onBack }: { partIdx: number; onBack: () => void }) {
  const part = ETHIOPIAN_BIBLE_BOOKS[partIdx]
  return (
    <div className="flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg,#060a08 0%,#080910 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Ethiopian Bible
        </button>
        <span className="font-heading uppercase text-gold block mb-1" style={{ fontSize: '7.5px', letterSpacing: '0.45em', opacity: 0.6 }}>{part.part}</span>
        <h2 className="font-display text-gold-light mb-1" style={{ fontSize: '16px', textShadow: '0 0 16px rgba(201,168,76,0.4)', lineHeight: 1.25 }}>{part.section}</h2>
        <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.45 }}>{part.books.length} sacred books</span>
        <div className="h-px mt-3 mb-2 opacity-25" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-2">
        {part.books.map((book, i) => (
          <div key={i} className="flex items-center gap-3 py-3 px-3 mb-1 rounded"
            style={{ borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
            <span className="font-heading text-gold opacity-40" style={{ fontSize: '9px', minWidth: 24 }}>{i + 1}</span>
            <span className="font-body italic text-parchment" style={{ fontSize: '13.5px', opacity: 0.85, lineHeight: 1.4 }}>{book}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────
export default function ChristScreen() {
  const [view, setView] = useState<View>('home')
  const [christTheme, setChristTheme] = useState<string>('__all__')
  const [christThemeLabel, setChristThemeLabel] = useState('All Teachings')
  const [enochBookTitle, setEnochBookTitle] = useState('__all__')
  const [biblePartIdx, setBiblePartIdx] = useState(0)

  const christPassages = christTheme === '__all__'
    ? JESUS_TEACHINGS
    : JESUS_TEACHINGS.filter(p => p.theme === christTheme)

  const enochPassages = enochBookTitle === '__all__'
    ? BOOK_OF_ENOCH_PASSAGES
    : BOOK_OF_ENOCH_PASSAGES.filter(p => {
        const bookNum = BOOK_OF_ENOCH_STRUCTURE.findIndex(b => b.title === enochBookTitle) + 1
        return p.reference.includes(`Book ${bookNum}`) || p.reference.includes(`B${bookNum}`)
      })

  return (
    <div className="h-full overflow-hidden relative">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <HomeView onNav={setView} />
          </motion.div>
        )}
        {view === 'christ-themes' && (
          <motion.div key="christ-themes" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <ChristThemesView onBack={() => setView('home')} onTheme={(id, label) => { setChristTheme(id); setChristThemeLabel(label); setView('christ-reader') }} />
          </motion.div>
        )}
        {view === 'christ-reader' && (
          <motion.div key="christ-reader" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <ScriptureReader passages={christPassages} startIndex={0} title={christThemeLabel}
              onBack={() => setView('christ-themes')} accentColor="rgba(127,0,0,0.5)" />
          </motion.div>
        )}
        {view === 'enoch-books' && (
          <motion.div key="enoch-books" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <EnochBooksView onBack={() => setView('home')} onBook={(title) => { setEnochBookTitle(title); setView('enoch-reader') }} />
          </motion.div>
        )}
        {view === 'enoch-reader' && (
          <motion.div key="enoch-reader" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <ScriptureReader
              passages={enochPassages.length > 0 ? enochPassages : BOOK_OF_ENOCH_PASSAGES}
              startIndex={0}
              title={enochBookTitle === '__all__' ? 'Book of Enoch' : enochBookTitle}
              onBack={() => setView('enoch-books')}
              accentColor="rgba(26,35,126,0.6)"
            />
          </motion.div>
        )}
        {view === 'bible-parts' && (
          <motion.div key="bible-parts" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <BiblePartsView onBack={() => setView('home')} onPart={(i) => { setBiblePartIdx(i); setView('bible-books') }} />
          </motion.div>
        )}
        {view === 'bible-books' && (
          <motion.div key="bible-books" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <BibleBooksView partIdx={biblePartIdx} onBack={() => setView('bible-parts')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
