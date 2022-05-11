import { createSelector } from "reselect";
import { inSearch, inRange, inStatus, sorting, sortDesc } from "../utils/utils";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.filters;
export const getPagination = (state) => state.pagination;
export const getSort = (state) => state.sort;

export const getOrdersFiltered = createSelector(
  getOrders,
  getValueOrdersFilters,
  getSort,

  (
    orders,
    { search, dateFrom, dateTo, sumFrom, sumTo, statusOrder },
    { keySort, typeSort }
  ) =>
    orders

      .filter(({ num, fio }) => inSearch(num, fio, search))
      .filter(({ date }) => inRange(date, dateFrom, dateTo, "DATE"))
      .filter(({ sum }) => inRange(sum, sumFrom, sumTo, "SUM"))
      .filter(({ status }) => inStatus(status, statusOrder))
      .sort(sorting(keySort, typeSort))
);

export const getOrdersForShow = createSelector(
  getOrdersFiltered,
  getPagination,
  (orders, { activePage, pageSize }) =>
    orders.slice((activePage - 1) * pageSize, activePage * pageSize)
);
