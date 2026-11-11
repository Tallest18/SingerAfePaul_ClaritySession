import { Play } from 'lucide-react'
import { ytThumb, type Video } from '../../data/site'
import { cn } from '../../lib/utils'
import { useVideoPlayer } from './context'

/** Thumbnail card that opens the video lightbox. */
export function VideoCard({ video, className, large = false }: { video: Video; className?: string; large?: boolean }) {
  const play = useVideoPlayer()
  return (
    <button
      type="button"
      onClick={() => play(video)}
      className={cn('group block w-full text-left', className)}
      aria-label={`Play ${video.title}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-navy-950">
        <img
          src={ytThumb(video.id)}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-editorial)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        <span
          className={cn(
            'absolute flex items-center justify-center rounded-full bg-white/95 text-navy-950 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-ember-600 group-hover:text-white',
            large ? 'bottom-6 left-6 size-16' : 'bottom-4 left-4 size-12',
          )}
        >
          <Play className={cn('translate-x-[1px] fill-current', large ? 'size-6' : 'size-4')} />
        </span>
        <span className="eyebrow absolute top-3 right-3 rounded-full bg-navy-950/70 px-3 py-1.5 !text-[0.6rem] text-white backdrop-blur">
          {video.tag}
        </span>
      </div>
      <div className="mt-4">
        <h3 className={cn('leading-snug font-normal transition-colors group-hover:text-ember-700', large ? 'text-2xl' : 'text-[1.25rem]')}>
          {video.title}
        </h3>
        {video.credit && <p className="mt-1 text-[0.9rem] text-muted">{video.credit}</p>}
      </div>
    </button>
  )
}
