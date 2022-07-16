import YTPlayer from 'yt-player'

enum PlayerStates {
  Unstarted = 'unstarted',
  Ended = 'ended',
  Playing = 'playing',
  Paused = 'paused',
  Buffering = 'buffering',
  Cued = 'cued',
}

class YTPlayerSingleton {
  private player: YTPlayer

  constructor() {}

  attachTo(id: string): void {
    this.player = new YTPlayer(id, {
      autoplay: true,
      modestBranding: true,
      width: window.visualViewport.width,
      height: window.visualViewport.height,
    })
  }

  load(videoId: string): void {
    this.player.load(videoId)
  }

  togglePlayPause() {
    console.log('togglePlayPause()')
    // @ts-ignore
    const state: PlayerStates = this.player.getState()
    console.log({ state })
    if (
      state === PlayerStates.Paused ||
      state === PlayerStates.Unstarted ||
      state === PlayerStates.Cued
    ) {
      this.play()
      console.log('play() called')
    } else if (
      state === PlayerStates.Playing ||
      state === PlayerStates.Buffering
    ) {
      this.pause()
    }
  }

  play() {
    this.player.play()
  }

  pause() {
    this.player.pause()
  }

  destroy() {
    if (this.player !== undefined) {
      this.player.destroy()
    }
  }

  get isReady() {
    return this.player !== undefined
  }

  get isPlaying() {
    if (this.isReady) {
      return this.player.getState() === PlayerStates.Playing
    } else {
      return false
    }
  }
}

const y = new YTPlayerSingleton()

export { y as YTPlayer }
