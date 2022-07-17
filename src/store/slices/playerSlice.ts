import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {
  IYTPlayer,
  PlayerStates,
  YTPlayer as YTPlayerService,
} from '../../services/YTPlayer'
// @ts-expect-error
import { container } from '../../../inversify.config.ts'
import { TYPES } from '../../../types'

interface PlayerState {
  state: PlayerStates
  isAttached: boolean
  isLoaded: boolean
  isPlaying: boolean
}

const YTPlayer: YTPlayerService = container.get<IYTPlayer>(TYPES.YTPlayer)

const initialState: PlayerState = {
  state: PlayerStates.Unstarted,
  isAttached: false,
  isLoaded: false,
  isPlaying: false,
}

const playAsync = createAsyncThunk('player/play', async () => {
  return await YTPlayer.play()
})

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    attachTo(state, action) {
      const attached = YTPlayer.attachTo(action.payload)
      if (attached) {
        state.isAttached = true
      }
      return state
    },
    load(state, action) {
      const loaded = YTPlayer.load(action.payload)
      if (loaded) {
        state.isLoaded = true
      }
      return state
    },
    destroy() {
      YTPlayer.destroy()
    },
  },
  extraReducers: (builder) => {
    // Play
    builder.addCase(playAsync.fulfilled, (state) => {
      state.isPlaying = true
      return state
    })
  },
})

export { playAsync }

export const { load, destroy, attachTo } = playerSlice.actions

export const selectPlayerState = (state: RootState) => state.player

export default playerSlice.reducer
