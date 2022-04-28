import React from "react";
import cn from "classnames";
import { OrdersLoad } from "modules/OrdersPage/components";
import { Button, Input } from "common/components";
import { ReactComponent as IconSearch } from "common/icons/search.svg";
import { ReactComponent as IconFilter } from "common/icons/filter.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getValueOrdersFilters,
  getSerchedOrders,
} from "modules/OrdersPage/selectors/selectors";
import {
  setValueOrdersFilters,
  clearValueOrdersFilters,
  toggleFilters,
  clearAllValueOrdersFilters,
} from "../../actionCreators/ordersFilters";

import styles from "./OrdersSearchbar.module.css";

export const OrdersSearchbar = ({
  className,
  children,
  theme,
  orders1,

  ...props
}) => {
  const dispatch = useDispatch();
  const { search, isVisibleFilters } = useSelector(getValueOrdersFilters);

  const handleChangeInput = ({ target: { name, value } }) => {
    dispatch(setValueOrdersFilters({ name, value }));
  };

  const handleClear = ({ currentTarget: { name } }) => {
    dispatch(clearValueOrdersFilters({ name }));
  };

  const handleToggleFilters = () => {
    dispatch(toggleFilters());
  };

  const hanleClearAll = () => {
    dispatch(clearAllValueOrdersFilters());
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      // orders1 = getSerchedOrders();
      console.log(keyCode);
    }
  };

  isVisibleFilters ? (theme = "main") : (theme = "blue");

  console.log(isVisibleFilters);

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.searchbarInput}
        placeholder="Номер заказа или ФИО"
        leftIcon={IconSearch}
        onChange={handleChangeInput}
        onClear={handleClear}
        onKeyDown={handleKeyDown}
        name="search"
        value={search}
      />
      <Button
        className={styles.searchbarButtonFilter}
        icon={IconFilter}
        theme={theme}
        size="large"
        onClick={handleToggleFilters}
      >
        Фильтры
      </Button>
      <Button theme="blue" size="large" onClick={hanleClearAll}>
        Сбросить фильтры
      </Button>
      <OrdersLoad />
      {children}
    </div>
  );
};
