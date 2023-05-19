import React from 'react';
import moment from 'moment';
import { Slot } from '../../';
import { useSelector } from 'react-redux';
import { store, RootState } from '../../../../app/store/store';
import styles from './styles.module.scss';

export function TimeSlots({nextPage}: any) {
   const { selectedDate } = useSelector((store: RootState) => store);
   const { day, month, year } = selectedDate;
   const date = day && month && year && moment([year, month, day]);

   const copySlots = selectedDate.timeSlots && [
      ...selectedDate.timeSlots.filter((slot) => !slot.booked),
   ];


   return (
      <div className={styles.slots__wrapper}>
         <p>{date && date.format('dddd, MMMM DD')}</p>
         {copySlots && copySlots.map((slot) => <Slot key={slot.time} slot={slot} nextPage={nextPage}/>)}
      </div>
   );
}
