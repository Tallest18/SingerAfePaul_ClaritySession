import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = { to: string; className?: string; children: ReactNode; onClick?: () => void }

/** Internal paths use the router; full URLs (e.g. the Google booking form) open in a new tab. */
export function SmartLink({ to, className, children, onClick }: Props) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
