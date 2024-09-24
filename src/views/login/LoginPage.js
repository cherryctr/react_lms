import React, { useState, useEffect } from "react";

// Fungsi untuk lazy loading komponen LoginForm
function componentLoader(fn, retriesLeft = 5, interval = 1000) {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch((error) => {
				setTimeout(() => {
					if (retriesLeft === 1) {
						reject(error);
						return;
					}
					componentLoader(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
}

const loadComponent = (loader) => {
	return function WrapperComponent() {
		const [Component, setComponent] = useState(null);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			componentLoader(loader).then((module) => {
				setComponent(() => module.default);
				setLoading(false);
			});
		}, [loader]);

		// Show loading text or loader while the component is being loaded
		if (loading) {
			return <div>Loading Login Form...</div>;
		}

		// Render the loaded component
		return <Component />;
	};
};

// Lazy load LoginForm
const LoginForm = loadComponent(() => import("."));

const LoginPage = () => {
	return (
		<div>
			<h1>Welcome to the Login Page</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
