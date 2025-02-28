import {configureStore} from '@reduxjs/toolkit'
import themeSlice from "../slice/themeSlice"

const stores = configureStore({
  reducer:{
    theme:themeSlice
  }
})

export default stores