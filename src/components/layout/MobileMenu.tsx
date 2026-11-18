import { useLenis } from 'lenis/react'
import { ArrowUpRight, ChevronDown, Mail, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { bookings, contact, shades } from '../../data/site'
import { cn } from '../../lib/utils'
import { SmartLink } from '../ui/SmartLink'
import { SocialIcons } from '../ui/SocialIcons'
import { Wordmark } from '../ui/Wordmark'

const links = [
  { to: '/', label: 'Home' },
  { to: '/#narrative', label: 'The Brand' },
  { to: '/#needs', label: 'I need…' },
  { to: '/contact', label: 'Contact' },
]

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [shadesOpen, setShadesOpen] = useState(true)
  const lenis = useLenis()

  useEffect(() => {
    if (!open) return
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, lenis, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-white lg:hidden"
          data-lenis-prevent
        >
          <div className="container-x flex h-20 shrink-0 items-center justify-between border-b border-line">
            <Wordmark />
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            className="container-x flex-1 py-6"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}
          >
            {links.slice(0, 2).map((l) => (
              <MenuLink key={l.to} to={l.to} label={l.label} />
            ))}

            <motion.div variants={item} className="border-b border-line">
              <button
                type="button"
                onClick={() => setShadesOpen((o) => !o)}
                aria-expanded={shadesOpen}
                className="flex w-full items-center justify-between py-4 text-left font-serif text-[1.85rem] leading-tight text-ink"
              >
                Other Shades
                <ChevronDown className={cn('size-5 text-muted transition-transform', shadesOpen && 'rotate-180')} />
              </button>
              <AnimatePresence initial={false}>
                {shadesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-4 overflow-hidden border-l-2 border-ember-400 pl-4"
                  >
                    {shades.map((s) => (
                      <li key={s.to}>
                        <Link to={s.to} className="flex items-center gap-3 py-2.5 text-[1rem] text-body">
                          <s.icon className="size-4 text-ember-600" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {links.slice(2).map((l) => (
              <MenuLink key={l.to} to={l.to} label={l.label} />
            ))}
          </motion.nav>

          <div className="shrink-0 bg-cream">
            <div className="container-x py-7">
              <p className="eyebrow text-ember-600">Book now</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                {bookings.map((b) => (
                  <li key={b.id}>
                    <SmartLink
                      to={b.to}
                      className="flex h-full items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[0.92rem] leading-snug text-ink transition-colors active:bg-ember-50"
                    >
                      <b.icon className="size-4 shrink-0 text-ember-600" />
                      <span className="flex-1">{b.label}</span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-line-strong" />
                    </SmartLink>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-8 text-muted">Please reach out now</p>
              <div className="mt-4 flex flex-col gap-3 text-[1rem]">
                <a href={contact.phoneHref} className="flex items-center gap-3 text-ink">
                  <Phone className="size-4 text-ember-600" /> {contact.phoneDisplay}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-ink">
                  <Mail className="size-4 text-ember-600" /> {contact.email}
                </a>
              </div>
              <SocialIcons
                withWhatsapp
                className="mt-5"
                itemClassName="border-line-strong text-ink hover:bg-ink hover:text-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const } },
}

function MenuLink({ to, label }: { to: string; label: string }) {
  return (
    <motion.div variants={item} className="border-b border-line">
      <Link
        to={to}
        className="group flex items-center justify-between py-4 font-serif text-[1.85rem] leading-tight text-ink"
      >
        {label}
        <ArrowUpRight className="size-5 text-line-strong transition-colors group-hover:text-ember-600" />
      </Link>
    </motion.div>
  )
}
