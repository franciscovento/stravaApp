import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userInfo/userSlice'
import activitiesReducer from './slices/activitiesInfo/activitiesSlice'

export const store = configureStore({
  reducer: {
    userReducer,
    activitiesReducer
    
  }
})