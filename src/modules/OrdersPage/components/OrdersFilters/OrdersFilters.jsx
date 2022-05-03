import cn from "classnames";
import {
  OrdersSearchbar,
  OrdersFiltersPanel,
} from "modules/OrdersPage/components";

import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";

import styles from "./OrdersFilters.module.css";

export const OrdersFilters = ({
  className,
  children,

  ...props
}) => {
  const { isVisibleFilters } = useSelector(getValueOrdersFilters);

  return (
    <div className={cn(styles._, className)}>
      <OrdersSearchbar />
      {isVisibleFilters && (
        <OrdersFiltersPanel className={styles.blockFiltersPanel} />
      )}
    </div>
  );
};
