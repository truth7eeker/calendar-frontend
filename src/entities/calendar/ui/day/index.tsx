import { useState } from 'react';
import { setDate } from '../../model';
import { useDispatch, useSelector } from 'react-redux';
import { store, RootState } from '../../../../app/store/store';
import styles from './styles.module.scss';
import { isPrimitive, setLocalStorage } from '../../../../shared';

interface IProp {
   day: any;
   daysOfMonth: Array<any>;
}

export function Day({ day, daysOfMonth }: IProp) {
   const dispatch = useDispatch<typeof store.dispatch>();
   const { selectedDate } = useSelector((store: RootState) => store);
   const [isSelected, setIsSelected] = useState(false);
   !isPrimitive(day) ? (day.selected = isSelected) : null;

   daysOfMonth.map((item) => {
      if (isPrimitive(item)) return;
      typeof item === 'object' && item.day === selectedDate.day && item.month === selectedDate.month
         ? (item.selected = true)
         : (item.selected = false);
   });

   const applyStyle = () => {
      let style;
      const isBooked = !isPrimitive(day) && day.timeSlots.every((slot:any) => slot.booked)
      if (isPrimitive(day) || isBooked) {
         style = styles.calendar__day;
      } else if (day.selected) {
         style = styles.calendar__day__selected;
      } else {
         style = styles.calendar__day__active;
      }
      return style;
   };

   const selectDate = () => {
      if (isPrimitive(day)) return;
      else {
         const found = daysOfMonth.find((item) => !isPrimitive(item) && item.day === day.day);
         setIsSelected(!isSelected);
         dispatch(setDate(found));
         setLocalStorage('date', found)
      }
   };
   return (
      <div className={applyStyle()} onClick={() => selectDate()} key={day}>
         {typeof day === 'undefined' ? '' : typeof day === 'number' ? day : day.day}
      </div>
   );
}
