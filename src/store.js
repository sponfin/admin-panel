import { createStore } from "redux";

import rootReducer from "modules/OrdersPage/reducers/rootReducer";

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  console.log("state", store.getState());
  return store;
}
