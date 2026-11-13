import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import About from './pages/About'
import ClarityTalks from './pages/ClarityTalks'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Music from './pages/Music'
import NotFound from './pages/NotFound'
import Research from './pages/Research'

// Pages are bundled up front (the whole site is small), so moving between pages
// never waits on a network request and can't get stuck on an empty loading state.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clarity-talks" element={<ClarityTalks />} />
          <Route path="music" element={<Music />} />
          <Route path="research" element={<Research />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
