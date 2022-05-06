import { createSelector } from "reselect";
import { inRange, inStatus } from "../utils/utils";

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
    orders.filter(({ date }) => inRange(date, dateFrom, dateTo, "DATE"))
);

const getOrdersByStatus = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { statusOrder }) =>
    orders.filter(({ status }) => inStatus(status, statusOrder))
);

export const getOrdersFiltered = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search, dateFrom, dateTo, sumFrom, sumTo, statusOrder }) =>
    orders
      .filter(
        ({ num, fio }) =>
          num.includes(search) || fio.toLowerCase().includes(search)
      )
      .filter(({ date }) => inRange(date, dateFrom, dateTo, "DATE"))
      .filter(({ sum }) => inRange(sum, sumFrom, sumTo, "SUM"))
      .filter(({ status }) => inStatus(status, statusOrder))
);

// export const getOrdersFiltered = getOrdersByStatus;
