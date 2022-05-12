import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPagination,
  getOrdersForShow,
  getOrdersFiltered,
  getSort,
  getShowOrderForm,
} from "modules/OrdersPage/selectors/selectors";

import {
  Checkbox,
  TableCell,
  TableContent,
  TableRow,
  TableFooter,
} from "common/components";
import { Pagination, OrderForm } from "modules/OrdersPage/components";

import { setSort, showOrderForm } from "modules/OrdersPage/actions";

import styles from "./OrdersTable.module.css";

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

export const OrdersTable = ({ className, children, ...props }) => {
  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));
  };
  const dispatch = useDispatch();

  const handleClick = (nameKey) => () => {
    dispatch(setSort(nameKey));

    console.log(nameKey);
  };

  const { pageSize, activePage } = useSelector(getPagination);
  const { keySort, typeSort } = useSelector(getSort);
  const ordersFiltered = useSelector(getOrdersFiltered);
  const { isShow } = useSelector(getShowOrderForm);

  const orders = useSelector(getOrdersForShow);

  const handleShowOrderForm = (payload) => () => {
    dispatch(showOrderForm(payload));
  };

  return (
    <div className={styles._}>
      <OrderForm show={isShow} />
      <TableRow header>
        <TableCell className={styles.cellCheck}>
          <Checkbox
            onChange={handleChangeCheckboxStatus}
            value="all"
            checked={checkboxStatuses.includes("all")}
          />
        </TableCell>
        <TableCell
          vArrow={keySort !== "num" ? false : true}
          className={styles.cellNum}
          onClick={handleClick("num")}
          isSorted={keySort === "num" && typeSort === "desc" ? false : true}
        >
          #
        </TableCell>
        <TableCell
          vArrow={keySort !== "date" ? false : true}
          className={styles.cellDate}
          onClick={handleClick("date")}
          isSorted={keySort === "date" && typeSort === "desc" ? false : true}
        >
          Дата
        </TableCell>
        <TableCell
          vArrow={keySort !== "status" ? false : true}
          className={styles.cellStatus}
          onClick={handleClick("status")}
          isSorted={keySort === "status" && typeSort === "desc" ? false : true}
        >
          Статус
        </TableCell>
        <TableCell
          vArrow={keySort !== "position" ? false : true}
          className={styles.cellPosition}
          onClick={handleClick("position")}
          isSorted={
            keySort === "position" && typeSort === "desc" ? false : true
          }
        >
          Позиций
        </TableCell>
        <TableCell
          vArrow={keySort !== "sum" ? false : true}
          className={styles.cellSum}
          onClick={handleClick("sum")}
          isSorted={keySort === "sum" && typeSort === "desc" ? false : true}
        >
          Cумма
        </TableCell>
        <TableCell
          vArrow={keySort !== "fio" ? false : true}
          className={styles.cellFio}
          onClick={handleClick("fio")}
          isSorted={keySort === "fio" && typeSort === "desc" ? false : true}
        >
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
            <TableCell
              className={styles.cellNum}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.num}
            </TableCell>
            <TableCell
              className={styles.cellDate}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.date}
            </TableCell>
            <TableCell
              className={styles.cellStatus}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.status}
            </TableCell>
            <TableCell
              className={styles.cellPosition}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.position}
            </TableCell>
            <TableCell
              className={styles.cellSum}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.sum}
            </TableCell>
            <TableCell
              className={styles.cellFio}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>
        Выбрано записей:
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
