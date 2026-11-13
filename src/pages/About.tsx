import { HeartHandshake, Lightbulb, Microscope, MicVocal, Music2 } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import portrait from '../assets/img/afe-paul-portrait-web.jpg'
import brandIcon from '../assets/img/brand-icon.webp'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal'
import { RotatingBadge } from '../components/ui/RotatingBadge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { narrative, socials } from '../data/site'

const roles = [
  { icon: MicVocal, title: 'Singer & recording artist', text: 'A gospel recording artist — originals, worship, hymns and a full Christmas album.' },
  { icon: Music2, title: 'Music instructor', text: 'Teaching voice, violin and music theory with patience and structure.' },
  { icon: Microscope, title: 'Researcher', text: 'Social research at the intersection of gospel music and everyday life.' },
  { icon: Lightbulb, title: 'Consultant', text: 'Music consultancy for events, choirs, ministries and artists.' },
  { icon: HeartHandshake, title: 'Clarity Talks host', text: 'Honest one-on-one conversations that help people find their next step.' },
]

const linkedin = socials.find((s) => s.key === 'linkedin')!

export default function About() {
  return (
    <>
      <title>Who is Aduragbemi Paul Afe? — Singer Afe Paul</title>
      <meta name="description" content="Meet Aduragbemi Paul Afe, who spearheads the Singer Afe Paul music brand." />

      <PageHero
        eyebrow="Who is Aduragbemi Paul Afe?"
        title="Who is Aduragbemi"
        accent="Paul Afe?"
        intro={narrative.identity}
        aside={
          <div className="relative mx-auto max-w-sm">
            <div aria-hidden className="absolute top-6 -right-4 -bottom-4 left-6 rounded-t-full border border-ember-500/70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-navy-100 shadow-[0_40px_80px_-40px_rgba(11,23,54,0.55)]">
              <img src={portrait} alt="Portrait of Aduragbemi Paul Afe" className="size-full object-cover object-top" />
            </div>
            <p className="eyebrow mt-8 text-right !text-[0.58rem] text-muted">Photo · King David</p>
            <div className="absolute -bottom-6 -left-6">
              <RotatingBadge text="Aduragbemi • Paul • Afe • " className="size-28 bg-white text-navy-950 shadow-xl ring-1 ring-line">
                <img src={brandIcon} alt="" className="h-11 w-auto" />
              </RotatingBadge>
            </div>
          </div>
        }
      >
        <Button href={linkedin.href} variant="navy" icon={<FaLinkedinIn className="size-4" />}>
          Connect on LinkedIn
        </Button>
      </PageHero>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="The person behind the brand"
              title={
                <>
                  Created to sing to <span className="text-ember-600">human hearts.</span>
                </>
              }
            />
          </div>
          <div className="space-y-6 text-[1.15rem] leading-[1.8] text-body lg:col-span-8 md:text-[1.25rem]">
            <Reveal>
              <p className="drop-cap">
                Aduragbemi Paul Afe spearheads Singer Afe Paul — and the brand and the person share a very close
                identity. In Afe Paul’s own words: a singer of the course of Christ, created to sing to humans’ hearts.
              </p>
            </Reveal>
            <Reveal>
              <p>
                A gospel recording artist and music instructor, Afe Paul teaches voice, violin and music theory, and is
                rarely far from an acoustic guitar. The music moves from Afro-Western gospel and worship to hymns, a
                full Christmas album — <span>Lord of Christmas</span> — and the storytelling <span>#oldskool</span> gospel
                series.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Beyond the stage and the classroom, the work reaches into social research at the intersection of gospel
                music, music consultancy, choir training and Clarity Talks — honest, one-on-one conversations that help
                people find their next step. Every part of it is held together by the same conviction: wholesome
                musicianship, a value-first approach and integrity at the core.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-y border-line bg-cream py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Many shades, one person"
            title={
              <>
                The hats Afe Paul <span className="text-ember-600">wears.</span>
              </>
            }
          />
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
            {roles.map((r) => (
              <RevealItem key={r.title} className="h-full">
                <div className="group h-full rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-navy-950 hover:bg-navy-950">
                  <span className="flex size-12 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-colors duration-500 group-hover:bg-ember-600 group-hover:text-white">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-[1.3rem] leading-snug font-bold transition-colors duration-500 group-hover:!text-white">{r.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/70">{r.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Intention / motivation */}
      <section className="py-24 md:py-32">
        <div className="container-x">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {[
            { label: 'The Intention', text: narrative.intention, extra: narrative.intentionTagline },
            { label: 'The Motivation', text: narrative.motivation },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1} className="h-full bg-white p-8 md:p-12">
              <p className="eyebrow text-ember-600">{b.label}</p>
              <p className="mt-5 font-serif text-[1.6rem] leading-snug text-ink md:text-[1.9rem]">{b.text}</p>
              {b.extra && <p className="mt-5 font-serif text-lg text-ember-700">{b.extra}</p>}
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      <ContactCTA title="Say hello to" accent="Afe Paul." />
    </>
  )
}
