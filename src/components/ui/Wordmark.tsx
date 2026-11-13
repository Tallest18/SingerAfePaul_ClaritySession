import { Link } from 'react-router-dom'
import logoLight from '../../assets/img/brand-logo-light.webp'
import wordmarkLight from '../../assets/img/brand-wordmark-light.webp'
import wordmark from '../../assets/img/brand-wordmark.webp'
import { cn } from '../../lib/utils'

type Props = {
  /** dark artwork for light backgrounds, light artwork for navy backgrounds */
  tone?: 'dark' | 'light'
  /** "wordmark" = SINGERAFEPAUL lettering + swoosh (header), "full" = with the microphone (footer) */
  variant?: 'wordmark' | 'full'
  className?: string
}

/** The SingerAfePaul brand logo, linking home. (Clarity Talks has its own logo on its page.) */
export function Wordmark({ tone = 'dark', variant = 'wordmark', className }: Props) {
  const src = variant === 'full' ? logoLight : tone === 'light' ? wordmarkLight : wordmark
  return (
    <Link
      to="/"
      className={cn('group inline-flex shrink-0 items-center', className)}
      aria-label="Singer Afe Paul — home"
    >
      <img
        src={src}
        alt="SingerAfePaul"
        className={cn(
          'w-auto transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-[1.03]',
          variant === 'full' ? 'h-32 md:h-36' : 'h-9 sm:h-10 lg:h-11',
        )}
      />
    </Link>
  )
}
