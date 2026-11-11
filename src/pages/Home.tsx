import { ClarityFeature } from '../components/home/ClarityFeature'
import { Hero } from '../components/home/Hero'
import { IntentionMotivation } from '../components/home/IntentionMotivation'
import { MusicTeaser } from '../components/home/MusicTeaser'
import { Narrative } from '../components/home/Narrative'
import { Needs } from '../components/home/Needs'
import { OtherShades } from '../components/home/OtherShades'
import { ContactCTA } from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <title>Singer Afe Paul — A one-stop junction for anything music</title>
      <Hero />
      <Narrative />
      <IntentionMotivation />
      <Needs />
      <ClarityFeature />
      <MusicTeaser />
      <OtherShades />
      <ContactCTA />
    </>
  )
}
