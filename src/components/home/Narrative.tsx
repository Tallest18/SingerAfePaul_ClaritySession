import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { narrative, pillars } from '../../data/site'
import { cn } from '../../lib/utils'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Narrative() {
  const last = pillars[pillars.length - 1]
  return (
    <section id="narrative" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              number="01"
              eyebrow="The Narrative"
              title={
                <>
                  A music brand with <span className="text-ember-600">integrity</span> at its core.
                </>
              }
            />
            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-ember-500 pl-6 font-serif text-xl leading-relaxed text-navy-800">
                “{narrative.identity}”
              </blockquote>
              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-navy-800 hover:text-ember-700"
              >
                <span className="link-draw">Who is Aduragbemi Paul Afe?</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="drop-cap text-[1.2rem] leading-[1.75] text-body md:text-[1.35rem]">{narrative.lead}</p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
            {pillars.slice(0, -1).map((p, i) => (
              <RevealItem key={p.title}>
                <PillarCard index={i + 1} {...p} />
              </RevealItem>
            ))}
            <RevealItem className="sm:col-span-2">
              <div className="grain group relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-navy-950 p-8 text-white sm:flex-row sm:items-center">
                <div className="absolute -right-16 -bottom-24 size-64 rounded-full bg-ember-600/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-ember-600">
                  <last.icon className="size-6" />
                </span>
                <div className="relative">
                  <p className="eyebrow text-ember-300">07 · The foundation</p>
                  <h3 className="mt-2 text-[1.7rem] leading-tight font-bold !text-white">{last.title}</h3>
                  <p className="mt-1 text-white/70">{last.text}</p>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}

function PillarCard({ index, title, text, icon: Icon }: { index: number; title: string; text: string; icon: (typeof pillars)[number]['icon'] }) {
  return (
    <div
      className={cn(
        'group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-500',
        'hover:-translate-y-1 hover:border-navy-950 hover:shadow-[0_30px_60px_-35px_rgba(11,23,54,0.45)]',
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-colors duration-500 group-hover:bg-ember-600 group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <span className="font-serif text-sm text-line-strong">0{index}</span>
      </div>
      <h3 className="mt-6 text-[1.35rem] leading-snug font-bold">{title}</h3>
      <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{text}</p>
      <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-ember-600 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  )
}
