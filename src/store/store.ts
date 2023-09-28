import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from './pizzaSlice'

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store