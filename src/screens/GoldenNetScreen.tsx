import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  { src: '/golden-net-1.jpg', alt: 'The Golden Net — divine light over the earth' },
  { src: '/golden-net-2.jpg', alt: 'The Golden Net — heavenly armies in prayer' },
  { src: '/golden-net-3.jpg', alt: 'The Golden Net — Lion of Judah and the Word' },
]

// Animated golden node on the "world map"
function PrayerNode({ x, y, delay, size = 4 }: { x: number; y: number; delay: number; size?: number }) {
  return (
    <motion.circle
      cx={x} cy={y} r={size}
      fill="rgba(201,168,76,0.9)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0.7, 1], scale: [0, 1.4, 1] }}
      transition={{ delay, duration: 1.2, repeat: Infinity, repeatDelay: 3 + delay }}
    />
  )
}

function PrayerLine({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="rgba(201,168,76,0.35)"
      strokeWidth="0.8"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.4, 0] }}
      transition={{ delay, duration: 2.5, repeat: Infinity, repeatDelay: 2 + delay * 0.5 }}
    />
  )
}

// Simple animated cross of light
function LightCross() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.8))' }}>
      <defs>
        <radialGradient id="lglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,240,180,1)" />
          <stop offset="40%" stopColor="rgba(232,201,107,0.9)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
        <radialGradient id="lglow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,220,0.3)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </radialGradient>
      </defs>
      {/* Outer glow orb */}
      <circle cx="60" cy="60" r="55" fill="url(#lglow2)" />
      {/* Rays */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
        <motion.line key={i}
          x1="60" y1="60"
          x2={60 + Math.cos(angle * Math.PI / 180) * 52}
          y2={60 + Math.sin(angle * Math.PI / 180) * 52}
          stroke="rgba(232,201,107,0.25)"
          strokeWidth="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ delay: i * 0.08, duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
      {/* Cross vertical */}
      <rect x="55" y="18" width="10" height="84" rx="3" fill="url(#lglow)" />
      {/* Cross horizontal */}
      <rect x="22" y="44" width="76" height="10" rx="3" fill="url(#lglow)" />
      {/* Center jewel */}
      <circle cx="60" cy="49" r="7" fill="rgba(255,250,230,0.95)" />
      <motion.circle cx="60" cy="49" r="12" fill="none" stroke="rgba(232,201,107,0.4)" strokeWidth="1"
        animate={{ r: [12, 18, 12], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }} />
    </svg>
  )
}

// Prayer network SVG map
function PrayerNetworkMap() {
  const nodes = [
    { x: 80,  y: 80  }, // North America NW
    { x: 130, y: 100 }, // North America NE
    { x: 100, y: 130 }, // North America SW
    { x: 155, y: 140 }, // Caribbean
    { x: 180, y: 160 }, // South America N
    { x: 160, y: 200 }, // South America S
    { x: 220, y: 90  }, // Europe W
    { x: 250, y: 80  }, // Europe N
    { x: 235, y: 120 }, // Europe S / N Africa
    { x: 260, y: 140 }, // Middle East
    { x: 280, y: 110 }, // Russia W
    { x: 310, y: 90  }, // Russia E
    { x: 230, y: 160 }, // Africa W
    { x: 265, y: 175 }, // Africa E
    { x: 255, y: 200 }, // Africa S
    { x: 310, y: 130 }, // Central Asia
    { x: 340, y: 120 }, // India
    { x: 370, y: 110 }, // SE Asia N
    { x: 380, y: 140 }, // SE Asia S
    { x: 400, y: 100 }, // East Asia
    { x: 420, y: 130 }, // Japan/Korea
    { x: 410, y: 175 }, // Australia N
    { x: 400, y: 200 }, // Australia S
  ]

  const lines = [
    [0,1],[0,2],[1,3],[2,3],[3,4],[4,5],[4,6],[6,7],[6,8],[7,9],[8,9],[8,12],
    [9,13],[10,11],[10,9],[11,16],[12,13],[12,14],[13,15],[15,16],[16,17],
    [17,18],[17,19],[19,20],[20,21],[21,22],[18,21],
  ]

  return (
    <svg viewBox="0 0 500 240" width="100%" style={{ opacity: 0.85 }}>
      {/* Lines first */}
      {lines.map(([a, b], i) => (
        <PrayerLine key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} delay={i * 0.15} />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <PrayerNode key={i} x={n.x} y={n.y} delay={i * 0.2} size={i % 4 === 0 ? 5 : 3.5} />
      ))}
      {/* Pulse rings on major nodes */}
      {[0, 6, 12, 16, 19].map(i => (
        <motion.circle key={i} cx={nodes[i].x} cy={nodes[i].y} r={10} fill="none"
          stroke="rgba(201,168,76,0.5)" strokeWidth="0.8"
          animate={{ r: [8, 16, 8], opacity: [0.5, 0, 0.5] }}
          transition={{ delay: i * 0.3, duration: 3, repeat: Infinity }} />
      ))}
    </svg>
  )
}

// Image carousel
function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % IMAGES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded" style={{ height: 200, border: '1px solid rgba(201,168,76,0.3)' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={IMAGES[current].src}
          alt={IMAGES[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      {/* Gold overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(14,10,2,0.65) 100%)' }} />
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{ width: i === current ? 16 : 6, height: 6, background: i === current ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.3)', border: 'none', cursor: 'pointer', padding: 0 }} />
        ))}
      </div>
    </div>
  )
}

export default function GoldenNetScreen() {
  const [praying, setPraying] = useState(false)

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24"
      style={{ background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(120,80,0,0.5) 0%, transparent 55%), linear-gradient(180deg,#0e0b04 0%,#080910 100%)' }}>

      {/* Hero */}
      <div className="text-center pt-12 px-6 pb-2">
        <div className="mx-auto mb-4 flex justify-center" style={{ animation: 'divineBreath 4s ease-in-out infinite' }}>
          <LightCross />
        </div>
        <span className="block font-heading uppercase text-gold mb-2" style={{ fontSize: '8px', letterSpacing: '0.55em', opacity: 0.7 }}>
          Global Intercession Network
        </span>
        <h1 className="font-display text-gold-light mb-2" style={{ fontSize: '26px', fontWeight: 900, textShadow: '0 0 30px rgba(201,168,76,0.8),0 0 60px rgba(160,100,0,0.5)', lineHeight: 1.1 }}>
          The Golden Net
        </h1>
        <p className="font-body italic text-parchment mb-1" style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.6, maxWidth: 290, margin: '0 auto 6px' }}>
          A golden triangulation of prayer covering the earth — every intercession a thread in the net of God.
        </p>
        <p className="font-body italic text-parchment mb-4" style={{ fontSize: '11px', opacity: 0.45, lineHeight: 1.5, maxWidth: 270, margin: '0 auto 16px' }}>
          "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven." — Matthew 18:19
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 mx-4 mb-5 opacity-35">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.8))' }} />
          <span className="text-gold font-heading text-xs">✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.8),transparent)' }} />
        </div>
      </div>

      {/* Image carousel */}
      <div className="px-4 mb-5">
        <ImageCarousel />
      </div>

      {/* Prayer network map */}
      <div className="px-4 mb-4">
        <span className="block font-heading uppercase text-gold mb-3" style={{ fontSize: '7px', letterSpacing: '0.5em', opacity: 0.6, textAlign: 'center' }}>
          Live Prayer Network · {(2847391 + Math.floor(Date.now() / 800)).toLocaleString()} prayers offered
        </span>
        <div className="rounded overflow-hidden p-2" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <PrayerNetworkMap />
        </div>
        <p className="font-body italic text-parchment mt-2 text-center" style={{ fontSize: '10px', opacity: 0.4 }}>
          Each node — a community of intercessors. Each line — a prayer agreed in heaven.
        </p>
      </div>

      {/* What is the Golden Net */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded" style={{ background: 'rgba(120,80,0,0.15)', border: '1px solid rgba(201,168,76,0.25)' }}>
          <span className="block font-heading uppercase text-gold mb-3" style={{ fontSize: '7.5px', letterSpacing: '0.45em', opacity: 0.75 }}>What Is the Golden Net?</span>
          <p className="font-body italic text-parchment mb-3" style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.85 }}>
            The Golden Net is the vision behind Theosis — a worldwide intercession covering where every prayer becomes a golden thread binding the Body of Christ across nations, languages, and time zones.
          </p>
          <p className="font-body italic text-parchment" style={{ fontSize: '13px', lineHeight: 1.7, opacity: 0.75 }}>
            War zones, trafficking networks, persecuted churches, widows, orphans — every prayer offered here is a node in the net. Every agreement between two souls is a line of light that reaches heaven.
          </p>
        </div>
      </div>

      {/* The three pillars */}
      <div className="px-4 mb-4 flex flex-col gap-3">
        {[
          { icon: '⚡', title: 'Agreement', desc: 'When two or more agree, heaven moves. The net is strongest where believers pray together.' },
          { icon: '🌍', title: 'Unity', desc: '"...that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me." — John 17:21' },
          { icon: '👑', title: 'Authority', desc: 'Christ is King over every principality. The Golden Net is His dominion made visible in prayer.' },
        ].map(p => (
          <div key={p.icon} className="flex items-start gap-3 p-3 rounded" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{p.icon}</span>
            <div>
              <div className="font-display text-gold-light mb-1" style={{ fontSize: '12px' }}>{p.title}</div>
              <p className="font-body italic text-parchment" style={{ fontSize: '11.5px', opacity: 0.65, lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Join the net CTA */}
      <div className="px-4 mb-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setPraying(p => !p)}
          className="w-full py-4 rounded font-heading uppercase text-gold"
          style={{ fontSize: '10px', letterSpacing: '0.45em', background: praying ? 'rgba(201,168,76,0.2)' : 'rgba(120,80,0,0.25)', border: `1px solid rgba(201,168,76,${praying ? 0.6 : 0.4})`, boxShadow: praying ? '0 0 30px rgba(201,168,76,0.2)' : 'none', transition: 'all 0.3s' }}>
          {praying ? '✦ You Are In the Net ✦' : '+ Join the Net — Pray Now'}
        </motion.button>
        {praying && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="font-body italic text-gold text-center mt-3"
            style={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.6 }}>
            Your prayer joins millions of threads across the earth. The net holds. Christ is King.
          </motion.p>
        )}
      </div>

      {/* Coming phase 2 */}
      <div className="px-4 mt-3 mb-2">
        <div className="flex items-center gap-3 opacity-35">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.6))' }} />
          <span className="font-heading uppercase text-gold" style={{ fontSize: '7px', letterSpacing: '0.4em' }}>Coming in Phase 2</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(201,168,76,0.6),transparent)' }} />
        </div>
        <p className="font-body italic text-parchment text-center mt-2" style={{ fontSize: '11px', opacity: 0.35, lineHeight: 1.6 }}>
          Live world map · Real-time prayer hotspots · Intercession agreements · The net fills as the Body prays
        </p>
      </div>
    </div>
  )
}
