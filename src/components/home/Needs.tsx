import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { NeedsList } from '../sections/NeedsList'

export function Needs() {
  return (
    <section id="needs" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="04"
            eyebrow="The problems to solve"
            title={
              <>
                What do you <span className="text-ember-600">need</span> today?
              </>
            }
            intro="Nine everyday needs, one junction. Pick yours — a ready-to-send message is one tap away."
          />
          <Reveal delay={0.1} className="shrink-0">
            <p className="max-w-[16rem] font-serif text-lg leading-snug text-muted lg:text-right">
              “A one-stop junction for anything music!”
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <NeedsList />
        </div>
      </div>
    </section>
  )
}
