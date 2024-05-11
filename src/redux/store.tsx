// store.tsx file
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { likeReducer } from "./reducer";

const rootReducer = combineReducers({
  likesFeature: likeReducer,
  // Add other reducers here if needed
});

// Middleware setup (if needed)
const middleware: any = []; // Add your middleware here

// Compose enhancers including Redux DevTools Extension
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
