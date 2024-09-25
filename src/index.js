import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // Import Provider dari react-redux
import store from "./redux/storeConfig/store"; // Pastikan store diimport dari file yang benar
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{" "}
			{/* Bungkus App dengan Provider */}
			<App />
		</Provider>
	</React.StrictMode>
);
