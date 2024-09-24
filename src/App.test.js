import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import Login and Register Components
import LoginForm from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Routes>
						{/* Route untuk Login */}
						<Route path="/login" element={<LoginForm />} />

						{/* Route untuk Register */}
						<Route path="/register" element={<RegisterForm />} />

						{/* Default Route (Home Page or Other Component) */}
						<Route
							path="/"
							element={
								<div>
									<img
										src={process.env.PUBLIC_URL + "/logo.svg"}
										className="App-logo"
										alt="logo"
									/>
									<p>
										Edit <code>src/App.js</code> and save to reload.
									</p>
									<a
										className="App-link"
										href="https://reactjs.org"
										target="_blank"
										rel="noopener noreferrer"
									>
										Learn React
									</a>
								</div>
							}
						/>
					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
