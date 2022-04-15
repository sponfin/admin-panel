import React, { useState } from "react";
import cn from "classnames";
import { OrdersLoad } from "modules/OrdersPage/components";

import styles from "./OrdersSearchbar.module.css";

export const OrdersSearchbar = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)}>
      {children}
      <OrdersLoad></OrdersLoad>
    </div>
  );
};
