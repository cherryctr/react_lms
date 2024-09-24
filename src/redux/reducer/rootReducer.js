// redux/reducers/rootReducer.js

import { combineReducers } from "redux";
import loginReducer from "./../reducer/loginReducer/index";
import registerReducer from "./../reducer/registerReducer/index";
// import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	
});

export default rootReducer;
