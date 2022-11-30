import { combineReducers } from '@reduxjs/toolkit'
import { tasksSlice } from './tasksSlice'

export const reducer = combineReducers({
  tasksSlice: tasksSlice.reducer,
})