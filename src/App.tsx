import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const ClarityTalks = lazy(() => import('./pages/ClarityTalks'))
const Music = lazy(() => import('./pages/Music'))
const Research = lazy(() => import('./pages/Research'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Page({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-[70vh]" />}>{children}</Suspense>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clarity-talks" element={<Page><ClarityTalks /></Page>} />
          <Route path="music" element={<Page><Music /></Page>} />
          <Route path="research" element={<Page><Research /></Page>} />
          <Route path="about" element={<Page><About /></Page>} />
          <Route path="contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
