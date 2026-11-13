import { Fragment } from 'react'
import { cn } from '../../lib/utils'

/** Infinite horizontal ticker. Content is duplicated so the loop is seamless. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="px-6 text-[1.4rem] font-semibold md:px-10 md:text-[1.8rem]">{item}</span>
          <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-ember-400" aria-hidden>
            <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </Fragment>
      ))}
    </div>
  )
  return (
    <div className={cn('fade-x group flex overflow-hidden', className)}>
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
