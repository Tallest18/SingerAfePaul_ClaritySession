import { Link } from 'react-router-dom'
import logo from '../../assets/img/brand-logo.webp'
import { cn } from '../../lib/utils'

type Props = {
  /** "header" for the top bar and mobile menu, "footer" for the larger footer version */
  size?: 'header' | 'footer'
  className?: string
}

/**
 * The SingerAfePaul logo exactly as designed — microphone and note above,
 * SINGERAFEPAUL below, swoosh underneath, original colours. It is never
 * rearranged or recoloured; on dark backgrounds it sits on a white panel.
 * (Clarity Talks has its own logo on its page.)
 */
export function Wordmark({ size = 'header', className }: Props) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex shrink-0 items-center', className)}
      aria-label="Singer Afe Paul — home"
    >
      <img
        src={logo}
        alt="SingerAfePaul"
        className={cn(
          'w-auto transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-[1.03]',
          size === 'footer' ? 'h-28 md:h-32' : 'h-16 lg:h-[5.25rem]',
        )}
      />
    </Link>
  )
}
