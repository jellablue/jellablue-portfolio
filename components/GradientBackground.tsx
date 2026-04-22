'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

// Gradient stops per scroll section
const GRADIENT_STAGES = [
  // Hero (blue → lavender)
  {
    from: 'rgb(188, 213, 245)',   // soft sky blue
    mid:  'rgb(220, 210, 240)',   // muted lavender
    to:   'rgb(210, 195, 240)',   // purple lavender
    angle: 135,
  },
  // About (cyan → periwinkle)
  {
    from: 'rgb(178, 235, 242)',   // light cyan
    mid:  'rgb(195, 210, 245)',   // cornflower
    to:   'rgb(185, 190, 235)',   // periwinkle
    angle: 120,
  },
  // Projects (peach → pink lavender)
  {
    from: 'rgb(255, 210, 190)',   // warm peach
    mid:  'rgb(245, 195, 215)',   // blush pink
    to:   'rgb(195, 205, 245)',   // blue lavender
    angle: 150,
  },
  // Contact (mint → soft blue)
  {
    from: 'rgb(190, 240, 225)',   // mint
    mid:  'rgb(200, 220, 245)',   // light blue
    to:   'rgb(210, 200, 240)',   // lavender
    angle: 110,
  },
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function lerpColor(colorA: string, colorB: string, t: number): string {
  // Parse rgb(r, g, b) strings
  const parse = (c: string) => c.match(/\d+/g)!.map(Number)
  const [r1, g1, b1] = parse(colorA)
  const [r2, g2, b2] = parse(colorB)
  return `rgb(${Math.round(lerp(r1, r2, t))}, ${Math.round(lerp(g1, g2, t))}, ${Math.round(lerp(b1, b2, t))})`
}

export default function GradientBackground() {
  const [gradient, setGradient] = useState(GRADIENT_STAGES[0])
  const rafRef = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollY / docHeight  // 0 to 1

        // Map progress to stage transitions
        const stageCount = GRADIENT_STAGES.length - 1
        const stageProgress = progress * stageCount
        const stageIndex = Math.min(Math.floor(stageProgress), stageCount - 1)
        const stageFraction = stageProgress - stageIndex

        const current = GRADIENT_STAGES[stageIndex]
        const next = GRADIENT_STAGES[stageIndex + 1] ?? current

        setGradient({
          from:  lerpColor(current.from,  next.from,  stageFraction),
          mid:   lerpColor(current.mid,   next.mid,   stageFraction),
          to:    lerpColor(current.to,    next.to,    stageFraction),
          angle: lerp(current.angle, next.angle, stageFraction),
        })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 transition-none"
      style={{
        background: `linear-gradient(${gradient.angle}deg, ${gradient.from} 0%, ${gradient.mid} 50%, ${gradient.to} 100%)`,
        transition: 'background 0.15s ease-out',
      }}
    />
  )
}