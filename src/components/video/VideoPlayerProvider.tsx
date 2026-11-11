import { useLenis } from 'lenis/react'
import { ExternalLink, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ytWatch } from '../../data/site'
import { VideoPlayerContext, type PlayableVideo } from './context'

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<PlayableVideo | null>(null)
  const lenis = useLenis()
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)

  const play = useCallback((v: PlayableVideo) => {
    lastFocus.current = document.activeElement as HTMLElement
    setVideo(v)
  }, [])

  const close = useCallback(() => setVideo(null), [])

  useEffect(() => {
    if (!video) return
    lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      lastFocus.current?.focus()
    }
  }, [video, lenis, close])

  return (
    <VideoPlayerContext.Provider value={play}>
      {children}
      <AnimatePresence>
        {video && (
          <motion.div
            key="player"
            role="dialog"
            aria-modal="true"
            aria-label={`Playing ${video.title}`}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Close video"
              tabIndex={-1}
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-md"
              onClick={close}
            />
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="mb-4 flex items-end justify-between gap-4 text-white">
                <div className="min-w-0">
                  <p className="eyebrow text-ember-300">Now playing</p>
                  <p className="mt-1 truncate font-serif text-xl md:text-2xl">
                    {video.title}
                    {video.credit && <span className="text-white/50"> — {video.credit}</span>}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={ytWatch(video.id)}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm hover:bg-white hover:text-navy-950 sm:flex"
                  >
                    YouTube <ExternalLink className="size-3.5" />
                  </a>
                  <button
                    ref={closeRef}
                    onClick={close}
                    aria-label="Close video"
                    className="flex size-10 items-center justify-center rounded-full bg-white text-navy-950 transition-transform hover:rotate-90"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoPlayerContext.Provider>
  )
}
