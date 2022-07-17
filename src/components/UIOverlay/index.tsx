import { playAsync } from '../../store/slices/playerSlice'
import { useDispatch, useSelector } from '../../hooks/store'

function UIOverlay() {
  const dispatch = useDispatch()
  const isPlaying = useSelector((state) => state.player.isPlaying)
  return (
    <section>
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
    </section>
  )
}

export { UIOverlay }
