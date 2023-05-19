import { createSlice } from '@reduxjs/toolkit';

export interface IForm {
   name: string;
   email: string;
   message: string;
   tg: string
}

const initialState = {
   name: '',
   email: '',
   message: '',
   tg: ''
};

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      setForm(state, { payload }) {
         state = payload;
      },
   },
});

export const { setForm } = formSlice.actions;

export default formSlice.reducer;
