import { GET_ORDERS } from "../constants/actionTypes";

export const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders,
});
