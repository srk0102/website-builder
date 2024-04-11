import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducer/counter"

export default configureStore({
  reducer: {
    store: countReducer
  }
})
