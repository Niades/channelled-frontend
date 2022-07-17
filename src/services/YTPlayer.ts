import { injectable } from 'inversify'
import YTPlayer from 'yt-player'
import { container } from '../../inversify.config'
import { TYPES } from '../../types'

const MAX_PLAY_RETRIES_COUNT = 25

export enum PlayerStates {
  Unstarted = 'unstarted',
  Ended = 'ended',
  Playing = 'playing',
  Paused = 'paused',
  Buffering = 'buffering',
  Cued = 'cued',
}

export interface IYTPlayer {
  attachTo(id: string): void
  load(videoId: string): void
  play(): void
  pause(): void
  destroy(): void
}

@injectable()
class MYTPlayer implements IYTPlayer {
  private player: YTPlayer | undefined
  private videoId: string | undefined

  constructor() {}

  attachTo(id: string): boolean {
    try {
      this.player = new YTPlayer(id, {
        autoplay: true,
        modestBranding: true,
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      })
      this.player.on('error', (e: any) => {
        console.error('[YTPlayer]: Error = ', e)
      })
      return true
    } catch (e: any) {
      console.error('[YTPlayer]: Error = ', e)
      return false
    }
  }

  load(videoId: string): boolean {
    try {
      if (this.player !== undefined) {
        this.player.load(videoId)
        this.videoId = videoId
        return true
      } else {
        return false
      }
    } catch (e: any) {
      console.error('[YTPlayer]: Error = ', e)
      return false
    }
  }

  togglePlayPause() {
    // @ts-expect-error
    const state: PlayerStates = this.player.getState()
    if (
      state === PlayerStates.Paused ||
      state === PlayerStates.Unstarted ||
      state === PlayerStates.Cued
    ) {
      this.play()
    } else if (
      state === PlayerStates.Playing ||
      state === PlayerStates.Buffering
    ) {
      this.pause()
    }
  }

  play() {
    if (this.player !== undefined) {
      this.player.play()
    }
  }

  pause() {
    if (this.player !== undefined) {
      this.player.pause()
    }
  }

  destroy() {
    if (this.player !== undefined) {
      this.player.destroy()
    }
  }

  get isPlaying() {
    if (this.player !== undefined) {
      return this.player.getState() === PlayerStates.Playing
    } else {
      return false
    }
  }
}

const singleton = new MYTPlayer()
container.bind<IYTPlayer>(TYPES.YTPlayer).toConstantValue(singleton)

export default singleton
export { MYTPlayer as YTPlayer }
