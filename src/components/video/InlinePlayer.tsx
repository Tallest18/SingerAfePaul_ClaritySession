import { Pause, Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import type { FeaturedRelease } from '../../data/site'
import { cn } from '../../lib/utils'

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

/** Animated equaliser bars. */
function Bars({ active }: { active: boolean }) {
  return (
    <span className="flex h-5 items-end gap-[3px]" aria-hidden>
      {[0.6, 1, 0.45, 0.8].map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-ember-500"
          animate={
            active
              ? { height: [`${h * 18}px`, `${(1 - h) * 18 + 4}px`, `${h * 18}px`] }
              : { height: `${h * 8 + 3}px` }
          }
          transition={active ? { duration: 0.9 + i * 0.15, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
        />
      ))}
    </span>
  )
}

/**
 * Player that works right where it sits — no pop-up, no new page.
 * - With `release.audioSrc`: a compact audio player (play/pause, seek, time).
 * - Without it: expands in place into a small YouTube player.
 */
export function InlinePlayer({ release, className }: { release: FeaturedRelease; className?: string }) {
  return release.audioSrc ? (
    <AudioPlayer release={release} className={className} />
  ) : (
    <InlineYouTube release={release} className={className} />
  )
}

const shell =
  'rounded-2xl border border-white/60 bg-white/95 text-left shadow-[0_24px_50px_-24px_rgba(11,23,54,0.5)] backdrop-blur-xl'

function AudioPlayer({ release, className }: { release: FeaturedRelease; className?: string }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused) void a.play()
    else a.pause()
  }

  return (
    <div className={cn(shell, 'w-[min(21rem,calc(100vw-3rem))] p-3', !playing && 'animate-float', className)}>
      <audio
        ref={audio}
        src={release.audioSrc}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${release.title}` : `Play ${release.title}`}
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-ember-600 text-white transition-transform hover:scale-105"
        >
          {playing ? <Pause className="size-5 fill-current" /> : <Play className="size-5 translate-x-[1px] fill-current" />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="eyebrow !text-[0.6rem] text-ember-600">
            {release.label} · {release.year}
          </p>
          <p className="truncate text-[1.02rem] leading-tight font-bold text-ink">{release.title}</p>
          {release.credit && <p className="truncate text-[0.78rem] text-muted">{release.credit}</p>}
        </div>
        <Bars active={playing} />
      </div>
      <div className="mt-3 flex items-center gap-2.5 text-[0.7rem] font-medium text-muted tabular-nums">
        <span>{fmt(time)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={time}
          onChange={(e) => {
            const a = audio.current
            if (a) a.currentTime = Number(e.target.value)
          }}
          aria-label="Seek"
          className="h-1 flex-1 cursor-pointer accent-ember-600"
        />
        <span>{fmt(duration)}</span>
      </div>
    </div>
  )
}

function InlineYouTube({ release, className }: { release: FeaturedRelease; className?: string }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  return (
    <motion.div
      layout
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
      className={cn(shell, open ? 'w-[min(22rem,calc(100vw-3rem))] p-3' : 'animate-float p-3 pr-5', className)}
    >
      <div className="flex items-center gap-3.5">
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Play ${release.title}`}
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-ember-600 text-white transition-transform hover:scale-105"
          >
            <Play className="size-5 translate-x-[1px] fill-current" />
          </button>
        )}
        <motion.div layout="position" className="min-w-0 flex-1">
          <p className="eyebrow !text-[0.6rem] text-ember-600">
            {open ? 'Now playing' : `${release.label} · ${release.year}`}
          </p>
          <p className="truncate text-[1.02rem] leading-tight font-bold text-ink">{release.title}</p>
          {release.credit && <p className="truncate text-[0.78rem] text-muted">{release.credit}</p>}
        </motion.div>
        {open ? (
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close player"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <X className="size-4" />
          </button>
        ) : (
          <span className="hidden sm:block">
            <Bars active />
          </span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                className="size-full"
                src={`https://www.youtube-nocookie.com/embed/${release.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={`${release.title} — ${release.credit ?? ''}`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
