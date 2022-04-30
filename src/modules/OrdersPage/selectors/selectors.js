import { createSelector } from "reselect";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.ordersFilters;

export const getSerchedOrders = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search }) =>
    orders.filter(
      ({ num, fio }) =>
        num.includes(search) || fio.toLowerCase().includes(search)
    )
);
