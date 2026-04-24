'use client'
import { useReveal } from '@/hooks/useReveal'

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useReveal(delay)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}