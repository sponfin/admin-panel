import React, { useState } from "react";
import cn from "classnames";
import { mockOrders } from "./constants/mockOrders";

import {
  OrdersTable,
  OrdersSearchbar,
  OrdersLoad,
} from "modules/OrdersPage/components";

import styles from "./OrdersPage.module.css";

export const OrdersPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.header, styles.wrapperHeader)}>
        <div className={styles.headerTitle}>Page header</div>
        <div className={styles.headerTheme}></div>
      </header>

      <OrdersSearchbar className={styles.wrapperSearchbar}>
        <div className={styles.searchbarInput}></div>
        <div className={styles.searchbarFilters}></div>
      </OrdersSearchbar>

      <OrdersTable orders={mockOrders} />
    </div>
  );
};
