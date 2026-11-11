import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { SplitWords } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  accent?: string
  intro?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  className?: string
}

/** Header block used at the top of every inner page. */
export function PageHero({ eyebrow, title, accent, intro, children, aside, className }: Props) {
  return (
    <section className={cn('relative overflow-hidden border-b border-line bg-cream', className)}>
      {/* soft brand glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full bg-ember-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 size-[30rem] rounded-full bg-navy-100/70 blur-3xl" />

      <div className="container-x relative grid gap-12 pt-14 pb-16 md:pt-20 md:pb-20 lg:grid-cols-12 lg:items-end">
        <div className={cn(aside ? 'lg:col-span-7' : 'lg:col-span-10')}>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            aria-label="Breadcrumb"
            className="eyebrow flex items-center gap-2 text-muted"
          >
            <Link to="/" className="link-draw hover:text-ink">
              Home
            </Link>
            <span className="text-line-strong">/</span>
            <span className="text-ember-600">{eyebrow}</span>
          </motion.nav>

          <h1 className="mt-6 text-display font-normal">
            <SplitWords text={title} />
            {accent && (
              <>
                {' '}
                <SplitWords text={accent} delay={0.2} className="text-ember-600 italic" />
              </>
            )}
          </h1>

          {intro && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              {intro}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>

        {aside && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-5"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  )
}
