import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { contact } from '../../data/site'
import { whatsappLink } from '../../lib/utils'
import { Reveal, SplitWords } from '../ui/Reveal'
import { RotatingBadge } from '../ui/RotatingBadge'
import { SocialIcons } from '../ui/SocialIcons'

const cards = [
  { icon: Phone, label: 'Call', value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Send a message', href: whatsappLink('Hello Singer Afe Paul, '), external: true },
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
]

/** Closing "Please reach out now" section used across pages. */
export function ContactCTA({ title = 'Please reach out', accent = 'now.' }: { title?: string; accent?: string }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full bg-ember-100/80 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-ember-600">
                <span className="h-px w-8 bg-ember-500/60" />
                Let’s talk
              </p>
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-[clamp(2.6rem,1.3rem+5vw,6rem)] leading-[1] font-bold tracking-[-0.04em]">
                {title}{' '}
                <span className="text-ember-600">
                  <SplitWords text={accent} />
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="hidden justify-end lg:col-span-3 lg:flex">
            <RotatingBadge text="Reach out • Reach out • Reach out • " className="size-36 text-navy-900">
              <span className="flex size-16 items-center justify-center rounded-full bg-ember-600 text-white">
                <ArrowUpRight className="size-7" />
              </span>
            </RotatingBadge>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group relative flex h-full items-center gap-5 overflow-hidden rounded-2xl border border-line bg-white p-6 transition-colors duration-500 hover:border-navy-950"
              >
                <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-navy-950 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-y-100" />
                <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600 transition-colors duration-500 group-hover:bg-ember-600 group-hover:text-white">
                  <c.icon className="size-5" />
                </span>
                <span className="relative min-w-0">
                  <span className="eyebrow block text-muted transition-colors group-hover:text-ember-300">{c.label}</span>
                  <span className="mt-1 block font-serif text-[1.1rem] text-ink transition-colors group-hover:text-white xl:text-[1.2rem]">
                    {/* zero-width space lets a long email wrap before the @ instead of mid-word */}
                    {c.value.replace('@', '\u200b@')}
                  </span>
                </span>
                <ArrowUpRight className="relative ml-auto size-5 shrink-0 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted">
            <span className="font-serif text-xl text-ink">@{contact.handle}</span> on every social media
          </p>
          <SocialIcons itemClassName="border-line-strong text-navy-900 hover:bg-navy-950 hover:border-navy-950 hover:text-white" />
        </Reveal>
      </div>
    </section>
  )
}
