import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeName } = userSlice.actions

export default userSlice.reducer
