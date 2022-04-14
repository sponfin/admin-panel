import React, { useState } from "react";
import cn from "classnames";

import {
  TableHeader,
  TableCell,
  Checkbox,
  TableContent,
  TableRow,
  TableFooter,
} from "common/components";

import styles from "./OrdersPage.module.css";

export const OrdersPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.header, styles.wrapperHeader)}>
        <div className={styles.headerTitle}>Page header</div>
        <div className={styles.headerTheme}></div>
      </header>

      <div className={cn(styles.searchbar, styles.wrapperSearchbar)}>
        <div className={styles.searchbarInput}></div>
        <div className={styles.searchbarFilters}></div>
        <div className={styles.searchbarLoad}></div>
      </div>

      <div className={styles.table}>
        <TableHeader>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>#</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Статус</TableCell>
          <TableCell>Позиций</TableCell>
          <TableCell>Cумма</TableCell>
          <TableCell>ФИО покупателя</TableCell>
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
    </div>
  );
};
