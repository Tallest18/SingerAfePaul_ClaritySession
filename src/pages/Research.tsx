import { Check, Mail, NotebookPen } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { mentorshipSupport, narrative, researchAreas } from '../data/site'
import { mailtoLink, whatsappLink } from '../lib/utils'

const audiences = [
  { title: 'Students', text: 'Undergraduate and postgraduate students writing projects, theses or dissertations in music.' },
  { title: 'Music leaders', text: 'Church music directors and choir leaders who want to document, study or improve their practice.' },
  { title: 'Researchers', text: 'Independent and early-career researchers exploring gospel music, faith and society.' },
]

export default function Research() {
  return (
    <>
      <title>Music Research — Singer Afe Paul</title>
      <meta name="description" content="Seasoned social research at the intersection of gospel music, and mentorship for music researchers." />

      <PageHero
        eyebrow="Music Research"
        title="Where gospel music"
        accent="meets society."
        intro="Seasoned social research at the intersection of gospel music — asking how music carries meaning, shapes communities and forms the people who make it."
        aside={
          <div className="grain relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10">
            <div aria-hidden className="absolute -top-20 -right-20 size-64 rounded-full bg-ember-600/40 blur-3xl" />
            <NotebookPen className="relative size-8 text-ember-300" />
            <p className="relative mt-6 font-serif text-[1.6rem] leading-snug">
              “I need a music research <span className="text-ember-300">mentor.</span>”
            </p>
            <p className="relative mt-4 text-white/70">You’re in the right place. Research mentorship is part of the junction.</p>
            <Link
              to="/research#mentorship"
              className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember-300 hover:text-ember-200"
            >
              <span className="link-draw">How mentorship works</span> →
            </Link>
          </div>
        }
      />

      {/* Areas */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Areas of inquiry"
            title={
              <>
                The questions <span className="text-ember-600">we sit with.</span>
              </>
            }
            intro="Research that takes both the music and the people seriously."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2" stagger={0.1}>
            {researchAreas.map((a, i) => (
              <RevealItem key={a.title} className="h-full">
                <div className="group relative h-full bg-white p-8 transition-colors duration-500 hover:bg-cream md:p-10">
                  <div className="flex items-center justify-between">
                    <a.icon className="size-7 text-ember-600" />
                    <span className="font-serif text-5xl text-line transition-colors duration-500 group-hover:text-ember-200">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-[1.7rem] leading-tight font-bold">{a.title}</h3>
                  <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-muted">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Quote band */}
      <section className="grain relative overflow-hidden bg-navy-950 py-24 text-center text-white md:py-28">
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-1/2 rounded-full bg-ember-600/15 blur-[120px]" />
        <Reveal className="container-x relative">
          <span className="block font-serif text-7xl leading-none text-ember-400">“</span>
          <p className="mx-auto max-w-4xl font-serif text-[1.8rem] leading-[1.3] md:text-[2.6rem]">{narrative.motivation}</p>
          <p className="eyebrow mt-8 text-ember-300">The Motivation</p>
        </Reveal>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="scroll-mt-24 py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Research mentorship"
                title={
                  <>
                    Guidance from topic to <span className="text-ember-600">findings.</span>
                  </>
                }
                intro="One-on-one support for anyone researching music — especially where it meets faith and society."
              />
              <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
                <Button href={whatsappLink('Hello Singer Afe Paul, I need a music research mentor.')} icon={<FaWhatsapp className="size-4" />}>
                  Request a mentor
                </Button>
                <Button
                  href={mailtoLink('I need a music research mentor', 'Hello Singer Afe Paul,\n\nMy research topic / area:\nWhere I am in the process:\nWhat I need help with:\n\n')}
                  variant="outline"
                  icon={<Mail className="size-4" />}
                >
                  Email instead
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-muted">Who it’s for</p>
            </Reveal>
            <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-3">
              {audiences.map((a) => (
                <RevealItem key={a.title} className="h-full">
                  <div className="h-full rounded-2xl border border-line p-6">
                    <h3 className="text-[1.3rem] font-bold">{a.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{a.text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-14">
              <p className="eyebrow text-muted">What you get help with</p>
            </Reveal>
            <ul className="mt-5 border-t border-ink">
              {mentorshipSupport.map((s, i) => (
                <li key={s} className="border-b border-line">
                  <Reveal delay={i * 0.04} className="flex items-center gap-5 py-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                      <Check className="size-4" />
                    </span>
                    <span className="font-serif text-[1.3rem] text-ink">{s}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
