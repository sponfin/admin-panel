import { createSelector } from "reselect";
import { inSearch, inRange, inStatus } from "../utils/utils";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.filters;
export const getPagination = (state) => state.pagination;

// export const getOrdersSerached = createSelector(
//   getOrders,
//   getValueOrdersFilters,
//   (orders, { search }) =>
//     orders.filter(({ num, fio }) => inSearch(num, fio, search))
// );

// export const getOrdersFiltered = createSelector(
//   getOrdersSerached,
//   getValueOrdersFilters,
//   (orders, { dateFrom, dateTo, sumFrom, sumTo, statusOrder }) =>
//     orders

//       .filter(({ date }) => inRange(date, dateFrom, dateTo, 'DATE'))
//       .filter(({ sum }) => inRange(sum, sumFrom, sumTo, 'SUM'))
//       .filter(({ status }) => inStatus(status, statusOrder))
// );

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

// export const getOrdersFilteredSliced = createSelector(
//   getOrdersFiltered,
//   getPagination,
//   (orders, { qtyShowData, activePage }) =>
//     orders.slice((activePage - 1) * qtyShowData, activePage * qtyShowData)
// );
