import { RotateCw } from 'lucide-react'
import { Component, type ErrorInfo, type ReactNode } from 'react'

type State = { error: Error | null }

/** If a page ever fails to render, show a way back instead of a blank screen. */
export class PageErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page failed to render:', error, info.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow text-ember-600">Something went wrong</p>
        <h1 className="mt-4 text-3xl md:text-4xl">This page didn’t load properly.</h1>
        <p className="mt-4 max-w-md text-muted">Please reload — it usually works on the second try.</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 font-medium text-white hover:bg-ember-600"
        >
          <RotateCw className="size-4" /> Reload page
        </button>
      </section>
    )
  }
}
