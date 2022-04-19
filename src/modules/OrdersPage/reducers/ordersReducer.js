import { GET_ORDERS } from "../constants/actionTypes";

const initialState = [];

const ordersReducer = (state = initialState, { type, orders }) => {
  switch (type) {
    case GET_ORDERS:
      return orders;
    default:
      return state;
  }
};
export default ordersReducer;
