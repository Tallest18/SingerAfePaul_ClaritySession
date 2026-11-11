import { narrative } from '../../data/site'
import { Marquee } from '../ui/Marquee'
import { Reveal } from '../ui/Reveal'

export function IntentionMotivation() {
  return (
    <section className="grain relative overflow-hidden bg-navy-950 pt-24 text-white md:pt-32">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-ember-600/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-60 -left-40 size-[36rem] rounded-full bg-navy-500/30 blur-[120px]" />

      <div className="container-x relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/15">
          <Reveal className="lg:pr-16">
            <p className="eyebrow flex items-center gap-3 text-ember-300">
              <span className="font-serif text-sm tracking-normal text-white/40">02</span>
              <span className="h-px w-8 bg-ember-300/60" />
              The Intention
            </p>
            <p className="mt-8 font-serif text-[1.75rem] leading-[1.3] text-white md:text-[2.25rem]">
              {narrative.intention}
            </p>
            <p className="mt-10 inline-flex items-center gap-3 rounded-full border border-ember-400/40 bg-ember-600/15 px-5 py-2.5 font-serif text-lg text-ember-200 italic">
              <span className="size-2 rounded-full bg-ember-400" />
              {narrative.intentionTagline}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:pl-16">
            <p className="eyebrow flex items-center gap-3 text-ember-300">
              <span className="font-serif text-sm tracking-normal text-white/40">03</span>
              <span className="h-px w-8 bg-ember-300/60" />
              The Motivation
            </p>
            <p className="mt-8 font-serif text-[1.75rem] leading-[1.3] text-white/90 italic md:text-[2.25rem]">
              {narrative.motivation}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Meaning', 'Wholesomeness', 'Success'].map((w) => (
                <span key={w} className="eyebrow rounded-full border border-white/20 px-4 py-2 text-white/80">
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-24 border-t border-white/10 py-7 text-white/85 md:mt-32">
        <Marquee
          items={[
            'Meaningful music',
            'Healthy musicianship',
            'Music education',
            'Gospel music research',
            'Music consultancy',
            'Value-first service',
            'Integrity at the core',
          ]}
        />
      </div>
    </section>
  )
}
