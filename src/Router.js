import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Lazy load components

function componentLoader(fn, retriesLeft = 5, interval = 1000) {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch((error) => {
				setTimeout(() => {
					if (retriesLeft === 1) {
						// reject('maximum retries exceeded');
						reject(error);
						return;
					}

					// Passing on "reject" is the important part
					componentLoader(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
}

const Login = lazy(() =>
	componentLoader(() => import("./views/login/LoginPage"), 1000)
);

const Register = React.lazy(() => import("./component/Register/Register"));

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
