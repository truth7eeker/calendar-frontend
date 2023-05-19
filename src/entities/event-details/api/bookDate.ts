import { getLocalStorage } from '../../../shared';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = process.env.REACT_APP_BASE_URL as RequestInfo;

export const bookDate = createAsyncThunk('bookedDate/bookDate', async () => {
   const dateData = { ...getLocalStorage('date'), selectedSlot: getLocalStorage('slot') };
   const formData = getLocalStorage('form');

   const response = await fetch(`${BASE_URL}/book-date`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ dateData, formData }),
   });

   const data = await response.json();

   return data;
});
