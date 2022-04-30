import { combineReducers } from "redux";
import { orders } from "./orders";
import { ordersFilters } from "./ordersFilters";

export default combineReducers({
  orders,
  ordersFilters,
});
