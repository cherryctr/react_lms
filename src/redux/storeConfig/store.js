import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Menggunakan named import untuk thunk
import rootReducer from "./../reducer/rootReducer";

// Fallback ke `compose` jika Redux DevTools tidak tersedia
const composeEnhancers =
	(process.env.NODE_ENV === "development" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

// Membuat store dengan middleware redux-thunk
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)) // Middleware redux-thunk diterapkan
);

export default store;
