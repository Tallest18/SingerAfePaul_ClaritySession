import { ArrowRight, Mail, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { SmartLink } from '../ui/SmartLink'
import { needs } from '../../data/site'
import { cn, mailtoLink, whatsappLink } from '../../lib/utils'

const ease = [0.2, 0.7, 0.2, 1] as const

/** Accordion of "I need…" statements, each opening a ready-to-send message. */
export function NeedsList({ defaultOpen = null }: { defaultOpen?: string | null }) {
  const [open, setOpen] = useState<string | null>(defaultOpen)

  return (
    <ul className="border-t border-ink">
      {needs.map((n, i) => {
        const isOpen = open === n.id
        const message = `Hello Singer Afe Paul, ${n.need.charAt(0).toLowerCase()}${n.need.slice(1).replace(/[!.]$/, '')}.`
        return (
          <motion.li
            key={n.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -5% 0px' }}
            transition={{ duration: 0.7, ease, delay: (i % 3) * 0.05 }}
            className="border-b border-line"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : n.id)}
              aria-expanded={isOpen}
              aria-controls={`need-${n.id}`}
              className="group relative isolate flex w-full items-center gap-4 overflow-hidden py-6 text-left md:gap-8 md:py-7"
            >
              {/* sliding fill on hover */}
              <span
                aria-hidden
                className={cn(
                  'absolute inset-0 -z-10 origin-left bg-cream transition-transform duration-500 ease-[var(--ease-editorial)]',
                  isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                )}
              />
              <span className="w-10 shrink-0 pl-2 font-serif text-sm text-muted md:w-14 md:pl-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 max-sm:hidden',
                  isOpen
                    ? 'border-ember-600 bg-ember-600 text-white'
                    : 'border-line-strong text-navy-800 group-hover:border-navy-950 group-hover:bg-navy-950 group-hover:text-white',
                )}
              >
                <n.icon className="size-[1.1rem]" />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    'block font-serif text-[1.35rem] leading-snug transition-colors duration-300 md:text-[1.9rem]',
                    isOpen ? 'text-ember-700' : 'text-ink',
                  )}
                >
                  {n.need}
                </span>
              </span>
              <span className="eyebrow hidden shrink-0 text-muted lg:block">{n.answer}</span>
              <span
                className={cn(
                  'mr-2 flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 md:mr-4',
                  isOpen ? 'rotate-45 border-ink bg-ink text-white' : 'border-line-strong text-ink group-hover:border-ink',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`need-${n.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden bg-cream"
                >
                  <div className="grid gap-6 px-4 pb-8 md:grid-cols-[3.5rem_1fr_auto] md:gap-8 md:px-0 md:pr-4 md:pb-10 md:pl-[calc(3.5rem+2.75rem+4rem)]">
                    <div className="max-w-2xl md:col-span-2 md:col-start-1">
                      <p className="eyebrow text-ember-600">The answer · {n.answer}</p>
                      <p className="mt-3 text-[1.05rem] leading-relaxed text-body md:text-lg">{n.text}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:col-start-3 md:justify-end">
                      <a
                        href={whatsappLink(message)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ember-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ember-700"
                      >
                        <FaWhatsapp className="size-4" /> WhatsApp
                      </a>
                      <a
                        href={mailtoLink(n.need, `${message}\n\n`)}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                      >
                        <Mail className="size-4" /> Email
                      </a>
                      {n.to && (
                        <SmartLink
                          to={n.to}
                          className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-navy-800 hover:text-ember-700"
                        >
                          <span className="link-draw">{n.toLabel}</span>
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </SmartLink>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        )
      })}
    </ul>
  )
}
