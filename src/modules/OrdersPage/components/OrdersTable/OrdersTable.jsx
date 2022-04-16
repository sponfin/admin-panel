import React, { useState } from "react";
import cn from "classnames";

import {
  Checkbox,
  TableCell,
  TableContent,
  TableRow,
  TableFooter,
} from "common/components";

import styles from "./OrdersTable.module.css";

export const OrdersTable = ({ className, children, orders, ...props }) => {
  return (
    <div className={styles._}>
      <TableRow header>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>#</TableCell>
        <TableCell vArrow>Дата</TableCell>
        <TableCell vArrow>Статус</TableCell>
        <TableCell vArrow>Позиций</TableCell>
        <TableCell vArrow>Cумма</TableCell>
        <TableCell vArrow>ФИО покупателя</TableCell>
      </TableRow>
      <TableContent>
        {orders.map((orders) => (
          <TableRow key={orders.num}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.num}
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.date}
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.status}
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.position}
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.sum}
            </TableCell>
            <TableCell key={orders.num} style={{ flex: 1 }}>
              {orders.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
