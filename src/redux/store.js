import { configureStore } from '@reduxjs/toolkit'
import countReducer from "../redux/slices/countSlice"

export default configureStore({
  reducer: {
    count: countReducer
  },
})