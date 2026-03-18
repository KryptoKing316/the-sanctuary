import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES } from '../data/quotes'
import type { Category, Quote } from '../data/quotes'
import { DIDACHE_SECTIONS } from '../data/didache'
import type { DidacheSection, DidachePassage } from '../data/didache'

type View = 'library' | 'category' | 'reader' | 'didache-list' | 'didache-reader'

// Deterministic quote of the day based on day-of-year
function getQuoteOfDay(): Quote & { categoryLabel: string } {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000)
  const allQuotes = CATEGORIES.flatMap(c => c.quotes.map(q => ({ ...q, categoryLabel: c.label })))
  return allQuotes[dayOfYear % allQuotes.length]
}

// Desert Rose animated SVG
function DesertRose({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ animation: 'roseSpin 60s linear infinite' }}>
      {/* Outer petals */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse key={i} cx="50" cy="28" rx="7" ry="14"
          fill="rgba(244,143,177,0.55)"
          transform={`rotate(${angle} 50 50)`} />
      ))}
      {/* Inner petals */}
      {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((angle, i) => (
        <ellipse key={i} cx="50" cy="34" rx="5" ry="10"
          fill="rgba(244,143,177,0.35)"
          transform={`rotate(${angle} 50 50)`} />
      ))}
      {/* Gold center */}
      <circle cx="50" cy="50" r="10" fill="rgba(201,168,76,0.85)" />
      <circle cx="50" cy="50" r="5" fill="rgba(232,201,107,0.9)" />
      {/* Water droplets */}
      {[0,120,240].map((angle, i) => (
        <ellipse key={i} cx="50" cy="18" rx="2.5" ry="4"
          fill="rgba(144,202,249,0.7)"
          transform={`rotate(${angle} 50 50)`}
          style={{ animation: `rosePulse ${1.8 + i * 0.4}s ease-in-out infinite` }} />
      ))}
    </svg>
  )
}

// Rose Window accent SVG
function RoseWindow({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ animation: 'roseSpin 60s linear infinite' }}>
      <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
      <circle cx="50" cy="50" r="4" fill="rgba(201,168,76,0.4)"/>
      <g stroke="rgba(201,168,76,0.15)" strokeWidth="0.7">
        <line x1="50" y1="2" x2="50" y2="98"/>
        <line x1="2" y1="50" x2="98" y2="50"/>
        <line x1="15" y1="15" x2="85" y2="85"/>
        <line x1="85" y1="15" x2="15" y2="85"/>
      </g>
    </svg>
  )
}

// ── LIBRARY SCREEN ──────────────────────────────────────────
function LibraryScreen({ onSelect, onDidache }: { onSelect: (cat: Category) => void; onDidache: () => void }) {
  const qotd = getQuoteOfDay()
  const churchFathers = CATEGORIES.filter(c => !c.id.startsWith('desert') && !c.id.startsWith('mothers'))
  const desertFathers = CATEGORIES.filter(c => c.id.startsWith('desert'))
  const desertMothers = CATEGORIES.filter(c => c.id.startsWith('mothers'))

  return (
    <div className="flex flex-col h-full" style={{ background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(26,35,126,0.4) 0%, transparent 60%), linear-gradient(180deg,#080910 0%,#0a0b14 100%)' }}>
      {/* Hero */}
      <div className="flex-shrink-0 pt-12 px-6 pb-0 text-center">
        <div className="mx-auto mb-4 w-20 h-20">
          <RoseWindow size={80} />
        </div>
        <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '8px', letterSpacing: '0.55em', opacity: 0.7 }}>
          Voice of the Fathers
        </span>
        <h1 className="font-display text-gold-light mb-2" style={{ fontSize: '22px', fontWeight: 700, textShadow: '0 0 30px rgba(201,168,76,0.6)', lineHeight: 1.15 }}>
          The Patristic Library
        </h1>
        <p className="font-body italic text-parchment mb-4" style={{ fontSize: '12px', opacity: 0.6, lineHeight: 1.5, maxWidth: 280, margin: '0 auto 16px' }}>
          300 sayings from the Church Fathers, Desert Fathers &amp; Desert Mothers — 2nd–5th century
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 mx-6 mb-4 opacity-40">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.6))' }} />
          <span className="font-heading text-gold text-xs">✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
        </div>

        {/* Word for Today */}
        <div className="mx-4 mb-4 p-4 relative overflow-hidden rounded" style={{ background: 'linear-gradient(135deg,rgba(127,0,0,0.3),rgba(26,35,126,0.3))', border: '1px solid rgba(201,168,76,0.25)' }}>
          <span className="absolute top-0 left-2 text-5xl leading-none" style={{ color: 'rgba(201,168,76,0.12)', fontFamily: 'Georgia,serif' }}>❝</span>
          <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '7px', letterSpacing: '0.45em', opacity: 0.7 }}>Word for Today</span>
          <p className="font-body italic text-ivory mb-2" style={{ fontSize: '13px', lineHeight: 1.6 }}>"{qotd.text}"</p>
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7.5px', letterSpacing: '0.3em', opacity: 0.65 }}>— {qotd.author}</span>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto px-4 pb-24" style={{ WebkitOverflowScrolling: 'touch' }}>

        {/* Church Fathers */}
        <SectionHeader label="Church Fathers" />
        {churchFathers.map(cat => <CategoryCard key={cat.id} cat={cat} onSelect={onSelect} />)}

        {/* Desert Fathers */}
        <SectionHeader label="Voice of the Desert Fathers" subtitle="50 sayings from the Egyptian Desert Fathers — 4th–5th century" icon="🏜️" />
        {desertFathers.map(cat => <CategoryCard key={cat.id} cat={cat} onSelect={onSelect} />)}

        {/* Desert Mothers */}
        <SectionHeader label="Wisdom of the Desert Mothers" subtitle="Amma Syncletica, Sarah, Theodora & others" isDesertMothers />
        {desertMothers.map(cat => <CategoryCard key={cat.id} cat={cat} onSelect={onSelect} isDesertMothers />)}

        {/* Didache */}
        <SectionHeader label="The Didache" subtitle="Teaching of the Twelve Apostles · c. 1st century AD" icon="📜" />
        <motion.button
          whileTap={{ scale: 0.985 }}
          onClick={onDidache}
          className="w-full text-left rounded overflow-hidden mb-3"
          style={{ border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
          <div className="relative">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(80,50,0,0.6) 0%, transparent 60%), linear-gradient(180deg, #0e0c06 0%, #080910 100%)' }} />
            <div className="relative z-10 flex items-center gap-4 p-4">
              <span style={{ fontSize: 28, filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))', width: 40, textAlign: 'center', flexShrink: 0 }}>📜</span>
              <div className="flex-1">
                <div className="font-display text-gold-light mb-1" style={{ fontSize: '13px', textShadow: '0 0 12px rgba(201,168,76,0.5)' }}>The Didache</div>
                <div className="font-body italic text-parchment" style={{ fontSize: '11.5px', opacity: 0.65, lineHeight: 1.4 }}>The Two Ways · Baptism · Prayer · The Eucharist</div>
                <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.6 }}>{DIDACHE_SECTIONS.length} sections</span>
              </div>
              <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14, flexShrink: 0 }}>›</span>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  )
}

function SectionHeader({ label, subtitle, icon, isDesertMothers }: { label: string; subtitle?: string; icon?: string; isDesertMothers?: boolean }) {
  return (
    <div className="mt-5 mb-3 px-1">
      <div className="flex items-center gap-2 mb-1">
        {isDesertMothers ? (
          <span style={{ display: 'inline-block', width: 22, height: 22 }}><DesertRose size={22} /></span>
        ) : icon ? (
          <span style={{ fontSize: 16 }}>{icon}</span>
        ) : null}
        <span className="font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75 }}>{label}</span>
      </div>
      {subtitle && <p className="font-body italic text-parchment" style={{ fontSize: '11px', opacity: 0.5 }}>{subtitle}</p>}
      <div className="mt-2 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.35),transparent)' }} />
    </div>
  )
}

function CategoryCard({ cat, onSelect, isDesertMothers }: { cat: Category; onSelect: (c: Category) => void; isDesertMothers?: boolean }) {
  const descMap: Record<string, string> = {
    god: 'The soul, happiness, and knowing God',
    prayer: 'The inner life of prayer and fasting',
    love: 'Mercy, forgiveness, and loving enemies',
    humility: 'Repentance and the humble heart',
    warfare: 'Standing firm against temptation',
    virtue: 'Living rightly before God',
    eternity: 'Death, judgment, and the life to come',
    'desert-silence': 'On keeping the tongue and the heart',
    'desert-humility': 'The lowest place is the highest',
    'desert-prayer': 'Unceasing prayer in the desert',
    'mothers-wisdom': 'Abiding in God, bearing fruit',
    'mothers-water': 'Thirst for Him and He will come',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      onClick={() => onSelect(cat)}
      className="w-full text-left rounded overflow-hidden mb-3"
      style={{ border: `1px solid rgba(201,168,76,${isDesertMothers ? 0.3 : 0.18})`, boxShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
    >
      <div className="relative">
        <div className="absolute inset-0" style={{ background: cat.bgGradient }} />
        <div className="relative z-10 flex items-center gap-4 p-4">
          <span style={{ fontSize: 28, filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))', width: 40, textAlign: 'center', flexShrink: 0 }}>
            {isDesertMothers ? <DesertRose size={36} /> : cat.icon}
          </span>
          <div className="flex-1">
            <div className="font-display text-gold-light mb-1" style={{ fontSize: '13px', textShadow: '0 0 12px rgba(201,168,76,0.5)' }}>{cat.label}</div>
            <div className="font-body italic text-parchment" style={{ fontSize: '11.5px', opacity: 0.65, lineHeight: 1.4 }}>{descMap[cat.id] ?? ''}</div>
            <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.6 }}>{cat.quotes.length} sayings</span>
          </div>
          <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14, flexShrink: 0 }}>›</span>
        </div>
      </div>
    </motion.button>
  )
}

// ── CATEGORY LIST SCREEN ────────────────────────────────────
function CategoryListScreen({ cat, onBack, onRead }: { cat: Category; onBack: () => void; onRead: (index: number) => void }) {
  const isMother = cat.isDesertMothers
  return (
    <div className="flex flex-col h-full" style={{ background: cat.bgGradient }}>
      {/* Header */}
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Library
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span style={{ fontSize: 32 }}>{isMother ? <DesertRose size={36} /> : cat.icon}</span>
          <h2 className="font-display text-gold-light" style={{ fontSize: '18px', textShadow: '0 0 20px rgba(201,168,76,0.5)', lineHeight: 1.2 }}>{cat.label}</h2>
        </div>
        <div className="flex items-center gap-2 mt-3 mb-1 opacity-40">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
        </div>
      </div>

      {/* Quote list */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-3">
        {cat.quotes.map((q, i) => (
          <motion.button key={i} whileTap={{ scale: 0.985 }} onClick={() => onRead(i)}
            className="w-full text-left mb-3 p-4 rounded"
            style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(201,168,76,0.15)', backdropFilter: 'blur(4px)' }}>
            <p className="font-body italic text-ivory mb-2" style={{ fontSize: '13.5px', lineHeight: 1.65, opacity: 0.9 }}>"{q.text}"</p>
            <span className="font-heading uppercase text-gold" style={{ fontSize: '7.5px', letterSpacing: '0.3em', opacity: 0.65 }}>— {q.author}</span>
            {q.scripture && (
              <p className="font-body italic mt-2" style={{ fontSize: '10.5px', color: 'rgba(201,168,76,0.6)', lineHeight: 1.5 }}>{q.scripture}</p>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// ── READER SCREEN ───────────────────────────────────────────
function ReaderScreen({ cat, index, onBack }: { cat: Category; index: number; onBack: () => void }) {
  const [idx, setIdx] = useState(index)
  const [meditating, setMeditating] = useState(false)
  const [shared, setShared] = useState(false)
  const quote = cat.quotes[idx]
  const isMother = cat.isDesertMothers

  function handleShare() {
    const text = `"${quote.text}" — ${quote.author}\n\nPray with us at Theosis`
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
    <div className="flex flex-col h-full relative" style={{ background: cat.bgGradient }}>
      {/* Meditation overlay */}
      <AnimatePresence>
        {meditating && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center"
            style={{ background: 'rgba(5,5,15,0.92)', backdropFilter: 'blur(8px)' }}
            onClick={() => setMeditating(false)}>
            <div className="mb-6" style={{ animation: 'divineBreath 4s ease-in-out infinite' }}>
              {isMother ? <DesertRose size={64} /> : <span style={{ fontSize: 48 }}>{cat.icon}</span>}
            </div>
            <p className="font-body italic text-ivory mb-4" style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.9 }}>"{quote.text}"</p>
            <span className="font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.6 }}>— {quote.author}</span>
            <p className="font-heading uppercase text-gold mt-8" style={{ fontSize: '7px', letterSpacing: '0.35em', opacity: 0.4 }}>Tap to close</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ {cat.label}
        </button>
        <div className="flex items-center justify-between mb-3">
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.55 }}>{idx + 1} of {cat.quotes.length}</span>
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.55 }}>{cat.label}</span>
        </div>
        <div className="h-px mb-4 opacity-30" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>

      {/* Quote body */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
            {/* Drop cap */}
            <p className="font-body text-ivory mb-6" style={{ fontSize: '16px', lineHeight: 1.8, position: 'relative' }}>
              <span className="font-display text-gold float-left mr-2" style={{ fontSize: '64px', lineHeight: 0.8, marginTop: 6, textShadow: '0 0 24px rgba(201,168,76,0.6)' }}>
                {quote.text[0]}
              </span>
              <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{quote.text.slice(1)}</span>
            </p>

            {/* Author & source */}
            <div className="mt-4 mb-4 flex items-center gap-3 opacity-70">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
              <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.35em' }}>— {quote.author}</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
            </div>
            {quote.source && (
              <p className="font-body italic text-parchment text-center mb-3" style={{ fontSize: '11px', opacity: 0.5 }}>{quote.source}</p>
            )}
            {quote.scripture && (
              <div className="p-3 rounded mb-4" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="font-body italic text-gold-light text-center" style={{ fontSize: '12px', lineHeight: 1.6, opacity: 0.85 }}>{quote.scripture}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Actions */}
      <div className="flex-shrink-0 px-5 pb-6 pt-2 flex flex-col gap-3">
        {/* Pray through this */}
        <button onClick={() => setMeditating(true)}
          className="w-full py-3 rounded font-heading uppercase text-gold"
          style={{ fontSize: '9px', letterSpacing: '0.4em', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}>
          ✝ Pray Through This
        </button>

        {/* Nav + share */}
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
          <button disabled={idx === cat.quotes.length - 1} onClick={() => setIdx(i => i + 1)}
            className="flex-1 py-2 rounded font-heading uppercase text-gold"
            style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.2)', opacity: idx === cat.quotes.length - 1 ? 0.3 : 1 }}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  )
}

// ── MAIN EXPORT ─────────────────────────────────────────────
// ── DIDACHE SECTION LIST ─────────────────────────────────────
function DidacheListScreen({ onBack, onSection }: { onBack: () => void; onSection: (s: DidacheSection) => void }) {
  const partColors: Record<string, string> = {
    'Part I — The Two Ways': 'rgba(80,50,0,0.5)',
    'Part II — Instructions for Catechumens': 'rgba(26,35,126,0.45)',
  }
  return (
    <div className="flex flex-col h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(80,50,0,0.4) 0%, transparent 55%), linear-gradient(180deg,#0e0c06 0%,#080910 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ Library
        </button>
        <div className="flex items-center gap-3 mb-1">
          <span style={{ fontSize: 28 }}>📜</span>
          <div>
            <h2 className="font-display text-gold-light" style={{ fontSize: '18px', textShadow: '0 0 20px rgba(201,168,76,0.5)', lineHeight: 1.1 }}>The Didache</h2>
            <p className="font-body italic text-parchment" style={{ fontSize: '10px', opacity: 0.5 }}>Teaching of the Twelve Apostles · c. 1st century AD</p>
          </div>
        </div>
        <div className="h-px mt-3 mb-1 opacity-30" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-3">
        {DIDACHE_SECTIONS.map(section => (
          <motion.button key={section.id} whileTap={{ scale: 0.985 }} onClick={() => onSection(section)}
            className="w-full text-left mb-3 rounded overflow-hidden"
            style={{ border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            <div className="relative">
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${partColors[section.part] ?? 'rgba(50,40,0,0.5)'},rgba(5,5,12,0.95))` }} />
              <div className="relative z-10 flex items-center gap-3 p-4">
                <span style={{ fontSize: 24, flexShrink: 0, width: 36, textAlign: 'center' }}>{section.icon}</span>
                <div className="flex-1">
                  <span className="font-heading uppercase text-gold block mb-1" style={{ fontSize: '6.5px', letterSpacing: '0.4em', opacity: 0.55 }}>{section.part}</span>
                  <div className="font-display text-gold-light" style={{ fontSize: '13px', textShadow: '0 0 10px rgba(201,168,76,0.4)' }}>{section.title}</div>
                  {section.intro && <p className="font-body italic text-parchment mt-1" style={{ fontSize: '10.5px', opacity: 0.55, lineHeight: 1.4 }}>"{section.intro.slice(0, 80)}…"</p>}
                  <span className="font-heading uppercase text-gold mt-1 block" style={{ fontSize: '6.5px', letterSpacing: '0.3em', opacity: 0.5 }}>{section.passages.length} passages</span>
                </div>
                <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: 14, flexShrink: 0 }}>›</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// ── DIDACHE PASSAGE READER ────────────────────────────────────
function DidacheReaderScreen({ section, onBack }: { section: DidacheSection; onBack: () => void }) {
  const [idx, setIdx] = useState(0)
  const [shared, setShared] = useState(false)
  const p: DidachePassage = section.passages[idx]

  function handleShare() {
    const text = `"${p.text}" — The Didache, ${section.title}\n\nFrom Theosis`
    if (navigator.share) navigator.share({ text }).catch(() => {})
    else navigator.clipboard.writeText(text).then(() => { setShared(true); setTimeout(() => setShared(false), 2000) })
  }

  return (
    <div className="flex flex-col h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(80,50,0,0.45) 0%, transparent 55%), linear-gradient(180deg,#0e0c06 0%,#060708 100%)' }}>
      <div className="flex-shrink-0 pt-12 px-5 pb-0">
        <button onClick={onBack} className="flex items-center gap-2 mb-3 font-heading uppercase text-gold" style={{ fontSize: '8px', letterSpacing: '0.4em', opacity: 0.75, background: 'none', border: 'none', cursor: 'pointer' }}>
          ‹ {section.title}
        </button>
        <div className="flex justify-between mb-2">
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.5 }}>{idx + 1} of {section.passages.length}</span>
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em', opacity: 0.5 }}>The Didache</span>
        </div>
        <div className="h-px mb-3 opacity-25" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-4">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {p.heading && (
              <span className="font-heading uppercase text-gold block mb-3" style={{ fontSize: '8px', letterSpacing: '0.45em', opacity: 0.7 }}>{p.heading}</span>
            )}
            <p className="font-body text-ivory mb-5" style={{ fontSize: '15.5px', lineHeight: 1.85 }}>
              <span className="font-display text-gold float-left mr-2" style={{ fontSize: '60px', lineHeight: 0.82, marginTop: 6, textShadow: '0 0 24px rgba(201,168,76,0.7)' }}>
                {p.text[0]}
              </span>
              <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{p.text.slice(1)}</span>
            </p>
            <div className="flex items-center gap-3 mt-2 mb-3 opacity-60">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.4),transparent)' }} />
              <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.35em' }}>{section.title}</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.4))' }} />
            </div>
            {p.scripture && (
              <div className="p-3 rounded" style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.18)' }}>
                <p className="font-body italic text-gold-light text-center" style={{ fontSize: '11px', lineHeight: 1.6, opacity: 0.8 }}>{p.scripture}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0 px-5 pb-6 pt-2 flex gap-3">
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
        <button disabled={idx === section.passages.length - 1} onClick={() => setIdx(i => i + 1)}
          className="flex-1 py-2 rounded font-heading uppercase text-gold"
          style={{ fontSize: '8px', letterSpacing: '0.3em', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.2)', opacity: idx === section.passages.length - 1 ? 0.3 : 1 }}>
          Next ›
        </button>
      </div>
    </div>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────
export default function FathersScreen() {
  const [view, setView] = useState<View>('library')
  const [selectedCat, setSelectedCat] = useState<Category | null>(null)
  const [readerIndex, setReaderIndex] = useState(0)
  const [selectedDidache, setSelectedDidache] = useState<DidacheSection | null>(null)

  function openCategory(cat: Category) {
    setSelectedCat(cat)
    setView('category')
  }

  function openReader(index: number) {
    setReaderIndex(index)
    setView('reader')
  }

  return (
    <div className="h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'library' && (
          <motion.div key="library" className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <LibraryScreen onSelect={openCategory} onDidache={() => setView('didache-list')} />
          </motion.div>
        )}
        {view === 'category' && selectedCat && (
          <motion.div key="category" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <CategoryListScreen cat={selectedCat} onBack={() => setView('library')} onRead={openReader} />
          </motion.div>
        )}
        {view === 'reader' && selectedCat && (
          <motion.div key="reader" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <ReaderScreen cat={selectedCat} index={readerIndex} onBack={() => setView('category')} />
          </motion.div>
        )}
        {view === 'didache-list' && (
          <motion.div key="didache-list" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <DidacheListScreen onBack={() => setView('library')} onSection={(s) => { setSelectedDidache(s); setView('didache-reader') }} />
          </motion.div>
        )}
        {view === 'didache-reader' && selectedDidache && (
          <motion.div key="didache-reader" className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <DidacheReaderScreen section={selectedDidache} onBack={() => setView('didache-list')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
