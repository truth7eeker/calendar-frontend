import React from 'react';
import styles from './styles.module.scss';
import { IoTimeSharp, IoCalendarClear, IoEarth } from 'react-icons/io5';
import moment from 'moment';
import { useLocation } from 'react-router';
import { getLocalStorage } from '../../../../shared';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store/store';

export function CalendarLeft() {

   const savedDate = getLocalStorage('date') || useSelector((state:RootState) => state.selectedDate).selectedSlot 
  
   const date =  savedDate && moment([
      savedDate.year.toString(),
      savedDate.month.toString(),
      savedDate.day.toString(),
   ]).format('dddd, MMMM DD, YYYY');

   const time = getLocalStorage('slot')?.time || useSelector((state: RootState) => state.selectedDate).selectedSlot;

   const duration = time && moment(time, 'h:mm').add(15, 'minutes').format('h:mm');
  
   const path = useLocation().pathname

   return (
      <div className={styles.intro}>
         <h3>Conversational lesson</h3>
         <p className={styles.intro__icons}>
            <IoTimeSharp />
            15 min
         </p>
         <p className={styles.intro__icons} style={{display: path === '/' ? 'none' : 'flex'}}>
            <IoCalendarClear />
             {time} - {duration}, {date}
         </p>
         <p className={styles.intro__icons} style={{display: path === '/' ? 'none' : 'flex'}}>
            <IoEarth />
            Moscow Time
         </p>
         <p>Conversational practice in English one-on-one.</p>
      </div>
   );
}
