import React, { useState } from "react";
import cn from "classnames";

import styles from "./OrdersPage.module.css";

export const OrdersPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.header, styles.wrapperHeader)}>
        <div className={styles.headerTitle}>Page header</div>
        <div className={styles.headerTheme}></div>
      </header>

      <div className={cn(styles.searchbar, styles.wrapperSearchbar)}>
        <div className={styles.searchbarInput}></div>
        <div className={styles.searchbarFilters}></div>
        <div className={styles.searchbarLoad}></div>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}></div>
        <div className={styles.tableContent}></div>
        <div className={styles.tableFooter}></div>
      </div>
    </div>
  );
};
