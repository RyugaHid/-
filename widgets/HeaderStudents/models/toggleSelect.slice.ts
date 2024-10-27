import { createSlice } from "@reduxjs/toolkit"

const TOGGLE_SELECT_SLICE = "toggleSelect"

export interface SelectState {
  isSelectVisible: boolean
}

const initialState: SelectState = {
  isSelectVisible: false,
}

const slice = createSlice({
  name: TOGGLE_SELECT_SLICE,
  initialState,
  reducers: {
    toggleSelectVisibility: (state) => {
      state.isSelectVisible = !state.isSelectVisible
    },
  },
})

export const toggleSelectReducer = slice.reducer
export const { toggleSelectVisibility } = slice.actions
