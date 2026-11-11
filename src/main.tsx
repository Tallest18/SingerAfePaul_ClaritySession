import { ReactLenis } from 'lenis/react'
import { MotionConfig } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { VideoPlayerProvider } from './components/video/VideoPlayerProvider'
import './index.css'

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reducedMotion, anchors: false }}>
      <MotionConfig reducedMotion="user">
        <VideoPlayerProvider>
          <App />
        </VideoPlayerProvider>
      </MotionConfig>
    </ReactLenis>
  </StrictMode>,
)
