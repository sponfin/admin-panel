import React, { useState } from "react";
import { useSelector } from "react-redux";
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

export const OrdersTable = ({ className, children, ...props }) => {
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));
  };

  const orders = useSelector((state) => state.ordersReducer);
  console.log("это вызов втаблице " + { orders });

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
        {orders.orders.map((order) => (
          <TableRow key={order.num}>
            <TableCell className={styles.cellCheck}>
              <Checkbox
                onChange={handleChangeCheckboxStatus}
                value={order.num}
                checked={checkboxStatuses.includes(`${order.num}`)}
              />
            </TableCell>
            <TableCell key={order.num} className={styles.cellNum}>
              {order.num}
            </TableCell>
            <TableCell key={order.num} className={styles.cellDate}>
              {order.date}
            </TableCell>
            <TableCell key={order.num} className={styles.cellStatus}>
              {order.status}
            </TableCell>
            <TableCell key={order.num} className={styles.cellPosition}>
              {order.position}
            </TableCell>
            <TableCell key={order.num} className={styles.cellSum}>
              {order.sum}
            </TableCell>
            <TableCell key={order.num} className={styles.cellFio}>
              {order.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
