import {
  SET_VALUE_ORDERS_FILTERS,
  CLEAR_VALUE_ORDERS_FILTERS,
} from "../constants/actionTypes";

export const setValueOrdersFilters = (payload) => ({
  type: SET_VALUE_ORDERS_FILTERS,
  payload,
});

export const clearValueOrdersFilters = (payload) => ({
  type: CLEAR_VALUE_ORDERS_FILTERS,
  payload,
});
