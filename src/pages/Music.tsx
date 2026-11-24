import { Disc3, ListMusic, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useVideoPlayer } from '../components/video/context'
import { VideoCard } from '../components/video/VideoCard'
import { album, featuredRelease, videos, youtubeChannel, ytThumb, type Video } from '../data/site'
import { cn, whatsappLink } from '../lib/utils'

const filters = ['All', 'Original', 'Lord of Christmas', '#oldskool', 'Covers & more'] as const
type Filter = (typeof filters)[number]

const stackIds = ['8u6xIKcLg6Q', 'utL1mr4YpT8', '0-GxSOTu_oo']

/** Three fanned record sleeves that spread apart on hover. */
function CoverStack({ onPlay }: { onPlay: (v: Video) => void }) {
  const stack = stackIds.map((id) => videos.find((v) => v.id === id)!).filter(Boolean)
  const pose = [
    'rotate-[-9deg] -translate-x-[38%] group-hover:-translate-x-[62%] group-hover:rotate-[-13deg]',
    'rotate-[7deg] translate-x-[38%] group-hover:translate-x-[62%] group-hover:rotate-[11deg]',
    'z-10 group-hover:-translate-y-3',
  ]
  return (
    <div className="group relative mx-auto flex aspect-[5/4] w-full max-w-md items-center justify-center">
      {stack.map((v, i) => (
        <button
          key={v.id}
          type="button"
          onClick={() => onPlay(v)}
          aria-label={`Play ${v.title}`}
          className={cn(
            'absolute w-[58%] overflow-hidden rounded-2xl bg-navy-950 shadow-[0_30px_60px_-25px_rgba(11,23,54,0.6)] ring-4 ring-white transition-transform duration-700 ease-[var(--ease-editorial)]',
            pose[i],
          )}
        >
          <div className="relative aspect-square">
            <img src={ytThumb(v.id)} alt="" className="size-full scale-[1.34] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
            <span className="absolute inset-x-3 bottom-3 text-left">
              <span className="eyebrow block !text-[0.55rem] text-ember-300">{v.tag}</span>
              <span className="block font-serif text-[1.05rem] leading-tight text-white">{v.title}</span>
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

export default function Music() {
  const play = useVideoPlayer()
  const [filter, setFilter] = useState<Filter>('All')
  const shown = useMemo(() => (filter === 'All' ? videos : videos.filter((v) => v.tag === filter)), [filter])

  return (
    <>
      <title>Tracks & Albums — Singer Afe Paul</title>
      <meta name="description" content="Original gospel music, the Lord of Christmas album, the #oldskool gospel series and more from Singer Afe Paul." />

      <PageHero
        eyebrow="Tracks & Albums"
        title="Tracks &"
        accent="Albums."
        intro="Gospel music created to sing to humans’ hearts — original songs, a full Christmas album, the #oldskool gospel series, covers and live moments."
        aside={<CoverStack onPlay={play} />}
      >
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => play(featuredRelease)} icon={<Play className="size-4 fill-current" />}>
            Play the latest
          </Button>
          <Button href={youtubeChannel} variant="outline" icon={<FaYoutube className="size-4" />}>
            Subscribe on YouTube
          </Button>
        </div>
      </PageHero>

      {/* Featured release */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={`${featuredRelease.label} · ${featuredRelease.year}`}
              title={
                <>
                  {featuredRelease.title} <span className="text-ember-600">{featuredRelease.credit}</span>
                </>
              }
              intro={featuredRelease.blurb}
            />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
              <Button onClick={() => play(featuredRelease)} icon={<Play className="size-4 fill-current" />}>
                Watch the video
              </Button>
              <Button
                variant="outline"
                onClick={() => play({ id: featuredRelease.lyricId, title: `${featuredRelease.title} (Lyric video)`, credit: featuredRelease.credit })}
                icon={<ListMusic className="size-4" />}
              >
                Lyric video
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <button
              type="button"
              onClick={() => play({ id: featuredRelease.lyricId, title: `${featuredRelease.title} (Lyric video)`, credit: featuredRelease.credit })}
              className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-navy-950"
              aria-label="Play the Nature Song lyric video"
            >
              <img src={ytThumb(featuredRelease.lyricId)} alt="" className="size-full object-cover opacity-80 transition-transform duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/80 via-transparent to-ember-600/30" />
              <span className="absolute inset-0 m-auto flex size-24 items-center justify-center rounded-full bg-white/95 text-navy-950 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-ember-600 group-hover:text-white">
                <Play className="size-8 translate-x-0.5 fill-current" />
              </span>
              <span className="eyebrow absolute bottom-6 left-6 text-white">Official lyric video</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Album */}
      <section className="grain relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 size-[36rem] rounded-full bg-ember-600/20 blur-[120px]" />
        <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            {/* album sleeve with vinyl sliding out */}
            <button type="button" onClick={() => play({ id: album.fullMixId, title: `${album.title} — full album mix` })} className="group relative block w-full max-w-md text-left" aria-label="Play the full Lord of Christmas album mix">
              <div className="absolute inset-y-[4%] right-0 aspect-square translate-x-0 rounded-full bg-[repeating-radial-gradient(circle,#0b0b0b_0_2px,#1a1a1a_2px_4px)] shadow-2xl transition-transform duration-[1.2s] ease-[var(--ease-editorial)] group-hover:translate-x-[28%] group-hover:rotate-180">
                <span className="absolute inset-[34%] rounded-full bg-ember-600" />
                <span className="absolute inset-[47%] rounded-full bg-navy-950" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                <img src={ytThumb(album.coverId)} alt="" className="size-full scale-[1.34] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="eyebrow text-ember-300">{album.kind}</p>
                  <p className="mt-1 font-serif text-4xl leading-none">{album.title}</p>
                </div>
              </div>
            </button>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              tone="dark"
              eyebrow="The album"
              title={
                <>
                  Lord of <span className="text-ember-300">Christmas.</span>
                </>
              }
              intro={album.blurb}
            />
            <ol className="mt-10 border-t border-white/20">
              {album.tracks.map((t, i) => (
                <li key={t.id} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => play({ ...t, title: t.title })}
                    className="group flex w-full items-center gap-5 py-4 text-left transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="w-8 shrink-0 font-serif text-sm text-white/40 group-hover:hidden">{String(i + 1).padStart(2, '0')}</span>
                    <span className="hidden w-8 shrink-0 text-ember-400 group-hover:block">
                      <Play className="size-4 fill-current" />
                    </span>
                    <span className="flex-1 font-serif text-[1.25rem] text-white transition-colors group-hover:text-ember-200">{t.title}</span>
                    {t.credit && <span className="text-[0.85rem] text-white/50">{t.credit}</span>}
                  </button>
                </li>
              ))}
            </ol>
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
              <Button onClick={() => play({ id: album.fullMixId, title: `${album.title} — full album mix` })} icon={<Disc3 className="size-4" />}>
                Play the full album mix
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* All videos */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The collection"
            title={
              <>
                Watch &amp; <span className="text-ember-600">listen.</span>
              </>
            }
            intro="Originals, the #oldskool gospel series, Christmas songs, covers and more — straight from the YouTube channel."
          />

          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter videos">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'relative rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition-colors',
                  filter === f ? 'border-navy-950 text-white' : 'border-line-strong text-body hover:border-ink',
                )}
              >
                {filter === f && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-navy-950" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((v: Video) => (
                <motion.div
                  key={`${v.id}-${v.tag}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <VideoCard video={v} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="mt-16 flex justify-center">
            <Button href={youtubeChannel} variant="navy" icon={<FaYoutube className="size-4" />}>
              More on the YouTube channel
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Booking strip */}
      <section className="border-y border-line bg-cream py-16">
        <RevealGroup className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <RevealItem>
            <p className="eyebrow text-ember-600">I need people to sing/play at an event</p>
            <p className="mt-3 max-w-2xl font-serif text-[1.9rem] leading-tight text-ink md:text-[2.4rem]">
              Want this sound at your service, concert or celebration?
            </p>
          </RevealItem>
          <RevealItem>
            <Button
              href={whatsappLink('Hello Singer Afe Paul, I need people to sing/play at an event.')}
              icon={<FaWhatsapp className="size-4" />}
            >
              Book Now
            </Button>
          </RevealItem>
        </RevealGroup>
      </section>

      <ContactCTA />
    </>
  )
}
