import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  x: number; y: number
  size: number; alpha: number
  vx: number; vy: number
  life: number; decay: number
  wobble: number; wobbleSpeed: number
  color: string
}

export function useParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  const createParticle = (x: number, y: number): Particle => {
    const r = Math.random()
    return {
      x: x + (Math.random() - 0.5) * 30,
      y,
      size: Math.random() * 5 + 2,
      alpha: Math.random() * 0.7 + 0.3,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -(Math.random() * 2.5 + 1.5),
      life: 1,
      decay: Math.random() * 0.012 + 0.006,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.08 + 0.03,
      color: r < 0.5 ? 'rgba(201,168,76,' : r < 0.75 ? 'rgba(232,201,107,' : 'rgba(245,230,180,',
    }
  }

  const launch = useCallback((x: number, y: number, count = 40) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        particlesRef.current.push(createParticle(x, y))
      }, i * 25)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current = particlesRef.current.filter(p => p.life > 0)
      particlesRef.current.forEach(p => {
        p.wobble += p.wobbleSpeed
        p.x += p.vx + Math.sin(p.wobble) * 0.4
        p.y += p.vy
        p.vy *= 0.995
        p.size *= 0.992
        p.life -= p.decay
        const a = p.life * p.alpha
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        g.addColorStop(0, p.color + (a * 0.9) + ')')
        g.addColorStop(0.5, p.color + (a * 0.4) + ')')
        g.addColorStop(1, p.color + '0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Ambient incense
    const ambient = () => {
      const x = 80 + Math.random() * (window.innerWidth - 160)
      const y = window.innerHeight * 0.6 + Math.random() * 100
      particlesRef.current.push(...Array.from({ length: 15 }, () => createParticle(x, y)))
    }
    const ambientTimer = setInterval(ambient, 10000 + Math.random() * 6000)

    // Entrance burst
    setTimeout(() => launch(window.innerWidth / 2, window.innerHeight * 0.55, 60), 600)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
      clearInterval(ambientTimer)
    }
  }, [launch])

  return { canvasRef, launch }
}
