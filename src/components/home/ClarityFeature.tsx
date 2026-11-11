import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import monogram from '../../assets/img/clarity-monogram.png'
import scene from '../../assets/img/clarity-talks-scene.jpg'
import { plans } from '../../data/site'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'

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
              <p className="absolute bottom-6 left-6 font-serif text-2xl text-white italic md:text-3xl">
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
            <p className="eyebrow flex items-center gap-3 text-ember-600">
              <span className="font-serif text-sm tracking-normal text-muted">05</span>
              <span className="h-px w-8 bg-ember-500/60" />
              Clarity Talks with Singer Afe Paul
            </p>
            <h2 className="mt-5 text-[2.3rem] leading-[1.06] font-normal tracking-[-0.025em] md:text-[3.4rem]">
              A Personal <em className="text-ember-600">Clarity</em> Session.
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
                    <p className={cn('font-serif text-[1.25rem] text-ink', p.featured && 'text-ember-700')}>{p.name}</p>
                    <p className="text-[0.88rem] text-muted">{p.detail}</p>
                  </div>
                  <p className="shrink-0 text-right font-serif text-[1.45rem] text-navy-900">
                    {p.price}
                    {p.unit && <span className="ml-1 font-sans text-[0.8rem] text-muted">{p.unit}</span>}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
            <Button to="/clarity-talks">Explore Clarity Talks</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
