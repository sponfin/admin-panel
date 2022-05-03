import cn from "classnames";
import { Button, Input, Label } from "common/components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";
import {
  setValueOrdersFilters,
  clearValueOrdersFilters,
} from "../../actions/ordersFilters";

import styles from "./OrdersFiltersPanel.module.css";

export const OrdersFiltersPanel = ({
  className,
  children,
  onClearAllFilters,
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

  const handleClick = () => {
    // setValueOrdersFilters({ value });
  };
  return (
    <div
      className={cn(styles._, className)}
      onClearAllFilters={handleClearAllFilters}
    >
      <div className={styles.wrapperInputDate}>
        <Label className={styles.labelFilters} label="Дата оформления" />
        <Input
          className={styles.inputFiltersDate}
          classTitle={styles.titleFilterFrom}
          placeholder="dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={filters.dateFrom}
          name="dateFrom"
        >
          <div className={styles.titleFilter}>с</div>
        </Input>
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersDate}
          classTitle={styles.titleFilterTo}
          placeholder="dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={filters.dateTo}
          name="dateTo"
        >
          <div className={styles.titleFilter}>по</div>
        </Input>
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
          classTitle={styles.titleFilterFrom}
          onChange={handleChange}
          onClear={handleClear}
          value={filters.sumFrom}
          name="sumFrom"
        >
          <div className={styles.titleFilter}>с</div>
        </Input>
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersSum}
          classTitle={styles.titleFilterTo}
          onChange={handleChange}
          onClear={handleClear}
          value={filters.sumTo}
          name="sumTo"
        >
          <div className={styles.titleFilter}>по</div>
        </Input>
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
