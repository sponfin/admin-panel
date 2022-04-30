import React from "react";
import cn from "classnames";
import { OrdersLoad } from "modules/OrdersPage/components";
import { Button, Input } from "common/components";
import { ReactComponent as IconSearch } from "common/icons/search.svg";
import { ReactComponent as IconFilter } from "common/icons/filter.svg";
import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";
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

  isVisibleFilters ? (theme = "main") : (theme = "blue");

  console.log(isVisibleFilters);

  return (
    <div className={cn(styles._, className)} {...props}>
      <Input
        className={styles.searchbarInput}
        placeholder="Номер заказа или ФИО"
        leftIcon={IconSearch}
        onChange={handleChangeInput}
        onClear={handleClear}
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
