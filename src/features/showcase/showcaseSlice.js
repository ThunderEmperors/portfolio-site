import { createSlice } from "@reduxjs/toolkit";

export const showcaseSlice = createSlice({
  name: 'showcase',
  initialState:{
    sections : [
      {
        'id' : 1,
        'isOpen' : false
      },
      {
        'id' : 2,
        'isOpen' : false
      }
    ]
  },
  reducers: {
    handleclick: (state, action) => {
      console.log(action.payload);
      state.sections[action.payload].isOpen = !state.sections[action.payload].isOpen; 
      console.log(state.sections[action.payload].isOpen);
    }
  }
})

export const { handleclick } = showcaseSlice.actions

export default showcaseSlice.reducer