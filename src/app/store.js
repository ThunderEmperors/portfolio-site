import { configureStore } from "@reduxjs/toolkit";
import showcaseReducer from '../features/showcase/showcaseSlice';

export default configureStore({
  reducer:{
    showcase: showcaseReducer
  }
})