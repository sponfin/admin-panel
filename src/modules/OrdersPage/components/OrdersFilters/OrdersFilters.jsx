import cn from "classnames";
import { Button, Input, Label } from "common/components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";
import {
  setValueOrdersFilters,
  clearValueOrdersFilters,
} from "../../actions/ordersFilters";

import styles from "./OrdersFilters.module.css";

export const OrdersFilters = ({ className, children, ...props }) => {
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

  const handleClick = () => {
    // setValueOrdersFilters({ value });
  };
  return (
    <div className={cn(styles._, className)}>
      <div className={styles.wrapperInputDate}>
        <Label className={styles.labelFilters} label="Дата оформления" />
        <Input
          className={styles.inputFiltersDate}
          placeholder="c dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={filters.dateFrom}
          name="dateFrom"
        />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersDate}
          placeholder="по dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={filters.dateTo}
          name="dateTo"
        />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Статус заказа" />
        <Input
          className={styles.inputFiltersStatus}
          value={filters.status}
          name="status"
        />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Сумма заказа" />
        <Input
          className={styles.inputFiltersSum}
          placeholder="с"
          onChange={handleChange}
          onClear={handleClear}
          value={filters.sumFrom}
          name="sumFrom"
        />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersSum}
          placeholder="по "
          onChange={handleChange}
          onClear={handleClear}
          value={filters.sumTo}
          name="sumTo"
        />
      </div>
      <div className={styles.wrapperApply}>
        <Button theme="blue" size="large" onClick={handleClick}>
          Применить
        </Button>
      </div>

      {children}
    </div>
  );
};
