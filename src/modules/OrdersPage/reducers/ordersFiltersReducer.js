import { SET_ORDERS_FILTERS } from "../constants/actionTypes";

const initialState = "";

const ordersFiltersReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case SET_ORDERS_FILTERS:
      return value;
    default:
      return state;
  }
};
export default ordersReducer;
