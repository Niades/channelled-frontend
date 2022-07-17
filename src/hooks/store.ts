import {
  useDispatch as useDispatchReact,
  useSelector as useSelectorReact,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useDispatch: () => AppDispatch = useDispatchReact
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorReact
