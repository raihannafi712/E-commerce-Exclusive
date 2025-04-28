import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './components/slice/ProductSlice';   /* No { } for this**** */



export const store = configureStore({
  reducer: {
    product:productSlice,
  },
})