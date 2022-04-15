import React, { useState } from "react";
import cn from "classnames";

import {
  Checkbox,
  TableHeader,
  TableCell,
  TableContent,
  TableRow,
  TableFooter,
} from "common/components";

import styles from "./OrdersTable.module.css";

export const OrdersTable = ({ className, children, ...props }) => {
  return (
    <div className={styles._}>
      <TableHeader>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>#</TableCell>
        <TableCell vArrow>Дата</TableCell>
        <TableCell vArrow>Статус</TableCell>
        <TableCell vArrow>Позиций</TableCell>
        <TableCell vArrow>Cумма</TableCell>
        <TableCell vArrow>ФИО покупателя</TableCell>
      </TableHeader>
      <TableContent>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>#</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Статус</TableCell>
          <TableCell>Позиций</TableCell>
          <TableCell>Cумма</TableCell>
          <TableCell>ФИО покупателя</TableCell>
        </TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
      </TableContent>
      <TableFooter>Выбрано записей: 5</TableFooter>
    </div>
  );
};
