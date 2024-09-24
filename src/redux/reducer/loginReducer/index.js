const initialState = {
	user: null,
	isAuthenticated: false,
	loading: false,
	error: null,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false,
				error: null,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default loginReducer;
