import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'


const initialState = {
  isauthenticated: false,
  screenloading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("fulfilled");

      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.log("rejected");

      })
  },
})

export const { } = userSlice.actions

export default userSlice.reducer
