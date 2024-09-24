import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import Login and Register Components
import LoginForm from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";

// Import CourseList
import CourseList from "./components/CourseList/CourseList"; // Import CourseList

// Import Banner
import BannerApp from "./components/BannerApp/BannerApp";
import Router from "./Router";
// Import AppBar and FootBar
import MyAppBar from "./components/AppBar/AppBar"; // Pastikan ini adalah AppBar yang benar
import FootBar from "./components/FootBar/FootBar"; // Import FootBar dari lokasi yang benar
// Import FootBar dari lokasi yang benar

function App() {
	return (
		<Router>
			<MyAppBar /> {/* Memuat AppBar */}
			<div className="app-container">
				<main className="content-container">
					<Router />

				</main>
				<FootBar /> {/* Memuat FootBar */}
			</div>
		</Router>
	);
}

export default App;
