import { ArrowRight, ArrowUpRight, ChevronDown, Menu } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { shades } from '../../data/site'
import { cn } from '../../lib/utils'
import { Wordmark } from '../ui/Wordmark'
import { MobileMenu } from './MobileMenu'

const navItem =
  'relative flex h-full items-center px-1 text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-ink'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [shadesOpen, setShadesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const closeTimer = useRef<number | undefined>(undefined)

  // hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 12)
    setHidden(y > 400 && y > prev && !shadesOpen)
  })

  // close menus when the route changes (state reset during render, per React docs)
  const [navKey, setNavKey] = useState(location.key)
  if (navKey !== location.key) {
    setNavKey(location.key)
    setShadesOpen(false)
    setMobileOpen(false)
  }

  const openShades = () => {
    window.clearTimeout(closeTimer.current)
    setShadesOpen(true)
  }
  const closeShadesSoon = () => {
    closeTimer.current = window.setTimeout(() => setShadesOpen(false), 140)
  }

  const shadeActive = shades.some((s) => location.pathname.startsWith(s.to))

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500',
          scrolled
            ? 'border-line bg-white/85 shadow-[0_10px_40px_-30px_rgba(11,23,54,0.6)] backdrop-blur-xl'
            : 'border-transparent bg-white',
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Wordmark />

          <nav aria-label="Main" className="hidden h-full items-stretch gap-8 lg:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) => cn(navItem, isActive && !location.hash && 'text-ink')}
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && !location.hash && <ActiveBar />}
                </>
              )}
            </NavLink>

            <Link to="/#narrative" className={navItem}>
              The Brand
            </Link>

            {/* Other Shades mega menu */}
            <div className="relative flex h-full items-stretch" onMouseEnter={openShades} onMouseLeave={closeShadesSoon}>
              <button
                type="button"
                className={cn(navItem, 'gap-1.5', (shadesOpen || shadeActive) && 'text-ink')}
                aria-expanded={shadesOpen}
                aria-controls="shades-menu"
                onClick={() => setShadesOpen((o) => !o)}
              >
                Other Shades
                <ChevronDown className={cn('size-3.5 transition-transform duration-300', shadesOpen && 'rotate-180')} />
                {shadeActive && <ActiveBar />}
              </button>

              <AnimatePresence>
                {shadesOpen && (
                  <motion.div
                    id="shades-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
                    className="absolute top-full left-1/2 w-[44rem] -translate-x-1/2 pt-px"
                  >
                    <div className="grid grid-cols-5 overflow-hidden rounded-b-2xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(11,23,54,0.45)]">
                      <div className="grain col-span-2 flex flex-col justify-between bg-navy-950 p-7 text-white">
                        <div>
                          <p className="eyebrow text-ember-300">Featured</p>
                          <p className="mt-3 font-serif text-[1.45rem] leading-snug">
                            Need clarity? Book a <em className="text-ember-300">Personal Clarity Session.</em>
                          </p>
                        </div>
                        <Link
                          to="/clarity-talks"
                          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember-300 hover:text-ember-200"
                        >
                          See the plans
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                      <ul className="col-span-3 divide-y divide-line p-2">
                        {shades.map((s) => (
                          <li key={s.to}>
                            <Link
                              to={s.to}
                              className="group flex items-start gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-cream"
                            >
                              <s.icon className="mt-1 size-[1.1rem] shrink-0 text-ember-600" />
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-2 text-[0.95rem] font-medium text-ink">
                                  {s.short}
                                  <ArrowUpRight className="size-4 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-600" />
                                </span>
                                <span className="mt-0.5 block text-[0.82rem] leading-snug text-muted">{s.blurb}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/#needs" className={navItem}>
              I need…
            </Link>

            <NavLink to="/contact" className={({ isActive }) => cn(navItem, isActive && 'text-ink')}>
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && <ActiveBar />}
                </>
              )}
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/clarity-talks"
              className="group hidden items-center gap-2 rounded-full bg-navy-950 py-2.5 pr-2.5 pl-5 text-[0.9rem] font-medium text-white transition-colors hover:bg-ember-600 sm:inline-flex"
            >
              Book a session
              <span className="flex size-7 items-center justify-center rounded-full bg-ember-600 transition-colors group-hover:bg-white group-hover:text-ember-600">
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

function ActiveBar() {
  return (
    <motion.span
      layoutId="nav-active"
      className="absolute inset-x-0 -bottom-px h-[2px] bg-ember-600"
      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
    />
  )
}
