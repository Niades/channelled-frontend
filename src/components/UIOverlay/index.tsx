import { YTPlayer } from '../../services/YTPlayer'

function UIOverlay() {
  return (
    <section>
      {!YTPlayer.isPlaying && (
        <button
          onClick={() => YTPlayer.play()}
          type="button"
          className="absolute opacity-100 w-64 h-16 px-4 py-2 text-2xl bg-red-400 rounded top-0 right-0 bottom-0 left-0 m-auto"
        >
          Start Watching
        </button>
      )}
    </section>
  )
}

export { UIOverlay }
