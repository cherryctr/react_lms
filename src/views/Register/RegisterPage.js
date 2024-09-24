import React, { useState } from "react";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		console.log("Email:", email);
		console.log("Password:", password);
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
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Confirm Password</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
