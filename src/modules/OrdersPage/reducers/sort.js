import { SET_SORT } from "../actions/sort";

const initialState = {
  keySort: "date",
  typeSort: "desc",
};

export const sort = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORT:
      return {
        keySort: payload,
        typeSort: state.typeSort === "desc" ? "" : "desc",
      };
    default:
      return state;
  }
};
