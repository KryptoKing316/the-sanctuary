import { useState, useEffect } from 'react'

export function usePrayerCounter(initial = 2_847_391) {
  const [count, setCount] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 4) + 1)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return { count, increment: () => setCount(c => c + 1) }
}

export function formatCount(n: number): string {
  return n.toLocaleString('en-US')
}
