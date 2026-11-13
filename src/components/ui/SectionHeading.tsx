import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

type LabelProps = {
  children: ReactNode
  number?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

/**
 * Section label — "01 —— The Narrative". Every section uses this one
 * component, so the labels are the same size and style across the site.
 */
export function SectionLabel({ children, number, tone = 'light', align = 'left', className }: LabelProps) {
  const dark = tone === 'dark'
  return (
    <p
      className={cn(
        'section-label flex items-start gap-4',
        align === 'center' && 'justify-center',
        dark ? 'text-ember-300' : 'text-ember-600',
        className,
      )}
    >
      {number && <span className={cn('shrink-0', dark ? 'text-white/45' : 'text-navy-900/35')}>{number}</span>}
      {/* the rule sits on the first line's centre even when a long label wraps */}
      <span
        aria-hidden
        className={cn('mt-[0.62em] h-[2px] w-10 shrink-0 md:w-14', dark ? 'bg-ember-300/60' : 'bg-ember-500/60')}
      />
      <span>{children}</span>
    </p>
  )
}

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  number?: string
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'light', className, number }: Props) {
  const dark = tone === 'dark'
  return (
    <Reveal className={cn(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
      <SectionLabel number={number} tone={tone} align={align}>
        {eyebrow}
      </SectionLabel>
      <h2
        className={cn(
          'mt-6 text-[2.1rem] leading-[1.12] font-bold tracking-[-0.025em] md:text-[3rem]',
          dark && '!text-white',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn('mt-6 text-lg leading-relaxed md:text-xl', dark ? 'text-white/70' : 'text-muted')}>{intro}</p>
      )}
    </Reveal>
  )
}
