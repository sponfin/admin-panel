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
  onChange,
  onClear,
  filters,
}) => {
  const dispatch = useDispatch();
  const onApplyOrdersFilters = () => {
    dispatch(setValueOrdersFilters(filters));
  };
  return (
    <div className={cn(styles._, className)}>
      <div className={styles.wrapperInputDate}>
        <Label className={styles.labelFilters} label="Дата оформления" />
        <Input
          className={styles.inputFiltersDate}
          classTitle={styles.titleFilterFrom}
          placeholder="dd.mm.yyyy"
          onChange={onChange}
          onClear={onClear}
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
          onChange={onChange}
          onClear={onClear}
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
          placeholder="₽"
          classTitle={styles.titleFilterTo}
          onChange={onChange}
          onClear={onClear}
          value={filters.sumFrom}
          name="sumFrom"
        >
          <div className={styles.titleFilter}>от</div>
        </Input>
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersSum}
          placeholder="₽"
          classTitle={styles.titleFilterTo}
          onChange={onChange}
          onClear={onClear}
          value={filters.sumTo}
          name="sumTo"
        >
          <div className={styles.titleFilter}>до</div>
        </Input>
      </div>
      <div className={styles.wrapperApply}>
        <Button theme="blue" size="large" onClick={onApplyOrdersFilters}>
          Применить
        </Button>
      </div>

      {children}
    </div>
  );
};
