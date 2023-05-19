import React from 'react';
import styles from './styles.module.scss';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { CalendarLogic } from '../../lib';
import { Day } from '../../ui';

export function CalendarRight() {
   const { daysOfWeek, daysOfMonth, monthName, year, increaseMonth, decreaseMonth, dates, today } =
      CalendarLogic();

   for (let i = 0; i < daysOfMonth.length; i++) {
      for (let j = 0; j < dates.length; j++) {
         daysOfMonth[i] === dates[j].day && dates[j].day > today
            ? (daysOfMonth[i] = { ...dates[j], selected: false })
            : daysOfMonth[i];
      }
   }

   return (
      <div>
         <h4>Select a Date & Time</h4>
         <div className={styles.calendar}>
            <header>
               <>
                  {monthName} {year}
               </>
               <div>
                  <IconContext.Provider value={{ size: '1.5em', color: 'grey' }}>
                     <MdOutlineKeyboardArrowLeft onClick={decreaseMonth} />{' '}
                     <MdOutlineKeyboardArrowRight onClick={increaseMonth} />
                  </IconContext.Provider>
               </div>
            </header>
            <div className={styles.calendar__grid}>
               {daysOfWeek.map((weekday) => (
                  <div key={weekday}>{weekday}</div>
               ))}
               {daysOfMonth.map((day, id) => (
                  <Day day={day} daysOfMonth={daysOfMonth} key={id}/>
               ))}
            </div>
         </div>
         <div />
      </div>
   );
}
