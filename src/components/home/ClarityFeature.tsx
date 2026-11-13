import { CalendarCheck } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import monogram from '../../assets/img/clarity-monogram.png'
import scene from '../../assets/img/clarity-talks-scene.jpg'
import { clarityBookingUrl, plans } from '../../data/site'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionHeading'

export function ClarityFeature() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section className="border-y border-line bg-cream py-24 md:py-32">
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div ref={ref} className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-3xl bg-navy-950 shadow-[0_50px_90px_-50px_rgba(11,23,54,0.7)]">
              <motion.img
                style={{ y }}
                src={scene}
                alt="Singer Afe Paul seated at a table, facing an empty chair that reads YOU"
                className="size-full scale-[1.18] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-2xl font-bold text-white md:text-3xl">
                There’s a seat for <span className="text-ember-300">you.</span>
              </p>
            </div>
            <div className="absolute -top-6 -right-4 flex size-24 items-center justify-center rounded-full bg-white p-4 shadow-xl md:-right-8 md:size-28">
              <img src={monogram} alt="Clarity Talks monogram" className="size-full object-contain" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel number="05">Clarity Talks with Singer Afe Paul</SectionLabel>
            <h2 className="mt-6 text-[2.1rem] leading-[1.12] font-bold tracking-[-0.025em] md:text-[3rem]">
              A Personal <span className="text-ember-600">Clarity</span> Session.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              When life, career, ministry or music feels tangled, a focused conversation can change everything.
              Choose the “diet” that fits your season — virtual or in person.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 divide-y divide-line-strong/70 border-y border-line-strong/70">
            {plans.map((p) => (
              <RevealItem key={p.id}>
                <div className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className={cn('text-[1.15rem] font-semibold text-ink', p.featured && 'text-ember-700')}>{p.name}</p>
                    <p className="text-[0.88rem] text-muted">{p.detail}</p>
                  </div>
                  <p className="shrink-0 text-right text-[1.35rem] font-bold text-navy-900">
                    {p.price}
                    {p.unit && <span className="ml-1 text-[0.8rem] font-medium text-muted">{p.unit}</span>}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
            <Button href={clarityBookingUrl} icon={<CalendarCheck className="size-4" />}>
              Book a session
            </Button>
            <Button to="/clarity-talks" variant="outline">
              Explore Clarity Talks
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
