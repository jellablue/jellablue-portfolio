'use client'
import { useReveal } from '@/hooks/useReveal'

export default function Reveal({
  children,
  className,
  delay = 0,
  repeat = false,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  repeat?: boolean
}) {
  const ref = useReveal(delay, repeat)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}