import {
  SET_VALUE_ORDERS_SEARCH,
  CLEAR_VALUE_ORDERS_SEARCH,
  SET_VALUE_ORDERS_FILTERS,
  TOGGLE_FILTERS,
  CLEAR_ALL_VALUE_ORDERS_FILTERS,
} from "../actions/filters";

const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  sumFrom: "",
  sumTo: "",
  statusOrder: [],
  isVisibleFilters: false,
  loaded: false,
};

export const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VALUE_ORDERS_FILTERS:
      return {
        ...state,
        dateFrom: payload.dateFrom,
        dateTo: payload.dateTo,
        sumFrom: payload.sumFrom,
        sumTo: payload.sumTo,
        statusOrder: payload.statusOrder,
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
        statusOrder: [],
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
