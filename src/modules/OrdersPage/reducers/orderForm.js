import {
  SET_SHOW_ORDERS_FORM,
  SET_CLOSE_ORDERS_FORM,
} from "modules/OrdersPage/actions";

const initialState = {
  isShow: false,
  num: "",
};

export const orderForm = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOW_ORDERS_FORM:
      return payload;
    case SET_CLOSE_ORDERS_FORM:
      return {
        ...state,
        isShow: false,
      };
    default:
      return state;
  }
};
