import { createSelector } from "reselect";

export const getOrders = (state) => state.orders;
export const getValueOrdersFilters = (state) => state.ordersFilters;

// const { search } = getValueOrdersFilters();

export const getSerchedOrders = createSelector(
  getOrders,
  getValueOrdersFilters,
  (orders, { search }) =>
    orders.filter(
      ({ num, fio }) => num.includes(search) || fio.includes(search)
    )
);

// const search = getValueOrdersFilters();
// console.log(search);
// import { createSelector } from 'reselect';
// import { getSearchLine } from './searchLine'

// export const getLaptops = ({ laptops }) => laptops;

// export const getFilteredLaptops = createSelector(
//     getLaptops,
//     getSearchLine,
//     (laptops, search) => laptops.filter(
//         ({ id, brand }) => id.includes(search) || brand.includes(search)
//     )
// );
