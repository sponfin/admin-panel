import { GET_ORDERS } from "../constants/actionTypes";

const initialState = [];

const ordersReducer = (state = initialState, { type, orders }) => {
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders,
      };
    default:
      return state;
  }
};
export default ordersReducer;
