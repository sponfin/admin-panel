import {
  SET_VALUE_ORDERS_FILTERS,
  CLEAR_VALUE_ORDERS_FILTERS,
  TOGGLE_FILTERS,
  CLEAR_ALL_VALUE_ORDERS_FILTERS,
} from "../constants/actionTypes";

export const setValueOrdersFilters = (payload) => ({
  type: SET_VALUE_ORDERS_FILTERS,
  payload,
});

export const clearValueOrdersFilters = (payload) => ({
  type: CLEAR_VALUE_ORDERS_FILTERS,
  payload,
});

export const clearAllValueOrdersFilters = () => ({
  type: CLEAR_ALL_VALUE_ORDERS_FILTERS,
});

export const toggleFilters = () => ({
  type: TOGGLE_FILTERS,
});
