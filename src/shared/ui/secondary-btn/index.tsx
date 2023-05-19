import React from 'react'
import styles from './styles.module.scss'

interface IProp {
   text: string;
}

export function SecondaryBtn({text}: IProp) {
  return (
    <div className={styles.secondary}>{text}</div>
  )
}
