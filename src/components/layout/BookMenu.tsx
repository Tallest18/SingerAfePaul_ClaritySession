import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { bookings } from '../../data/site'
import { cn, whatsappLink } from '../../lib/utils'
import { SmartLink } from '../ui/SmartLink'

/** Header "Book now" button with a dropdown of every bookable service. */
export function BookMenu() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const location = useLocation()

  // close when the route changes (state reset during render, per React docs)
  const [navKey, setNavKey] = useState(location.key)
  if (navKey !== location.key) {
    setNavKey(location.key)
    setOpen(false)
  }

  // close on outside click / Escape
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // A mouse opens the menu on hover; the click that usually follows must not
  // toggle it shut again, so remember that hover already opened it.
  const hoverOpened = useRef(false)
  const openNow = () => {
    window.clearTimeout(closeTimer.current)
    if (!open) hoverOpened.current = true
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => {
      hoverOpened.current = false
      setOpen(false)
    }, 160)
  }
  const onButtonClick = () => {
    if (hoverOpened.current) {
      hoverOpened.current = false
      setOpen(true)
      return
    }
    setOpen((o) => !o)
  }

  return (
    <div
      ref={wrapRef}
      className="relative hidden sm:block"
      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
    >
      <button
        type="button"
        onClick={onButtonClick}
        aria-expanded={open}
        aria-controls="book-menu"
        className={cn(
          'group inline-flex items-center gap-2 rounded-full py-2.5 pr-2.5 pl-5 text-[0.9rem] font-medium text-white transition-colors',
          open ? 'bg-ember-600' : 'bg-navy-950 hover:bg-ember-600',
        )}
      >
        Book now
        <span
          className={cn(
            'flex size-7 items-center justify-center rounded-full transition-colors',
            open ? 'bg-white text-ember-600' : 'bg-ember-600 group-hover:bg-white group-hover:text-ember-600',
          )}
        >
          <ChevronDown className={cn('size-3.5 transition-transform duration-300', open && 'rotate-180')} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="book-menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute top-full right-0 w-[23rem] pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(11,23,54,0.45)]">
              <div className="grain bg-navy-950 px-6 py-5 text-white">
                <p className="eyebrow text-ember-300">Book now</p>
                <p className="mt-1.5 font-serif text-[1.3rem] leading-snug">What would you like to book?</p>
              </div>

              <ul className="max-h-[60vh] overflow-y-auto p-2" data-lenis-prevent>
                {bookings.map((b) => (
                  <li key={b.id}>
                    <SmartLink
                      to={b.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-cream"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-colors group-hover:bg-ember-600 group-hover:text-white">
                        <b.icon className="size-[1.05rem]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.95rem] font-medium text-ink">{b.label}</span>
                        <span className="block text-[0.8rem] text-muted">{b.hint}</span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-600" />
                    </SmartLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-3 border-t border-line bg-cream px-5 py-3.5 text-[0.85rem]">
                <Link to="/contact#message-form" className="group inline-flex items-center gap-1.5 font-medium text-navy-800 hover:text-ember-700">
                  Something else?
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={whatsappLink('Hello Singer Afe Paul, I would like to book ')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-ember-700 hover:text-ember-800"
                >
                  <FaWhatsapp className="size-4" /> Quick WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
