import { createSlice } from '@reduxjs/toolkit';
import { bookDate } from '../../api/bookDate';

interface IStatus {
   _id: number | null;
   status: null | string;
}

const initialState: IStatus = {
   _id: null,
   status: null,
};

const bookedDateSlice = createSlice({
   name: 'bookedDate',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(bookDate.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(bookDate.fulfilled, (state, action) => {
         state.status = 'success';
         state._id = action.payload;
      });
      builder.addCase(bookDate.rejected, (state) => {
         state.status = 'error';
      });
   },
});

export default bookedDateSlice.reducer;
