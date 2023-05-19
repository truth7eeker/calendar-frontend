import { createSlice } from '@reduxjs/toolkit';
import { fetchDates } from '../../api/fetchDates';

export interface ISlot {
   time: string;
   booked: boolean;
   _id: string;
}

interface IDate {
   _id: string;
   year: number;
   month: number;
   day: number;
   timeSlots: Array<ISlot>;
}

interface IDates {
   dates: Array<IDate>;
   status: null | string;
}

const initialState: IDates = {
   dates: [],
   status: null,
};

const datesSlice = createSlice({
   name: 'dates',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchDates.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(fetchDates.fulfilled, (state, action) => {
         state.status = 'success';
         state.dates = action.payload;
      });
      builder.addCase(fetchDates.rejected, (state, action) => {
         state.status = 'error';
      });
   },
});

export default datesSlice.reducer;
