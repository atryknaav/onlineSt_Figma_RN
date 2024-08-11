import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface codeProp{
    code: string
}

const initialState: codeProp = {code: ''}
export const codeSlice = createSlice({
  name: 'codeSlice',
  initialState: initialState,
  reducers: {
    update (state, actions: PayloadAction<string>){
        state.code = actions.payload;
    }
    }
  },
)

export const {update} = codeSlice.actions;

export default codeSlice.reducer