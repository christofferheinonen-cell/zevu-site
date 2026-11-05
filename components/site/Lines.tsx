import type { ElementType, ReactNode } from 'react'

/** Headline whose lines slide up from a mask when revealed. */
export default function Lines({
  as: Tag = 'h2',
  lines,
  className = '',
  delay = 0,
  id,
}: {
  as?: ElementType
  lines: ReactNode[]
  className?: string
  delay?: number
  id?: string
}) {
  return (
    <Tag id={id} className={`zv-lines ${className}`} style={{ ['--d' as string]: delay }}>
      {lines.map((line, i) => (
        <span key={i} style={{ ['--i' as string]: i }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  )
}
