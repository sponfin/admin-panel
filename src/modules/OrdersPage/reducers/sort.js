import { SET_SORT } from "../actions/sort";

const initialState = {
  keySort: "",
  typeSort: "",
};

export const sort = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORT:
      return payload;
    default:
      return state;
  }
};
