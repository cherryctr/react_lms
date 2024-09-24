import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../../redux/action/RegisterAction/index";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.register);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser({ email, password, confirmPassword }));
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label>Confirm Password</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<button type="submit" disabled={loading}>
					Register
				</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Register;
