import React from 'react';
import styles from './styles.module.scss';
import { setSlot } from '../../model';
import { useDispatch, useSelector } from 'react-redux';
import { MainBtn, SecondaryBtn, setLocalStorage } from '../../../../shared';
import { RootState } from '../../../../app/store/store';

export function Slot({ slot }: any) {
   const { selectedSlot } = useSelector((state: RootState) => state.selectedDate);

   const dispatch = useDispatch();

   const handleSlot = () => {
      dispatch(setSlot(slot));
      setLocalStorage('slot', slot)
   };

   return (
      <>
         {selectedSlot === slot ? (
            <div className={styles.slot__confirm}>
               <SecondaryBtn text={slot.time} />
               <MainBtn text="Confirm" next="event" handleValidation={() => false}/>
            </div>
         ) : (
            <div onClick={handleSlot} className={styles.slot}>
               {slot.time}
            </div>
         )}
      </>
   );
}
