import { createSelector } from "reselect";
import { inSearch, inRange, inStatus } from "../utils/utils";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.ordersFilters;

export const getOrdersFiltered = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search, dateFrom, dateTo, sumFrom, sumTo, statusOrder }) =>
    orders

      .filter(({ num, fio }) => inSearch(num, fio, search))
      .filter(({ date }) => inRange(date, dateFrom, dateTo, "DATE"))
      .filter(({ sum }) => inRange(sum, sumFrom, sumTo, "SUM"))
      .filter(({ status }) => inStatus(status, statusOrder))
);
