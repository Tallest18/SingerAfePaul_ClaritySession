import { FaYoutube } from 'react-icons/fa6'
import { featuredRelease, videos, youtubeChannel } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { VideoCard } from '../video/VideoCard'

export function MusicTeaser() {
  const side = videos.filter((v) => ['0-GxSOTu_oo', 'utL1mr4YpT8'].includes(v.id))
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="06"
            eyebrow="Tracks & Albums"
            title={
              <>
                Music that <em className="text-ember-600">sings to the heart.</em>
              </>
            }
          />
          <Reveal delay={0.1} className="flex shrink-0 flex-wrap gap-3">
            <Button href={youtubeChannel} variant="outline" icon={<FaYoutube className="size-4" />}>
              Subscribe
            </Button>
            <Button to="/music" variant="navy">
              All music
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <VideoCard video={featuredRelease} large />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {side.map((v, i) => (
              <Reveal key={v.id} delay={0.1 * (i + 1)}>
                <VideoCard video={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
