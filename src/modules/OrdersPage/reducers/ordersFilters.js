import {
  SET_VALUE_ORDERS_FILTERS,
  CLEAR_VALUE_ORDERS_FILTERS,
} from "../constants/actionTypes";

const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  sumFrom: "",
  sumTo: "",
  status: "Любой",
};

const ordersFilters = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};
export default ordersFilters;
