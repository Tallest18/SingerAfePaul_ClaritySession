import { ArrowDown, Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import portrait from '../../assets/img/afe-paul-portrait-web.jpg'
import monogram from '../../assets/img/monogram-light.png'
import { contact, featuredRelease } from '../../data/site'
import { Button } from '../ui/Button'
import { SplitWords } from '../ui/Reveal'
import { RotatingBadge } from '../ui/RotatingBadge'
import { SocialIcons } from '../ui/SocialIcons'
import { useVideoPlayer } from '../video/context'

const ease = [0.2, 0.7, 0.2, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const play = useVideoPlayer()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const frameY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-line bg-white">
      {/* backdrop: faint editorial grid + brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,var(--color-line)_1px,transparent_1px)] [background-size:calc(100%/6)_100%] [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute top-10 -left-40 size-[28rem] rounded-full bg-ember-100 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full bg-navy-100/80 blur-3xl" />

      <div className="container-x relative grid grid-cols-1 gap-14 pt-12 pb-20 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
        {/* copy */}
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow flex items-center gap-3 text-ember-600"
          >
            <span className="h-px w-10 bg-ember-500" />
            Singer Afe Paul · A music brand
          </motion.p>

          <h1 className="mt-7 text-display font-normal">
            <SplitWords text="Meaningful music." className="block" delay={0.1} />
            <span className="block">
              <SplitWords text="Wholesome" delay={0.3} />{' '}
              <SplitWords text="musicianship." delay={0.4} className="text-ember-600 italic" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Music education, choir training, ministration, gospel music research, consultancy and honest
            conversations — <span className="text-ink">a one-stop junction for anything music.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/#needs" icon={<ArrowDown className="size-4" />}>
              What do you need?
            </Button>
            <Button to="/music" variant="outline">
              Listen to the music
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6"
          >
            <p className="text-[0.9rem] text-muted">
              <span className="font-medium text-ink">@{contact.handle}</span> on every social media
            </p>
            <SocialIcons
              size="sm"
              itemClassName="size-9 border-line-strong text-navy-900 hover:bg-navy-950 hover:text-white hover:border-navy-950"
            />
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          {/* offset arch frame */}
          <motion.div
            style={{ y: frameY }}
            aria-hidden
            className="absolute top-8 -right-3 -bottom-3 left-8 rounded-t-full border border-ember-500/70 sm:-right-5 sm:-bottom-5 sm:left-12"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-navy-100 shadow-[0_40px_80px_-40px_rgba(11,23,54,0.55)]">
            <motion.img
              style={{ y: imgY }}
              src={portrait}
              alt="Aduragbemi Paul Afe — Singer Afe Paul"
              className="size-full scale-110 object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/50 to-transparent" />
          </div>
          <p className="eyebrow absolute top-1/2 -right-4 hidden -translate-y-1/2 !text-[0.55rem] !leading-none whitespace-nowrap text-muted [writing-mode:vertical-rl] sm:block">
            Photo · King David
          </p>

          {/* spinning badge */}
          <div className="absolute -top-2 -left-4 sm:-left-10">
            <RotatingBadge
              text="Singer Afe Paul • Meaningful Music • "
              className="size-28 bg-navy-950 text-white shadow-xl sm:size-32"
            >
              <img src={monogram} alt="" className="h-11 w-auto sm:h-12" />
            </RotatingBadge>
          </div>

          {/* now playing card */}
          <button
            type="button"
            onClick={() => play(featuredRelease)}
            className="group absolute -bottom-6 left-4 flex animate-float items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-3 pr-6 text-left shadow-[0_24px_50px_-24px_rgba(11,23,54,0.5)] backdrop-blur-xl sm:-left-10"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-ember-600 text-white transition-transform group-hover:scale-105">
              <Play className="size-5 translate-x-[1px] fill-current" />
            </span>
            <span>
              <span className="eyebrow block !text-[0.6rem] text-ember-600">New release · {featuredRelease.year}</span>
              <span className="mt-0.5 block font-serif text-lg leading-tight text-ink">{featuredRelease.title}</span>
              <span className="block text-[0.8rem] text-muted">{featuredRelease.credit}</span>
            </span>
            <span className="ml-1 hidden items-end gap-[3px] sm:flex" aria-hidden>
              {[0.6, 1, 0.45, 0.8].map((h, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-ember-500"
                  animate={{ height: [`${h * 18}px`, `${(1 - h) * 18 + 4}px`, `${h * 18}px`] }}
                  transition={{ duration: 1.1 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
