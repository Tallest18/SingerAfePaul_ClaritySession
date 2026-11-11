import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

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
      <p
        className={cn(
          'eyebrow flex items-center gap-3',
          align === 'center' && 'justify-center',
          dark ? 'text-ember-300' : 'text-ember-600',
        )}
      >
        {number && <span className={cn('font-serif text-sm tracking-normal', dark ? 'text-white/50' : 'text-muted')}>{number}</span>}
        <span className={cn('h-px w-8', dark ? 'bg-ember-300/60' : 'bg-ember-500/60')} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 text-[2.3rem] leading-[1.06] font-normal tracking-[-0.025em] md:text-[3.4rem]',
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
