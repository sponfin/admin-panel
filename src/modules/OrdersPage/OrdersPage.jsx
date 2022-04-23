import { mockOrders } from "modules/OrdersPage/constants/mockOrders";

import {
  OrdersTable,
  OrdersSearchbar,
  OrdersHeader,
  OrdersFilters,
} from "modules/OrdersPage/components";

import styles from "./OrdersPage.module.css";

export const OrdersPage = () => {
  const orders = mockOrders;
  return (
    <div className={styles.wrapper}>
      <OrdersHeader className={styles.wrapperHeader} />
      <OrdersSearchbar className={styles.wrapperSearchbar} />
      <OrdersFilters className={styles.blockFilters} />
      <OrdersTable orders={orders} />
    </div>
  );
};
