import { createStore } from "redux";

import rootReducer from "modules/OrdersPage/reducers/rootReducer";

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log("state", store.getState());
  return store;
}
