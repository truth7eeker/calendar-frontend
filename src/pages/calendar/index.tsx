import React from 'react';
import { CalendarLeft, CalendarRight, Header, TimeSlots } from '../../entities/calendar';
import styles from './styles.module.scss';
import { store, RootState } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { Divider } from '../../shared';


function Calendar() {
   const { selectedDate } = useSelector((store: RootState) => store);
   return (
      <div>
         <Header />
         <div
            className={
               `${styles.wrapper}  ${selectedDate.day
                  ? styles.wrapper__withSlots
                  : styles.wrapper__withoutSlots}`
            }>
            <CalendarLeft />
            <Divider />
            <CalendarRight />
            <TimeSlots />
         </div>
      </div>
   );
}

export default Calendar;
