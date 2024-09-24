// redux/actions/login/loginActions.js

export const loginUser = (userData) => {
	return (dispatch) => {
		dispatch({ type: "LOGIN_REQUEST" });

		// Simulasi API login
		setTimeout(() => {
			if (
				userData.email === "test@example.com" &&
				userData.password === "password"
			) {
				dispatch({
					type: "LOGIN_SUCCESS",
					payload: userData,
				});
			} else {
				dispatch({
					type: "LOGIN_FAILURE",
					payload: "Invalid email or password",
				});
			}
		}, 1000);
	};
};
