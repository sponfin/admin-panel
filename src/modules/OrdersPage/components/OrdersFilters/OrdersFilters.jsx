import cn from "classnames";
import {
  OrdersSearchbar,
  OrdersFiltersPanel,
} from "modules/OrdersPage/components";

import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";

import { useState } from "react";

import styles from "./OrdersFilters.module.css";

export const OrdersFilters = ({
  className,
  children,

  ...props
}) => {
  const dispatch = useDispatch();
  const initialState = {
    dateFrom: "",
    dateTo: "",
    sumFrom: "",
    sumTo: "",
    status: ["Любой"],
  };

  const [filters, setFilters] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleClear = ({ currentTarget: { name } }) => {
    setFilters({
      ...filters,
      [name]: "",
    });
  };

  const handleClearAllFilters = () => {
    setFilters(initialState);
  };

  const { isVisibleFilters } = useSelector(getValueOrdersFilters);

  return (
    <div className={cn(styles._, className)}>
      <OrdersSearchbar onClearAllFilters={handleClearAllFilters} />
      {isVisibleFilters && (
        <OrdersFiltersPanel
          className={styles.blockFiltersPanel}
          onChange={handleChange}
          onClear={handleClear}
          filters={filters}
        />
      )}
    </div>
  );
};
