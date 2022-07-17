import { useCallback, useEffect } from 'react'
import { UIOverlay } from '../../components/UIOverlay'
import { useDispatch } from '../../hooks/store'
import { load, attachTo, destroy } from '../../store/slices/playerSlice'

interface VideoRouteProps {
  videoId?: string
}

function VideoRoute({ videoId }: VideoRouteProps) {
  const dispatch = useDispatch()
  const onBackdropClick = useCallback(
    // @ts-expect-error
    (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
    },
    []
  )
  // on mount
  useEffect(() => {
    dispatch(attachTo('#player'))
    if (videoId !== null && videoId !== undefined) {
      dispatch(load(videoId))
    }
    return () => {
      dispatch(destroy())
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
