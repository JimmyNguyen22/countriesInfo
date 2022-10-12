import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
