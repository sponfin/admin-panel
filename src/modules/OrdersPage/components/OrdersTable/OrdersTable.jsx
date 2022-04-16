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

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

export const OrdersTable = ({ className, children, orders, ...props }) => {
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));
  };
  return (
    <div className={styles._}>
      <TableRow header>
        <TableCell width={32} flex0>
          <Checkbox
            onChange={handleChangeCheckboxStatus}
            value="all"
            checked={checkboxStatuses.includes("all")}
          />
        </TableCell>
        <TableCell vArrow width={70}>
          #
        </TableCell>
        <TableCell vArrow width={120}>
          Дата
        </TableCell>
        <TableCell vArrow width={80}>
          Статус
        </TableCell>
        <TableCell vArrow width={75}>
          Позиций
        </TableCell>
        <TableCell vArrow width={70}>
          Cумма
        </TableCell>
        <TableCell vArrow width={150}>
          ФИО покупателя
        </TableCell>
      </TableRow>
      <TableContent>
        {orders.map((orders) => (
          <TableRow key={orders.num}>
            <TableCell width={32} flex0>
              <Checkbox
                onChange={handleChangeCheckboxStatus}
                value={orders.num}
                checked={checkboxStatuses.includes(`${orders.num}`)}
              />
            </TableCell>
            <TableCell key={orders.num} width={70}>
              {orders.num}
            </TableCell>
            <TableCell key={orders.num} width={120}>
              {orders.date}
            </TableCell>
            <TableCell key={orders.num} width={80}>
              {orders.status}
            </TableCell>
            <TableCell key={orders.num} width={75}>
              {orders.position}
            </TableCell>
            <TableCell key={orders.num} width={70}>
              {orders.sum}
            </TableCell>
            <TableCell key={orders.num} width={150}>
              {orders.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
