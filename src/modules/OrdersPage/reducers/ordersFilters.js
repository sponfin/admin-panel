import {
  SET_VALUE_ORDERS_SEARCH,
  CLEAR_VALUE_ORDERS_SEARCH,
  SET_VALUE_ORDERS_FILTERS,
  TOGGLE_FILTERS,
  CLEAR_ALL_VALUE_ORDERS_FILTERS,
} from "../actions/ordersFilters";

const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  sumFrom: "",
  sumTo: "",
  status: ["Любой"],
  isVisibleFilters: false,
};

export const ordersFilters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VALUE_ORDERS_FILTERS:
      return {
        ...state,
        dateFrom: payload.dateFrom,
        dateTo: payload.dateTo,
      };
    case SET_VALUE_ORDERS_SEARCH:
      return {
        ...state,
        search: payload.value,
      };
    case CLEAR_VALUE_ORDERS_SEARCH:
      return {
        ...state,
        search: "",
      };
    case CLEAR_ALL_VALUE_ORDERS_FILTERS:
      return {
        ...state,
        search: "",
        dateFrom: "",
        dateTo: "",
        sumFrom: "",
        sumTo: "",
        status: ["Любой"],
      };
    case TOGGLE_FILTERS:
      return {
        ...state,
        isVisibleFilters: !state.isVisibleFilters,
      };
    default:
      return state;
  }
};
