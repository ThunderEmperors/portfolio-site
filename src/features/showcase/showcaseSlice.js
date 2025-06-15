import { createSlice } from "@reduxjs/toolkit";

export const showcaseSlice = createSlice({
  name: 'showcase',
  initialState:{
    showPane : false,
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
    handleSectionClick: (state, action) => {
      state.sections[action.payload].isOpen = !state.sections[action.payload].isOpen; 
    },
    handleOpenCloseClick: (state) => {
      state.showPane = !state.showPane
    },
    handleResetPane: (state) => {
      state.showPane = false;
    }
  }
})

export const { handleSectionClick, handleOpenCloseClick, handleResetPane } = showcaseSlice.actions

export default showcaseSlice.reducer