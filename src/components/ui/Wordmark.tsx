import { Link } from 'react-router-dom'
import fullLight from '../../assets/img/logo-full-light.png'
import markLight from '../../assets/img/logo-mark-light.png'
import mark from '../../assets/img/logo-mark.png'
import { cn } from '../../lib/utils'

type Props = {
  /** dark artwork for light backgrounds, light artwork for navy backgrounds */
  tone?: 'dark' | 'light'
  /** "mark" = monogram + CTw/SAP, "full" = also includes the tagline */
  variant?: 'mark' | 'full'
  className?: string
}

/** The CTw/SAP brand logo, linking home. */
export function Wordmark({ tone = 'dark', variant = 'mark', className }: Props) {
  const src = variant === 'full' ? fullLight : tone === 'light' ? markLight : mark
  return (
    <Link
      to="/"
      className={cn('group inline-flex shrink-0 items-center', className)}
      aria-label="Singer Afe Paul — home"
    >
      <img
        src={src}
        alt="CTw/SAP — Clarity Talks with Singer Afe Paul"
        className={cn(
          'w-auto transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-[1.04]',
          variant === 'full' ? 'h-28 md:h-32' : 'h-12 sm:h-14 lg:h-16',
        )}
      />
    </Link>
  )
}
