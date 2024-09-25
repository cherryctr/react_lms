import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import MyAppBar from "./component/AppBar/MyAppBar"; // Ensure this is the correct import
import FootBar from "./component/FootBar/FootBar"; // Ensure this is the correct import
import "./App.css";
import AppRouter from "./Router"; // Import the Router component
import { Spinner, Modal } from "react-bootstrap"; // Import Bootstrap components for loader

const App = ({ backdrop }) => {
  return (
    <Router>
      {/* Navigation Bar */}
      <MyAppBar /> {/* AppBar stays consistent across routes */}

      <div className="app-container">
        <main className="content-container">
          <AppRouter /> {/* Use the AppRouter for routing */}
        </main>
      </div>

      {/* Footer */}
      <FootBar /> {/* FootBar stays consistent across routes */}

      {/* Bootstrap Modal for Backdrop and Spinner */}
      <Modal show={backdrop} centered>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" />
        </Modal.Body>
      </Modal>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    backdrop: state.backdropReducer?.show, // Check if the backdrop is open
  };
};

export default connect(mapStateToProps)(App);
