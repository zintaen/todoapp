import React, { ReactNode } from "react";

import styles from "./index.module.scss";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Header</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
