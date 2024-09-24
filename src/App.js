import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import Login and Register Components
import LoginForm from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";

// Import CourseList
import CourseList from "./components/CourseList/CourseList"; // Import CourseList

// Import Banner
import BannerApp from "./components/BannerApp/BannerApp";
// import Router from "./Router";
// Import AppBar and FootBar
import MyAppBar from "./components/AppBar/AppBar"; // Pastikan ini adalah AppBar yang benar
import FootBar from "./components/FootBar/FootBar"; // Import FootBar dari lokasi yang benar
import Home from "./components/Home/Home"; // Import FootBar dari lokasi yang benar
// Import FootBar dari lokasi yang benar

function App() {
	return (
		<Router>
			<MyAppBar /> {/* Memuat AppBar */}
			<div className="app-container">
				<main className="content-container">
					<Routes>
						{/* Route untuk Login */}
						<Route path="/login" element={<LoginForm />} />
						{/* Route untuk Register */}
						<Route path="/register" element={<RegisterForm />} />
						{/* Default Route (Home Page or Other Component) */}
						<Route path="/" element={<Home />} /> {/* Load CourseList */}
					</Routes>
				</main>
				<FootBar /> {/* Memuat FootBar */}
			</div>
		</Router>
	);
}

export default App;
