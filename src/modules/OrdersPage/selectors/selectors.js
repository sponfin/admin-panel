import { createSelector } from "reselect";
import { dateFormat } from "../utils/utils";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.ordersFilters;

export const getOrdersByNumFio = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search }) =>
    orders.filter(
      ({ num, fio }) =>
        num.includes(search) || fio.toLowerCase().includes(search)
    )
);

export const getOrdersFilteredByDate = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { datefrom, dateTo }) =>
    orders.filter(
      ({ date }) =>
        dateFormat(date) >= dateFormat(datefrom) &&
        dateFormat(date) <= dateFormat(dateTo)
    )
);

export const getOrdersFiltered = getOrdersFilteredByDate;
