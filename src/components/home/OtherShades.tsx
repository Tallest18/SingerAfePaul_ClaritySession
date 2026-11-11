import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import portrait from '../../assets/img/afe-paul-portrait-web.jpg'
import scene from '../../assets/img/clarity-talks-scene.jpg'
import { shades, ytThumb } from '../../data/site'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const visuals: Record<string, { img?: string; position?: string }> = {
  '/clarity-talks': { img: scene, position: 'object-[60%_30%]' },
  '/music': { img: ytThumb('0-GxSOTu_oo', 'hq'), position: 'object-center' },
  '/research': {},
  '/about': { img: portrait, position: 'object-[50%_25%]' },
}

export function OtherShades() {
  return (
    <section className="border-t border-line bg-cream py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          number="07"
          eyebrow="Other Shades"
          title={
            <>
              More of <em className="text-ember-600">Singer Afe Paul.</em>
            </>
          }
          intro="Four more ways to experience the brand — conversations, music, research and the person behind it all."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {shades.map((s, i) => {
            const v = visuals[s.to]
            return (
              <RevealItem key={s.to}>
                <Link
                  to={s.to}
                  className="group relative flex h-[26rem] flex-col justify-end overflow-hidden rounded-3xl bg-navy-950 p-6 text-white"
                >
                  {v.img ? (
                    <img
                      src={v.img}
                      alt=""
                      loading="lazy"
                      className={`absolute inset-0 size-full object-cover opacity-70 transition-all duration-[1.2s] ease-[var(--ease-editorial)] group-hover:scale-110 group-hover:opacity-50 ${v.position}`}
                    />
                  ) : (
                    <ResearchArt />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                  <div className="absolute top-6 right-6 left-6 flex items-center justify-between">
                    <span className="eyebrow rounded-full bg-white/10 px-3 py-1.5 !text-[0.6rem] backdrop-blur">
                      Shade 0{i + 1}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-full bg-white text-navy-950 transition-all duration-500 group-hover:rotate-45 group-hover:bg-ember-600 group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <div className="relative">
                    <s.icon className="size-6 text-ember-300" />
                    <h3 className="mt-3 text-[1.55rem] leading-tight font-normal !text-white">{s.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-[0.92rem] leading-relaxed text-white/75 opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100 max-lg:max-h-32 max-lg:opacity-100">
                      {s.blurb}
                    </p>
                  </div>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

/** Abstract staff-line artwork for the research card. */
function ResearchArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 420"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full transition-transform duration-[1.2s] ease-[var(--ease-editorial)] group-hover:scale-110"
    >
      <defs>
        <radialGradient id="rg" cx="70%" cy="25%" r="70%">
          <stop offset="0" stopColor="#c2540a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0b1736" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="420" fill="url(#rg)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d={`M-10 ${110 + i * 18} C 80 ${70 + i * 18}, 200 ${170 + i * 18}, 310 ${120 + i * 18}`}
          stroke="#f4ac7a"
          strokeOpacity={0.5}
          fill="none"
          strokeWidth="1"
        />
      ))}
      {[
        [60, 128],
        [110, 132],
        [160, 150],
        [210, 158],
        [250, 140],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx="8" ry="6" fill="#f9cfae" transform={`rotate(-20 ${cx} ${cy})`} />
          <line x1={cx + 7} y1={cy - 2} x2={cx + 7} y2={cy - 40} stroke="#f9cfae" strokeWidth="1.5" />
        </g>
      ))}
      <circle cx="225" cy="290" r="60" fill="none" stroke="#5f7bb0" strokeOpacity="0.5" />
      <circle cx="225" cy="290" r="38" fill="none" stroke="#5f7bb0" strokeOpacity="0.35" />
      <line x1="267" y1="332" x2="300" y2="365" stroke="#5f7bb0" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}
