import { useLenis } from 'lenis/react'
import { ArrowUp, Mail, MessageCircle, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { contact, shades } from '../../data/site'
import { whatsappLink } from '../../lib/utils'
import { SocialIcons } from '../ui/SocialIcons'
import { Wordmark } from '../ui/Wordmark'

export function Footer() {
  const lenis = useLenis()
  const toTop = () => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: 'smooth' }))

  return (
    <footer className="grain relative overflow-hidden bg-navy-950 text-white/70">
      <div className="h-1 bg-[linear-gradient(90deg,var(--color-ember-600),var(--color-ember-300),var(--color-navy-400),var(--color-ember-600))]" />

      <div className="container-x pt-16 md:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-md leading-relaxed">
              Meaningful music, healthy musicianship, impactful music education, gospel music research and music
              consultancy — with integrity at the core.
            </p>
            <SocialIcons
              withWhatsapp
              className="mt-7"
              itemClassName="border-white/15 text-white/80 hover:border-ember-500 hover:bg-ember-600 hover:text-white"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Explore">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/#narrative">The Narrative</FooterLink>
              <FooterLink to="/#needs">What do you need?</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterCol>
            <FooterCol title="Other Shades">
              {shades.map((s) => (
                <FooterLink key={s.to} to={s.to}>
                  {s.short}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="Reach out">
              <li>
                <a href={contact.phoneHref} className="flex items-start gap-3 hover:text-white">
                  <Phone className="mt-1 size-4 shrink-0 text-ember-400" />
                  <span className="link-draw">{contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-3 hover:text-white">
                  <Mail className="mt-1 size-4 shrink-0 text-ember-400" />
                  <span className="link-draw break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-white"
                >
                  <MessageCircle className="mt-1 size-4 shrink-0 text-ember-400" />
                  <span className="link-draw">Chat on WhatsApp</span>
                </a>
              </li>
              <li className="pt-1 text-[0.85rem] text-white/50">
                <span className="text-ember-300">@{contact.handle}</span> on every social media
              </li>
            </FooterCol>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 text-[0.82rem] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Singer Afe Paul. All rights reserved.</p>
          <button
            type="button"
            onClick={toTop}
            className="group flex items-center gap-2 font-medium text-white/80 hover:text-white"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-full border border-white/20 transition-all group-hover:-translate-y-0.5 group-hover:border-ember-500 group-hover:bg-ember-600">
              <ArrowUp className="size-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* oversized outline wordmark */}
      <div aria-hidden className="pointer-events-none -mb-[0.22em] overflow-hidden text-center select-none">
        <p className="text-outline font-serif text-[15.5vw] leading-[0.9] font-medium tracking-[-0.04em] whitespace-nowrap text-white/25">
          Singer Afe Paul
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-ember-300">{title}</p>
      <ul className="mt-5 space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="link-draw transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}
