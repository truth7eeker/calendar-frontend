import React from 'react';
import styles from './styles.module.scss';

interface IProps {
   label: string;
   type: string;
   text: string;
   handleForm: (name: string, value: string) => void;
   value: string,
   error: string
}

export function Input({ label, type, text, handleForm, value, error }: IProps) {
   return (
      <div className={styles.input}>
         <label htmlFor={label}> {text} </label>
         <input
            id={label}
            type={type}
            name={label}
            value={value}
            onChange={(e) => handleForm(e.target.name, e.target.value)}
         />
         <p>{error}</p>
      </div>
   );
}
