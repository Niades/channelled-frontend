import { playAsync, pause } from '../../store/slices/playerSlice'
import { useDispatch, useSelector } from '../../hooks/store'
import { PlayPauseButton } from './playPauseButton'
import { SkipButton } from './skipButton'

function UIOverlay() {
  const dispatch = useDispatch()
  const isPlaying = useSelector((state) => state.player.isPlaying)
  return (
    <section className="transition-opacity bg-none">
      <div
        id="top-gradient"
        className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black"
      />
      <div
        id="bottom-gradient"
        className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black"
      />
      <section>
        <h1 className="fixed text-white text-2xl opacity-100 top-3 left-5">
          Now watching
        </h1>
      </section>
      {!isPlaying && (
        <button
          onClick={() => {
            dispatch(playAsync())
          }}
          type="button"
          className="absolute opacity-100 w-64 h-16 px-4 py-2 text-2xl bg-red-400 rounded top-0 right-0 bottom-0 left-0 m-auto"
        >
          Start Watching
        </button>
      )}
      <section>
        <nav className="fixed bottom-0 left-0 right-0 opacity-100 z-50">
          <PlayPauseButton
            isPlaying={isPlaying}
            onClick={() => {
              if (isPlaying) {
                dispatch(pause())
              } else {
                dispatch(playAsync())
              }
            }}
          />
          <SkipButton onClick={() => {}} />
        </nav>
      </section>
    </section>
  )
}

export { UIOverlay }
