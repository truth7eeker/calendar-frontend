import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProp {
   text: string;
   handleValidation: () => boolean;
   next: string;
   width?: string;
   type?: any;
   status?: string | null;
}

export function MainBtn({ text, handleValidation, next, width, type, status }: IProp) {
   const navigate = useNavigate();

   const handleClick = (e: any) => {
      e.preventDefault();
      if (next === 'final-message' && handleValidation()) {
         return;
      } else {
         navigate(`/${next}`);
      }
   };

   return (
      <button className={styles.main} style={{ width }} type={type} onClick={(e) => handleClick(e)}>
         {text}
      </button>
   );
}
