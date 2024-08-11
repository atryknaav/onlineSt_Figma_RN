import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface codeProp{
    code: string
}

const initialState: codeProp = {code: 'm'}
export const receivedCodeSlice = createSlice({
  name: 'receivedCodeSlice',
  initialState: initialState,
  reducers: {
    updateReceived (state, actions: PayloadAction<string>){
        state.code = actions.payload;
    }
    }
  },
)

export const {updateReceived} = receivedCodeSlice.actions;

export default receivedCodeSlice.reducer