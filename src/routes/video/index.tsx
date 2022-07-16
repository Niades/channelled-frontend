import { useCallback, useEffect, useState } from 'react'
import { YTPlayer } from '../../services/YTPlayer'
import { UIOverlay } from '../../components/UIOverlay'

interface VideoRouteProps {
  videoId?: string
}

function VideoRoute({ videoId }: VideoRouteProps) {
  const onBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
    },
    []
  )
  // on mount
  useEffect(() => {
    YTPlayer.attachTo('#player')
    if (videoId !== null && videoId !== undefined) {
      YTPlayer.load(videoId)
      YTPlayer.play()
    }
    return () => {
      if (YTPlayer.isReady) {
        YTPlayer.destroy()
      }
    }
  }, [])
  return (
    <main className="w-screen h-screen">
      <div
        id="backdrop"
        className="absolute top-0 right-0 bottom-0 left-0 opacity-100"
        onClick={onBackdropClick}
      />
      <UIOverlay />
      <div id="player" />
    </main>
  )
}

export { VideoRoute }
