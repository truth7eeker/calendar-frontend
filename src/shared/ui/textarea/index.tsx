import React from 'react'
import styles from './styles.module.scss'

interface IProps {
    text: string,
    label: string,
    value: string,
    handleForm: (name: string, value: string) => void
}

export function TextArea({text, label, value, handleForm}: IProps) {
  return (
     <div className={styles.textarea}>
        <label htmlFor={label}>{text}</label>
        <textarea id={label} value={value} name={label} onChange={e => handleForm(e.target.name, e.target.value)}/>
     </div>
  );
}

