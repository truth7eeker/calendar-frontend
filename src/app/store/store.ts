import { configureStore } from '@reduxjs/toolkit';
import dates from '../../entities/calendar/model/reducers/datesSlice';
import selectedDate from '../../entities/calendar/model/reducers/selectedDateSlice';
import form from '../../entities/event-details/model/reducers/formSlice';
import bookedDate from '../../entities/event-details/model/reducers/bookedDateSlice'

export const store = configureStore({
   reducer: {
      dates,
      selectedDate,
      form,
      bookedDate
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


