import { LOAD_ORDERS } from "../constants/actionTypes";

export const loadOrders = (payload) => ({
  type: LOAD_ORDERS,
  payload,
});
