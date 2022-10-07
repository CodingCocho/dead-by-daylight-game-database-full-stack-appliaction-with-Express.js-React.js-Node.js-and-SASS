import { configureStore } from '@reduxjs/toolkit'
import killersReducer from './Killerslice';
import survivorsReducer from './Survivorslice'

export default configureStore(
  {
    reducer: 
    {
      killers: killersReducer,
      survivors: survivorsReducer
    }
  })