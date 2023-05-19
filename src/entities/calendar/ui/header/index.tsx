import React from "react";
import styles from "./styles.module.scss";

 export function Header() {
  return (
    <header className={styles.header}>
      <h1>English Conversations</h1>
      <p>
        Welcome to my scheduling page! Please follow the instructions to add an
        event to my calendar.
      </p>
    </header>
  );
}

