import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  {
    counter: 0
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
