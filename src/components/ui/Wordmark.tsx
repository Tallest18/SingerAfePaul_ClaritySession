import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

/** "Singer Afe Paul" typographic logo with an SAP monogram seal. */
export function Wordmark({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <Link to="/" className={cn('group flex items-center gap-3', className)} aria-label="Singer Afe Paul — home">
      <span
        className={cn(
          'relative flex size-11 shrink-0 items-center justify-center rounded-full font-serif text-[0.9rem] tracking-[0.04em] transition-transform duration-500 group-hover:rotate-[8deg]',
          light ? 'bg-white text-navy-950' : 'bg-navy-950 text-white',
        )}
      >
        <span className="absolute inset-[3px] rounded-full border border-ember-400/70" />
        S<span className="text-ember-400">A</span>P
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-[1.2rem] font-medium tracking-[-0.01em] sm:text-[1.3rem]',
            light ? 'text-white' : 'text-ink',
          )}
        >
          Singer Afe <span className="text-ember-600 italic">Paul</span>
        </span>
        <span className={cn('eyebrow mt-1 !text-[0.58rem]', light ? 'text-white/55' : 'text-muted')}>
          A one-stop junction for music
        </span>
      </span>
    </Link>
  )
}
