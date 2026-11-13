import { ArrowDown, ArrowUpRight, CalendarCheck, Check, Clock, Coffee, MapPin, MessageSquareQuote, Quote, Video } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import flyer from '../assets/img/clarity-talks-flyer.jpg'
import logo from '../assets/img/clarity-talks-logo.png'
import scene from '../assets/img/clarity-talks-scene.jpg'
import { ContactCTA } from '../components/sections/ContactCTA'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { clarityBookingUrl, claritySteps, contact, plans, reviews, socials } from '../data/site'
import { cn, mailtoLink, whatsappLink } from '../lib/utils'

const topics = ['Life & direction', 'Purpose & calling', 'Career decisions', 'Your music journey', 'Ministry & service', 'Whatever is on your mind']

export default function ClarityTalks() {
  return (
    <>
      <title>Clarity Talks with Singer Afe Paul — Personal Clarity Session</title>
      <meta
        name="description"
        content="Personal Clarity Sessions with Singer Afe Paul — hourly, one-month, three-month and physical options."
      />

      <PageHero
        eyebrow="Clarity Talks"
        title="Clarity Talks with"
        accent="Singer Afe Paul."
        intro="Personal Clarity Sessions for anyone who needs to talk, think and see the next step clearly — about life, purpose, career, ministry or music."
        aside={
          <div className="relative rounded-[2rem] border border-line bg-white p-8 shadow-[0_40px_80px_-50px_rgba(11,23,54,0.55)] sm:p-10">
            <img src={logo} alt="CTw/SAP — Clarity Talks with Singer Afe Paul, Personal Clarity Session" className="w-full" />
            <span className="eyebrow absolute -top-3 left-8 rounded-full bg-ember-600 px-4 py-1.5 !text-[0.62rem] text-white">
              Personal Clarity Session
            </span>
          </div>
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button href={clarityBookingUrl} icon={<CalendarCheck className="size-4" />}>
            Book a session
          </Button>
          <Button to="/clarity-talks#plans" variant="outline" icon={<ArrowDown className="size-4" />}>
            See the plans
          </Button>
          <Button
            href={whatsappLink("Hello Singer Afe Paul, I have a question about Clarity Talks.")}
            variant="outline"
            icon={<FaWhatsapp className="size-4" />}
          >
            Ask on WhatsApp
          </Button>
        </div>
      </PageHero>

      {/* What it is */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3.4] overflow-hidden rounded-3xl bg-navy-950">
                <img src={scene} alt="An empty chair marked YOU across the table from Singer Afe Paul" className="size-full object-cover" />
              </div>
              <div className="absolute -right-3 -bottom-6 max-w-[15rem] rounded-2xl bg-navy-950 p-5 text-white shadow-xl sm:-right-8">
                <p className="eyebrow text-ember-300">The empty chair</p>
                <p className="mt-2 font-serif text-lg leading-snug">is waiting for you — bring what you’re carrying.</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="What is a clarity session?"
              title={
                <>
                  Sometimes you just <span className="text-ember-600">need to talk.</span>
                </>
              }
              intro="A Personal Clarity Session is a safe, confidential, one-on-one conversation. You speak freely; together you untangle the noise, ask better questions and leave with your next step in view."
            />
            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => (
                <RevealItem key={t}>
                  <div className="flex items-center gap-3 rounded-xl border border-line px-4 py-3.5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[0.98rem] text-ink">{t}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="grain relative scroll-mt-24 overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 size-[40rem] rounded-full bg-ember-600/20 blur-[120px]" />
        <div className="container-x relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Services"
              title={
                <>
                  Choose your <span className="text-ember-300">diet.</span>
                </>
              }
              intro="Four ways to take your seat — pick the rhythm that suits your season."
            />
            <Reveal className="text-white/50 md:text-right">Prices in Naira (₦)</Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
            {plans.map((p) => (
              <RevealItem key={p.id} className="h-full">
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5',
                    p.featured
                      ? 'bg-ember-600 text-white shadow-[0_40px_80px_-40px_rgba(194,84,10,0.9)]'
                      : 'border border-white/15 bg-white/[0.04] backdrop-blur',
                  )}
                >
                  {p.featured && (
                    <span className="eyebrow absolute -top-3 right-6 rounded-full bg-white px-3 py-1.5 !text-[0.6rem] text-ember-700">
                      Best value
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-[0.85rem] text-white/70">
                    {p.id === 'hourly' && <Video className="size-4" />}
                    {p.id === 'physical' && <MapPin className="size-4" />}
                    {(p.id === 'one-month' || p.id === 'three-months') && <Clock className="size-4" />}
                    {p.detail}
                  </div>
                  <h3 className="mt-4 text-[1.6rem] leading-tight font-bold !text-white">{p.name}</h3>
                  <p className="mt-5 font-serif text-[2.6rem] leading-none">
                    {p.price}
                    {p.unit && <span className="ml-1.5 font-sans text-sm text-white/70">{p.unit}</span>}
                  </p>
                  {p.note && (
                    <p className={cn('mt-3 text-[0.85rem]', p.featured ? 'text-white' : 'text-ember-300')}>{p.note}</p>
                  )}
                  <ul className={cn('mt-6 flex-1 space-y-3 border-t pt-6 text-[0.95rem]', p.featured ? 'border-white/30' : 'border-white/10')}>
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        {p.id === 'physical' && pt.includes('Refreshment') ? (
                          <Coffee className="mt-1 size-4 shrink-0" />
                        ) : (
                          <Check className={cn('mt-1 size-4 shrink-0', p.featured ? 'text-white' : 'text-ember-400')} />
                        )}
                        <span className="text-white/85">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={clarityBookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      'group mt-8 flex items-center justify-between rounded-full px-5 py-3.5 text-sm font-medium transition-colors',
                      p.featured ? 'bg-white text-ember-700 hover:bg-navy-950 hover:text-white' : 'bg-white/10 text-white hover:bg-white hover:text-navy-950',
                    )}
                  >
                    {p.id === 'physical' ? 'Book & negotiate' : 'Book this diet'}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title={
              <>
                Four steps to <span className="text-ember-600">clarity.</span>
              </>
            }
          />
          <RevealGroup className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6" stagger={0.12}>
            <div aria-hidden className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-line-strong)_0_8px,transparent_8px_16px)] md:block" />
            {claritySteps.map((s, i) => (
              <RevealItem key={s.title} className="relative text-center">
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-line bg-white font-serif text-xl text-ember-600 shadow-sm">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-[1.4rem] font-bold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-[0.98rem] leading-relaxed text-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 border-y border-line bg-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Reviews"
              title={
                <>
                  What people <span className="text-ember-600">say.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <Button
                href={mailtoLink('My Clarity Talks review', 'Hello Singer Afe Paul,\n\nHere is my review of Clarity Talks:\n\n')}
                variant="outline"
                icon={<MessageSquareQuote className="size-4" />}
              >
                Leave a review
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
            {reviews.map((r, i) => (
              <RevealItem key={i} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-40px_rgba(11,23,54,0.5)]">
                  <Quote className="size-8 fill-ember-100 text-ember-500" />
                  <blockquote className="mt-6 flex-1 font-serif text-[1.2rem] leading-relaxed text-ink">“{r.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <span className="flex size-11 items-center justify-center rounded-full bg-navy-950 font-serif text-white">
                      {r.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{r.name}</span>
                      <span className="block text-[0.85rem] text-muted">{r.detail}</span>
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Links */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Links"
              title={
                <>
                  Stay close to <span className="text-ember-600">the conversation.</span>
                </>
              }
              intro={
                <>
                  Find Singer Afe Paul as <span className="text-ink">@{contact.handle}</span> on every social media.
                </>
              }
            />
            <ul className="mt-10 border-t border-ink">
              {socials.map((s, i) => (
                <li key={s.key} className="border-b border-line">
                  <Reveal delay={i * 0.05}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-5 transition-[padding] duration-500 hover:pl-3"
                    >
                      <span className="font-serif text-[1.6rem] text-ink transition-colors group-hover:text-ember-700">{s.label}</span>
                      <span className="flex items-center gap-3 text-[0.9rem] text-muted">
                        <span className="hidden sm:inline">{s.handle}</span>
                        <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember-600" />
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <a href={flyer} target="_blank" rel="noreferrer" className="group block">
              <div className="relative mx-auto max-w-sm rotate-2 overflow-hidden rounded-2xl shadow-[0_50px_80px_-40px_rgba(11,23,54,0.7)] transition-transform duration-700 group-hover:rotate-0">
                <img src={flyer} alt="Clarity Talks with Singer Afe Paul flyer with services and prices" className="w-full" loading="lazy" />
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-[0.95rem] font-medium text-navy-800">
                <span className="link-draw">View the full flyer</span>
                <ArrowUpRight className="size-4" />
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      <ContactCTA title="Your seat is" accent="waiting." />
    </>
  )
}
