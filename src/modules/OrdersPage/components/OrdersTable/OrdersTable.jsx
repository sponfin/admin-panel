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
        <TableCell className={styles.cellCheck}>
          <Checkbox
            onChange={handleChangeCheckboxStatus}
            value="all"
            checked={checkboxStatuses.includes("all")}
          />
        </TableCell>
        <TableCell vArrow className={styles.cellNum}>
          #
        </TableCell>
        <TableCell vArrow className={styles.cellDate}>
          Дата
        </TableCell>
        <TableCell vArrow className={styles.cellStatus}>
          Статус
        </TableCell>
        <TableCell vArrow className={styles.cellPosition}>
          Позиций
        </TableCell>
        <TableCell vArrow className={styles.cellSum}>
          Cумма
        </TableCell>
        <TableCell vArrow className={styles.cellFio}>
          ФИО покупателя
        </TableCell>
      </TableRow>
      <TableContent>
        {orders.map((orders) => (
          <TableRow key={orders.num}>
            <TableCell className={styles.cellCheck}>
              <Checkbox
                onChange={handleChangeCheckboxStatus}
                value={orders.num}
                checked={checkboxStatuses.includes(`${orders.num}`)}
              />
            </TableCell>
            <TableCell key={orders.num} className={styles.cellNum}>
              {orders.num}
            </TableCell>
            <TableCell key={orders.num} className={styles.cellDate}>
              {orders.date}
            </TableCell>
            <TableCell key={orders.num} className={styles.cellStatus}>
              {orders.status}
            </TableCell>
            <TableCell key={orders.num} className={styles.cellPosition}>
              {orders.position}
            </TableCell>
            <TableCell key={orders.num} className={styles.cellSum}>
              {orders.sum}
            </TableCell>
            <TableCell key={orders.num} className={styles.cellFio}>
              {orders.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
