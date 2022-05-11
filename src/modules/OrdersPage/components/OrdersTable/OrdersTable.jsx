import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getPagination,
  getOrdersForShow,
  getOrdersFiltered,
} from "modules/OrdersPage/selectors/selectors";

import {
  Checkbox,
  TableCell,
  TableContent,
  TableRow,
  TableFooter,
} from "common/components";
import { Pagination } from "modules/OrdersPage/components/Pagination/Pagination";

import styles from "./OrdersTable.module.css";

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

export const OrdersTable = ({ className, children, ...props }) => {
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));
  };

  const { pageSize, activePage } = useSelector(getPagination);
  const ordersFiltered = useSelector(getOrdersFiltered);

  const orders = useSelector(getOrdersForShow);

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
        {orders.map((order) => (
          <TableRow key={order.num}>
            <TableCell className={styles.cellCheck}>
              <Checkbox
                onChange={handleChangeCheckboxStatus}
                value={order.num}
                checked={checkboxStatuses.includes(`${order.num}`)}
              />
            </TableCell>
            <TableCell className={styles.cellNum}>{order.num}</TableCell>
            <TableCell className={styles.cellDate}>{order.date}</TableCell>
            <TableCell className={styles.cellStatus}>{order.status}</TableCell>
            <TableCell className={styles.cellPosition}>
              {order.position}
            </TableCell>
            <TableCell className={styles.cellSum}>{order.sum}</TableCell>
            <TableCell className={styles.cellFio}>{order.fio}</TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>
        Выбрано записей: 5
        {ordersFiltered.length > pageSize && (
          <Pagination
            className={styles.pagination}
            activePage={activePage}
            ordersFiltered={ordersFiltered}
            pageSize={pageSize}
          />
        )}
      </TableFooter>
    </div>
  );
};
