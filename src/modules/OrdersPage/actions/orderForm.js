export const SET_SHOW_ORDERS_FORM = "SET_SHOW_ORDERS_FORM";
export const SET_CLOSE_ORDERS_FORM = "SET_CLOSE_ORDERS_FORM";

export const showOrderForm = (payload) => ({
  type: SET_SHOW_ORDERS_FORM,
  payload,
});

export const closeOrderForm = () => ({
  type: SET_CLOSE_ORDERS_FORM,
});
