import { SET_ACTIVE_PAGE } from "../actions/pagination";

const initialState = {
  pageSize: 10,
  activePage: 1,
};

export const pagination = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: payload };
    default:
      return state;
  }
};
