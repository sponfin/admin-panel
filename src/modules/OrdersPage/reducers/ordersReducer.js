import { GET_ORDERS } from "../constants/actionTypes";

const initialState = [];

const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return payload;
    default:
      return state;
  }
};
export default ordersReducer;
