import { useLenis } from 'lenis/react'
import { MessageCircle } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { whatsappLink } from '../../lib/utils'
import { Footer } from './Footer'
import { Header } from './Header'
import { PageErrorBoundary } from './PageErrorBoundary'
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
    // The target may not exist yet: the old page is still fading out and the new
    // page may be lazy-loading. Poll for it (up to ~4s), then scroll.
    let tries = 0
    let timer = 0
    const attempt = () => {
      const el = document.querySelector<HTMLElement>(hash)
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.2, force: true })
        else el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (++tries < 40) timer = window.setTimeout(attempt, 100)
    }
    timer = window.setTimeout(attempt, 120)
    return () => window.clearTimeout(timer)
  }, [pathname, hash, lenis])

  return null
}

export function Layout() {
  const location = useLocation()

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

      {/* New page fades in with a CSS animation — it never waits on the old page,
          so a stalled animation can't leave the screen empty. */}
      <main id="main" key={location.pathname} className="animate-page-in">
        <PageErrorBoundary>
          <Outlet />
        </PageErrorBoundary>
      </main>

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
