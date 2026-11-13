import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SplitWords } from '../components/ui/Reveal'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-32 md:py-44">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 size-[30rem] rounded-full bg-ember-100 blur-3xl" />
      <div className="container-x relative text-center">
        <title>Page not found — Singer Afe Paul</title>
        <p className="eyebrow text-ember-600">404 · Off key</p>
        <h1 className="mt-6 text-display font-extrabold">
          <SplitWords text="This note" /> <SplitWords text="isn’t on the staff." delay={0.15} className="text-ember-600" />
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg text-muted">The page you’re looking for has moved or never existed.</p>
        <div className="mt-10 flex justify-center">
          <Button to="/" variant="navy" icon={<ArrowLeft className="size-4" />}>
            Back home
          </Button>
        </div>
      </div>
    </section>
  )
}
