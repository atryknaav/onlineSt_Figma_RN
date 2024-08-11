import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface codeProp{
    name: string,
    lastname: string,
    phone: string,
    allowed: boolean
}

const initialState: codeProp = {name: '', lastname: '', phone: '', allowed: false}
export const regSlice = createSlice({
  name: 'regSlice',
  initialState: initialState,
  reducers: {
    updateName (state, actions: PayloadAction<string>){
        state.name = actions.payload;
        state.allowed = state.name.length != 0 && state.lastname.length != 0 && state.phone.length == 15;
    },
    updateLast (state, actions: PayloadAction<string>){
        state.lastname = actions.payload;
        state.allowed = state.name.length != 0 && state.lastname.length != 0 && state.phone.length == 15;
    },
    updatePhone (state, actions: PayloadAction<string>){
        state.phone = actions.payload;
        state.allowed = state.name.length != 0 && state.lastname.length != 0 && state.phone.length == 15;
    },
    }
  },
)

export const {updateLast, updatePhone, updateName} = regSlice.actions;

export default regSlice.reducer