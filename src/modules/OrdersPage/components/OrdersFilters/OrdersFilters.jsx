import cn from "classnames";
import {
  OrdersSearchbar,
  OrdersFiltersPanel,
} from "modules/OrdersPage/components";

import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";

import { useState } from "react";

import styles from "./OrdersFilters.module.css";

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

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
    statusOrder: [],
  };

  const [filters, setFilters] = useState(initialState);
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);

  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));
  };
  console.log("Фильтры в OrdersFilters " + filters);

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
    setCheckboxStatuses([]);
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
          onChangeStatus={handleChangeCheckboxStatus}
          checkboxStatuses={checkboxStatuses}
        />
      )}
    </div>
  );
};
