import { useLenis } from 'lenis/react'
import { MessageCircle } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { whatsappLink } from '../../lib/utils'
import { Footer } from './Footer'
import { Header } from './Header'
import { TopBar } from './TopBar'

/** Thin burnt-orange reading-progress bar pinned to the top of the viewport. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-ember-600" />
}

/** Scrolls to the top on page change, or to the #hash target when there is one. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useLayoutEffect(() => {
    if (hash) return
    lenis?.scrollTo(0, { immediate: true, force: true })
    window.scrollTo(0, 0)
  }, [pathname, hash, lenis])

  useEffect(() => {
    if (!hash) return
    // wait for the page transition to mount the target
    const t = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>(hash)
      if (!el) return
      if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.4 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }, 450)
    return () => window.clearTimeout(t)
  }, [pathname, hash, lenis])

  return null
}

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[90] rounded-full bg-navy-950 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollManager />
      <TopBar />
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* floating WhatsApp button */}
      <motion.a
        href={whatsappLink('Hello Singer Afe Paul, ')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Singer Afe Paul on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
        className="group fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-ember-600 p-4 text-white shadow-[0_16px_40px_-12px_rgba(194,84,10,0.8)] transition-colors hover:bg-ember-700 md:right-8 md:bottom-8"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ember-500/40 [animation-duration:2.6s]" />
        <MessageCircle className="size-5" />
        <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-[max-width] duration-500 group-hover:max-w-40">
          Let’s talk
        </span>
      </motion.a>
    </>
  )
}
