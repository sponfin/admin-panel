import { GET_ORDERS } from "../constants/actionTypes";

export const getOrdersActionCreators = (orders) => ({
  type: GET_ORDERS,
  orders,
});
