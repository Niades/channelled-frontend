import { PlayIcon, PauseIcon } from '@heroicons/react/outline'

interface PlayPauseButtonProps {
  isPlaying: boolean
  onClick: () => void
}

function PlayPauseButton({ isPlaying, onClick }: PlayPauseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white w-12 h-12 rounded-full"
    >
      {isPlaying && <PauseIcon />}
      {!isPlaying && <PlayIcon />}
    </button>
  )
}

export { PlayPauseButton }
