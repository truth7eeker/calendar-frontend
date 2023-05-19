import { createSlice } from '@reduxjs/toolkit';
import { ISlot } from './datesSlice';

export interface ISelectedDate {
   day: number | null;
   year: number | null;
   month: number | null;
   timeSlots: Array<ISlot> | null;
   selectedSlot: ISlot | null
}

const initialState: ISelectedDate = {
   day: null,
   year: null,
   month: null,
   timeSlots: null,
   selectedSlot: null
};

const selectDateSlice = createSlice({
   name: 'selectedDate',
   initialState,
   reducers: {
      setDate(state, { payload }) {
         state.day = payload.day;
         state.year = payload.year;
         state.month = payload.month;
         state.timeSlots = payload.timeSlots;
      },
      setSlot(state, { payload }) {
         state.selectedSlot = payload
      },
     
   },
});

export const { setDate, setSlot } = selectDateSlice.actions;

export default selectDateSlice.reducer;
