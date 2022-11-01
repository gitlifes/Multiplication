import { configureStore } from "@reduxjs/toolkit";
import countReduser from '../features/count/countSlice'


export const store = configureStore({
  reducer: {
    count: countReduser
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch