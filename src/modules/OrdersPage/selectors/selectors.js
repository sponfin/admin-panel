import { createSelector } from "reselect";
import { isRange } from "../utils/utils";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.ordersFilters;

const getOrdersByNumFio = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search }) =>
    orders.filter(
      ({ num, fio }) =>
        num.includes(search) || fio.toLowerCase().includes(search)
    )
);

const getOrdersFilteredByDate = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { dateFrom, dateTo }) =>
    orders.filter(({ date }) => isRange(date, dateFrom, dateTo, "DATE"))
);

// export const getOrdersFiltered = getOrdersByNumFio || getOrdersFilteredByDate;

export const getOrdersFiltered = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search, dateFrom, dateTo, sumFrom, sumTo }) =>
    orders
      .filter(
        ({ num, fio }) =>
          num.includes(search) || fio.toLowerCase().includes(search)
      )
      .filter(({ date }) => isRange(date, dateFrom, dateTo, "DATE"))
      .filter(({ sum }) => isRange(sum, sumFrom, sumTo, "SUM"))
);
