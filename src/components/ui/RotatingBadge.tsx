import type { ReactNode } from 'react'
import { useId } from 'react'
import { cn } from '../../lib/utils'

/** Circular badge with text running around a slowly spinning ring. */
export function RotatingBadge({ text, children, className }: { text: string; children?: ReactNode; className?: string }) {
  const id = useId()
  return (
    <div className={cn('relative flex size-32 items-center justify-center rounded-full', className)}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow" aria-hidden>
        <defs>
          <path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        {/* textLength stretches the text to exactly one lap of the circle (2π × 46 ≈ 289) */}
        <text className="fill-current text-[9.5px] font-medium uppercase">
          <textPath href={`#${id}`} textLength="287" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  )
}
