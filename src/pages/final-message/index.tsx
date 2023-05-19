import React from 'react';
import { MainBtn } from '../../shared';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import styles from './styles.module.scss';

function FinalMessage() {
   const { status } = useSelector((state: RootState) => state.bookedDate);
   return (
      <div className={styles.wrapper}>
         <p>
            {status === 'success'
               ? "Thank you! Your lesson's been sheduled. See you there! 🎉 "
               : status === 'loading'
               ? 'Sending your details...'
               : 'Ops, error occurred.'}
         </p>
         <MainBtn
            text="Back to Calendar"
            next="calendar"
            handleValidation={() => false}
            status={status}
         />
      </div>
   );
}

export default FinalMessage;
