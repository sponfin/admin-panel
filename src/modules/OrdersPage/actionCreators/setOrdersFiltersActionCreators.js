import { SET_ORDERS_FILTERS } from "../constants/actionTypes";

export const setOrdersFiltersActionCreators = (value) => ({
  type: SET_ORDERS_FILTERS,
  value,
});
