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
        <TableCell check>
          <Checkbox />
        </TableCell>
        <TableCell vArrow num>
          #
        </TableCell>
        <TableCell vArrow other>
          Дата
        </TableCell>
        <TableCell vArrow other>
          Статус
        </TableCell>
        <TableCell vArrow other>
          Позиций
        </TableCell>
        <TableCell vArrow other>
          Cумма
        </TableCell>
        <TableCell vArrow other>
          ФИО покупателя
        </TableCell>
      </TableRow>
      <TableContent>
        {orders.map((orders) => (
          <TableRow key={orders.num}>
            <TableCell check>
              <Checkbox />
            </TableCell>
            <TableCell key={orders.num} num>
              {orders.num}
            </TableCell>
            <TableCell key={orders.num} other>
              {orders.date}
            </TableCell>
            <TableCell key={orders.num} other>
              {orders.status}
            </TableCell>
            <TableCell key={orders.num} other>
              {orders.position}
            </TableCell>
            <TableCell key={orders.num} other>
              {orders.sum}
            </TableCell>
            <TableCell key={orders.num} other>
              {orders.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
