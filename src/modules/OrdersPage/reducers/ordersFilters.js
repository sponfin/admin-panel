import {
  SET_VALUE_ORDERS_FILTERS,
  CLEAR_VALUE_ORDERS_FILTERS,
  TOGGLE_FILTERS,
  CLEAR_ALL_VALUE_ORDERS_FILTERS,
} from "../constants/actionTypes";

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
        [payload.name]: payload.value,
      };
    case CLEAR_VALUE_ORDERS_FILTERS:
      return {
        ...state,
        [payload.name]: "",
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
