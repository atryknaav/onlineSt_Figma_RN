import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface codeProp{
    name: string,
    lastname: string,
    phone: string
}

const initialState: codeProp = {name: '', lastname: '', phone: ''}
export const regSlice = createSlice({
  name: 'regSlice',
  initialState: initialState,
  reducers: {
    updateName (state, actions: PayloadAction<string>){
        state.name = actions.payload;
    },
    updateLast (state, actions: PayloadAction<string>){
        state.lastname = actions.payload;
    },
    updatePhone (state, actions: PayloadAction<string>){
        state.phone = actions.payload;
    },
    }
  },
)

export const {updateLast, updatePhone, updateName} = regSlice.actions;

export default regSlice.reducer