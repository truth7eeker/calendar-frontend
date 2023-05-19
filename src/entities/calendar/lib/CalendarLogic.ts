import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDates } from '../api';
import { store, RootState } from '../../../app/store/store';


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function CalendarLogic() {
   // month as an index (0-11), year as number
   const [month, setMonth] = useState(moment().month());
   const [year, setYear] = useState(moment().year());
   // month as string
   const monthName = moment().month(month).format('MMMM');
   const today = Number(moment().format('D'));

   const startOfMonth = Number(moment().month(month).date(1).format('d')) - 1;
   const endOfMonth = Number(
      moment()
         .month(month + 1)
         .date(0)
         .format('DD'),
   );
   const daysOfMonth = [...Array(startOfMonth < 0 ? 6 : startOfMonth)];

   //dates from mongodb
   const { dates } = useSelector((state: RootState) => state.dates);
   const dispatch = useDispatch<typeof store.dispatch>();


   for (let i = 1; i <= endOfMonth; i++) {
      daysOfMonth.push(i).toString();
   }

   const increaseMonth = () => {
      const isYearPlus = (month + 1) % 12 === 0;
      setMonth((prev) => prev + 1);

      if (isYearPlus) {
         setYear((prev) => prev + 1);
      }
   };

   const decreaseMonth = () => {
      const isBefore = moment([year, month]).isBefore(moment());
      const isYearMinus = month % 12 === 0;

      if (isBefore) {
         return;
      }

      if (!isBefore && isYearMinus) {
         setYear((prev) => prev - 1);
      }
      setMonth((prev) => prev - 1);
   };

   useEffect(() => {
      dispatch(fetchDates({ month, year }));
   }, [month, year]);

   return {
      daysOfWeek,
      daysOfMonth,
      monthName,
      year,
      increaseMonth,
      decreaseMonth,
      dates,
      today,
   };
}
