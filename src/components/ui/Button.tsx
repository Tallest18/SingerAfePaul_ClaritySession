import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'navy' | 'outline' | 'ghost-light' | 'light'

const styles: Record<Variant, string> = {
  primary: 'bg-ember-600 text-white hover:bg-ember-700 shadow-[0_10px_30px_-12px_rgba(194,84,10,0.7)]',
  navy: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'border border-ink/80 text-ink hover:bg-ink hover:text-white',
  'ghost-light': 'border border-white/30 text-white hover:bg-white hover:text-navy-950',
  light: 'bg-white text-navy-950 hover:bg-ember-100',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode | false
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

/** Pill button that renders as a router Link, an external anchor or a button. */
export function Button({ children, variant = 'primary', className, icon, to, href, onClick, type = 'button' }: ButtonProps) {
  const cls = cn(
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-medium tracking-wide transition-all duration-300',
    styles[variant],
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      {icon !== false && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon ?? <ArrowUpRight className="size-4" />}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  )
}
