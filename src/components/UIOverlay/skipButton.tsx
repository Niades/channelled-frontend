import { FastForwardIcon } from '@heroicons/react/outline'

interface SkipButtonProps {
  onClick: () => void
}

function SkipButton({ onClick }: SkipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white w-12 h-12 rounded-full"
    >
      <FastForwardIcon />
    </button>
  )
}

export { SkipButton }
