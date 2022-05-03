import { mockOrders } from "modules/OrdersPage/constants/mockOrders";
import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";

import {
  OrdersTable,
  OrdersSearchbar,
  OrdersHeader,
  OrdersFilters,
} from "modules/OrdersPage/components";

import styles from "./OrdersPage.module.css";

export const OrdersPage = ({ onClearAllFilters }) => {
  const orders = mockOrders;
  const { isVisibleFilters } = useSelector(getValueOrdersFilters);

  return (
    <div className={styles.wrapper}>
      <OrdersHeader className={styles.wrapperHeader} />
      <OrdersSearchbar className={styles.wrapperSearchbar} />

      {isVisibleFilters && (
        <OrdersFilters
          className={styles.blockFilters}
          onClearAllFilters={onClearAllFilters}
        />
      )}

      <OrdersTable orders={orders} />
    </div>
  );
};
