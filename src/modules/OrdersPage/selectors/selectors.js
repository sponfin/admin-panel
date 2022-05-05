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
  (orders, { datefrom, dateTo }) =>
    orders.filter(
      ({ date }) => isRange(date, datefrom, dateTo, "DATE")
      // dateStringToMilliseconds(date) >= dateStringToMilliseconds(datefrom) &&
      // dateStringToMilliseconds(date) <= dateStringToMilliseconds(dateTo)
    )
);

export const getOrdersFiltered = getOrdersFilteredByDate;
