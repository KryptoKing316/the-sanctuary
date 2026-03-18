import React, { useState } from 'react'
import { PrayerRequest, CATEGORY_META } from '../../data/prayers'

const CARD_THEMES: Record<string, string> = {
  'theme-war':         'linear-gradient(135deg,rgba(127,0,0,0.55) 0%,rgba(40,10,10,0.9) 60%,rgba(20,10,30,0.95) 100%)',
  'theme-trafficking': 'linear-gradient(135deg,rgba(74,0,114,0.55) 0%,rgba(20,10,40,0.9) 60%,rgba(10,10,25,0.95) 100%)',
  'theme-widows':      'linear-gradient(135deg,rgba(26,35,126,0.6) 0%,rgba(10,15,50,0.9) 60%,rgba(10,10,25,0.95) 100%)',
  'theme-sick':        'linear-gradient(135deg,rgba(0,105,92,0.5) 0%,rgba(10,30,28,0.9) 60%,rgba(10,10,25,0.95) 100%)',
  'theme-lost':        'linear-gradient(135deg,rgba(27,42,27,0.7) 0%,rgba(10,20,15,0.9) 60%,rgba(10,10,25,0.95) 100%)',
  'theme-persecuted':  'linear-gradient(135deg,rgba(100,70,0,0.55) 0%,rgba(30,20,5,0.9) 60%,rgba(10,10,25,0.95) 100%)',
}

interface Props {
  prayer: PrayerRequest
  onPray: (id: string) => void
}

export default function PrayerCard({ prayer, onPray }: Props) {
  const [prayed, setPrayed] = useState(false)
  const meta = CATEGORY_META[prayer.category]
  const bg = CARD_THEMES[meta.theme]
  const bodyWords = prayer.body.split(' ')
  const firstWord = bodyWords[0]
  const restOfBody = bodyWords.slice(1).join(' ')

  function handlePray(e: React.MouseEvent) {
    e.stopPropagation()
    if (prayed) return
    setPrayed(true)
    onPray(prayer.id)
    setTimeout(() => setPrayed(false), 1500)
  }

  return (
    <div className="relative rounded-[4px] overflow-hidden cursor-pointer"
      style={{
        boxShadow: '0 2px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.2)',
      }}>
      {/* Background */}
      <div className="absolute inset-0" style={{ background: bg }} />
      {/* Lead-line border */}
      <div className="absolute inset-0 rounded-[4px] pointer-events-none z-10"
        style={{ border: '2px solid rgba(201,168,76,0.15)' }} />
      {/* Diagonal light ray */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'linear-gradient(115deg,transparent 0%,rgba(255,255,255,0.03) 40%,rgba(255,255,255,0.07) 50%,transparent 60%)' }} />

      {/* Content */}
      <div className="relative z-[2] p-4">
        {/* Category */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] shrink-0"
            style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(0,0,0,0.35)' }}>
            {meta.icon}
          </div>
          <span className="font-heading text-gold uppercase"
            style={{ fontSize: '7.5px', letterSpacing: '0.4em', opacity: 0.85 }}>
            {meta.label}
          </span>
        </div>

        {/* Prayer body — drop cap on first letter */}
        <p className="font-body text-ivory mb-2.5"
          style={{ fontSize: '14.5px', lineHeight: '1.55', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
          <span className="font-display text-gold-light float-left leading-[0.75] mr-1 mt-1"
            style={{ fontSize: '2.8em', textShadow: '0 0 12px rgba(201,168,76,0.7)' }}>
            {firstWord[0]}
          </span>
          {firstWord.slice(1)}{' '}{restOfBody}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="font-heading text-parchment uppercase"
            style={{ fontSize: '7px', letterSpacing: '0.3em', opacity: 0.5 }}>
            {prayer.isAnonymous ? 'Anonymous' : prayer.author} · {prayer.createdAt}
          </span>
          <button
            onClick={handlePray}
            disabled={prayed}
            className="flex items-center gap-1.5 rounded-[2px] font-heading uppercase font-bold cursor-pointer"
            style={{
              padding: '7px 14px',
              fontSize: '8px',
              letterSpacing: '0.35em',
              color: '#0a0b12',
              background: 'linear-gradient(135deg,#8a6c20,#c9a84c,#8a6c20)',
              boxShadow: '0 2px 8px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              opacity: prayed ? 0.7 : 1,
              transition: 'opacity 0.2s',
            }}>
            ✝ Pray
            <span style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '10px', padding: '1px 5px', fontSize: '7px' }}>
              {(prayer.prayCount).toLocaleString()}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
