import React, { useState } from "react";
import cn from "classnames";

import {
  OrdersTable,
  OrdersSearchbar,
  OrdersLoad,
} from "modules/OrdersPage/components";

import styles from "./OrdersPage.module.css";

export const OrdersPage = () => {
  const orders = [
    {
      num: 1270989,
      date: "15.02.2021, 18:00",
      status: "Новый",
      position: 6,
      sum: 1010907,
      fio: "Чернышев Филипп Семёнович",
    },

    {
      num: 2353474,
      date: "12.03.2021, 05:15",
      status: "Новый",
      position: 2,
      sum: 98003,
      fio: "Филиппов Степан Васильевич",
    },

    {
      num: 1103397,
      date: "03.02.2021, 08:04",
      status: "Рассчет",
      position: 5,
      sum: 3800,
      fio: "Тихонова Алина Давидовна",
    },

    {
      num: 6924662,
      date: "21.01.2021, 13:32",
      status: "Выполнен",
      position: 1,
      sum: 5700,
      fio: "Александрова Юлия Никитична",
    },

    {
      num: 2200086,
      date: "19.01.2021, 10:28",
      status: "Отменен",
      position: "-",
      sum: "-",
      fio: "Андрей",
    },

    {
      num: 2842064,
      date: "04.01.2021, 12:12",
      status: "Отложен",
      position: 1,
      sum: 20500,
      fio: "Судакова Анастасия Ильинична",
    },

    {
      num: 1730071,
      date: "17.12.2020, 22:45",
      status: "Выполнен",
      position: 1,
      sum: 1399,
      fio: "Зверева Арина Николаевна",
    },

    {
      num: 7987376,
      date: "07.12.2020, 08:57",
      status: "Выполнен",
      position: 3,
      sum: 117810,
      fio: "Карташов Максим Кириллович",
    },

    {
      num: 1373265,
      date: "15.11.2020, 14:26",
      status: "Выполнен",
      position: 1,
      sum: 17008,
      fio: "Васильев Вадим Даниилович",
    },

    {
      num: 1311100,
      date: "07.11.2020, 18:52",
      status: "Отменен",
      position: "-",
      sum: "-",
      fio: "София",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.header, styles.wrapperHeader)}>
        <div className={styles.headerTitle}>Page header</div>
        <div className={styles.headerTheme}></div>
      </header>

      <OrdersSearchbar className={styles.wrapperSearchbar}>
        <div className={styles.searchbarInput}></div>
        <div className={styles.searchbarFilters}></div>
      </OrdersSearchbar>

      <OrdersTable orders={orders} />
    </div>
  );
};
