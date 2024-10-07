import {combineReducers, configureStore} from '@reduxjs/toolkit'

import productReducer from '../store/slices/productSlices'
import productFilter from './slices/productFilter'

const rootReducer = combineReducers({
  product: productReducer,
  filter: productFilter,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
