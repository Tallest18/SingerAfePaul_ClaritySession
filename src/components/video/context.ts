import { createContext, useContext } from 'react'

export type PlayableVideo = { id: string; title: string; credit?: string }

export const VideoPlayerContext = createContext<(video: PlayableVideo) => void>(() => {})

/** Returns a function that opens the site-wide video lightbox. */
export const useVideoPlayer = () => useContext(VideoPlayerContext)
