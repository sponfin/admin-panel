export const SET_VALUE_ORDERS_SEARCH = "SET_VALUE_ORDERS_SEARCH";
export const CLEAR_VALUE_ORDERS_SEARCH = "CLEAR_VALUE_ORDERS_SEARCH";
export const SET_VALUE_ORDERS_FILTERS = "SET_VALUE_ORDERS_FILTERS";
export const CLEAR_ALL_VALUE_ORDERS_FILTERS = "CLEAR_ALL_VALUE_ORDERS_FILTERS";
export const TOGGLE_FILTERS = "TOGGLE_FILTERS";

export const setValueOrdersSearch = (payload) => ({
  type: SET_VALUE_ORDERS_SEARCH,
  payload,
});

export const clearValueOrdersSearch = (payload) => ({
  type: CLEAR_VALUE_ORDERS_SEARCH,
  payload,
});

export const setValueOrdersFilters = (payload) => ({
  type: SET_VALUE_ORDERS_FILTERS,
  payload,
});

export const clearAllValueOrdersFilters = () => ({
  type: CLEAR_ALL_VALUE_ORDERS_FILTERS,
});

export const toggleFilters = () => ({
  type: TOGGLE_FILTERS,
});
