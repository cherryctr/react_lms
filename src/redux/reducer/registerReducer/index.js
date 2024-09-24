const initialState = {
	user: null,
	isRegistered: false,
	loading: false,
	error: null,
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "REGISTER_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "REGISTER_SUCCESS":
			return {
				...state,
				user: action.payload,
				isRegistered: true,
				loading: false,
				error: null,
			};
		case "REGISTER_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default registerReducer;
