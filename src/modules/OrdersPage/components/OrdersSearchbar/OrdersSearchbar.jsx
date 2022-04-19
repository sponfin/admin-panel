import React, { useState } from "react";
import cn from "classnames";
import { OrdersLoad } from "modules/OrdersPage/components";
import { Button, Input } from "common/components";
import { ReactComponent as IconSearch } from "common/icons/search.svg";
import { ReactComponent as IconFilter } from "common/icons/filter.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setOrdersFiltersActionCreators } from "../../actionCreators/setOrdersFiltersActionCreators";

import styles from "./OrdersSearchbar.module.css";

export const OrdersSearchbar = ({ className, children, ...props }) => {
  const value1 = useSelector((state) => state.ordersFiltersReducer);
  const dispatch = useDispatch();

  const handleChangeInput = ({ target: { value } }) => {
    dispatch(setOrdersFiltersActionCreators(value));
  };

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.searchbarInput}
        placeholder="Номер заказа или ФИО"
        leftIcon={IconSearch}
        onChange={handleChangeInput}
        value={value1}
      />
      <Button
        className={styles.searchbarButtonFilter}
        icon={IconFilter}
        theme="main"
        size="large"
      >
        Фильтры
      </Button>
      <Button theme="blue" size="large">
        Сбросить фильтры
      </Button>
      <OrdersLoad />
      {children}
    </div>
  );
};
