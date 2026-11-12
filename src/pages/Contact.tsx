import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useSearchParams } from 'react-router-dom'
import { NeedsList } from '../components/sections/NeedsList'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SocialIcons } from '../components/ui/SocialIcons'
import { contact, needs } from '../data/site'
import { mailtoLink, whatsappLink } from '../lib/utils'

const field =
  'w-full rounded-xl border border-line-strong bg-white px-4 py-3.5 text-[1rem] text-ink placeholder:text-muted/70 transition-colors focus:border-navy-900 focus:outline-none focus:ring-4 focus:ring-navy-100'

/** "I need…" text for a ?need=<id> link (used by the "Book now" menu). */
const needFromParam = (id: string | null) => needs.find((n) => n.id === id)?.need ?? needs[0].need

export default function Contact() {
  const [params] = useSearchParams()
  const needParam = params.get('need')
  const [name, setName] = useState('')
  const [need, setNeed] = useState(() => needFromParam(needParam))

  // a different booking link was followed while already on this page
  const [lastParam, setLastParam] = useState(needParam)
  if (lastParam !== needParam) {
    setLastParam(needParam)
    setNeed(needFromParam(needParam))
  }
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const compose = () =>
    [`Hello Singer Afe Paul,`, '', `${need}${/[!.]$/.test(need) ? '' : '.'}`, message.trim(), '', name ? `— ${name}` : '']
      .filter((l, i, arr) => !(l === '' && arr[i - 1] === ''))
      .join('\n')
      .trim()

  const sendWhatsapp = (e: FormEvent) => {
    e.preventDefault()
    window.open(whatsappLink(compose()), '_blank', 'noopener')
  }

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  const methods = [
    { key: 'phone', icon: Phone, label: 'Call', value: contact.phoneDisplay, href: contact.phoneHref, copy: contact.phoneDisplay },
    { key: 'wa', icon: FaWhatsapp, label: 'WhatsApp', value: contact.phoneDisplay, href: whatsappLink('Hello Singer Afe Paul, '), external: true },
    { key: 'email', icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, copy: contact.email },
  ]

  return (
    <>
      <title>Contact — Singer Afe Paul</title>
      <meta name="description" content="Reach Singer Afe Paul by phone, WhatsApp, email or @singer_afe_paul on every social media." />

      <PageHero
        eyebrow="Contact"
        title="Please reach out"
        accent="now."
        intro={
          <>
            Call, WhatsApp, email — or DM <span className="text-ink">@{contact.handle}</span> on every social media. Or use the
            form: it writes the message for you.
          </>
        }
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* methods */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ember-600">Direct lines</p>
            </Reveal>
            <ul className="mt-6 border-t border-ink">
              {methods.map((m, i) => (
                <li key={m.key} className="border-b border-line">
                  <Reveal delay={i * 0.06} className="flex items-center gap-4 py-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                      <m.icon className="size-5" />
                    </span>
                    <a
                      href={m.href}
                      {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="group min-w-0 flex-1"
                    >
                      <span className="eyebrow block text-muted">{m.label}</span>
                      <span className="mt-0.5 flex items-center gap-2 font-serif text-[1.3rem] break-all text-ink group-hover:text-ember-700">
                        {m.value}
                        <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                    </a>
                    {m.copy && (
                      <button
                        type="button"
                        onClick={() => copy(m.copy!, m.key)}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:border-ink hover:text-ink"
                        aria-label={`Copy ${m.label.toLowerCase()}`}
                        title="Copy"
                      >
                        {copied === m.key ? <Check className="size-4 text-ember-600" /> : <Copy className="size-4" />}
                      </button>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.2} className="mt-10 rounded-3xl bg-navy-950 p-7 text-white">
              <p className="eyebrow text-ember-300">On every social media</p>
              <p className="mt-2 font-serif text-2xl">@{contact.handle}</p>
              <SocialIcons
                withWhatsapp
                className="mt-6"
                itemClassName="border-white/20 text-white/85 hover:border-ember-500 hover:bg-ember-600 hover:text-white"
              />
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              id="message-form"
              onSubmit={sendWhatsapp}
              className="rounded-[2rem] border border-line bg-cream p-6 shadow-[0_40px_80px_-60px_rgba(11,23,54,0.5)] sm:p-10"
            >
              <p className="eyebrow text-ember-600">{needParam ? 'Booking request' : 'Write a message'}</p>
              <h2 className="mt-3 text-[2rem] leading-tight font-normal md:text-[2.4rem]">
                Tell us what you <em className="text-ember-600">need.</em>
              </h2>

              <div className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-[0.9rem] font-medium text-ink">Your name</span>
                  <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Tolu Adebayo" autoComplete="name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.9rem] font-medium text-ink">I need…</span>
                  <select className={field} value={need} onChange={(e) => setNeed(e.target.value)}>
                    {needs.map((n) => (
                      <option key={n.id} value={n.need}>
                        {n.need}
                      </option>
                    ))}
                    <option value="I have another question">Something else</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.9rem] font-medium text-ink">Details (optional)</span>
                  <textarea
                    className={`${field} min-h-36 resize-y`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Dates, location, what you have in mind…"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-ember-600 px-6 py-4 font-medium text-white transition-colors hover:bg-ember-700"
                >
                  <FaWhatsapp className="size-5" /> Send on WhatsApp
                </button>
                <a
                  href={mailtoLink(need, compose())}
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-ink/70 px-6 py-4 font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  <Mail className="size-5" /> Send by email
                </a>
              </div>
              <p className="mt-4 text-center text-[0.85rem] text-muted">
                Opens WhatsApp or your email app with the message ready — nothing is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white pb-24 md:pb-32">
        <div className="container-x pt-20">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title={
              <>
                Pick the need that <em className="text-ember-600">sounds like you.</em>
              </>
            }
          />
          <div className="mt-12">
            <NeedsList />
          </div>
        </div>
      </section>
    </>
  )
}
