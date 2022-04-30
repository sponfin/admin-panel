import { LOAD_ORDERS } from "../constants/actionTypes";

const initialState = [];

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ORDERS:
      return payload;
    default:
      return state;
  }
};
