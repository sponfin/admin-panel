import { GET_ORDERS } from "../constants/actionTypes";
import { mockOrders } from "../constants/mockOrders";

const initialState = mockOrders;

const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return payload;
    default:
      return state;
  }
};
export default ordersReducer;
