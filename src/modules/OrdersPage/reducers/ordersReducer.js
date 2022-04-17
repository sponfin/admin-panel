import { mockOrders } from "../constants/mockOrders";

const initialState = mockOrders;

const ordersReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
export default ordersReducer;
