// redux/actions/register/registerActions.js

export const registerUser = (userData) => {
	return (dispatch) => {
		dispatch({ type: "REGISTER_REQUEST" });

		// Simulasi API registrasi
		setTimeout(() => {
			if (userData.password === userData.confirmPassword) {
				dispatch({
					type: "REGISTER_SUCCESS",
					payload: userData,
				});
			} else {
				dispatch({
					type: "REGISTER_FAILURE",
					payload: "Passwords do not match",
				});
			}
		}, 1000);
	};
};
