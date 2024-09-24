import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import MyAppBar from "./component/AppBar/MyAppBar"; // Ensure this is the correct import
import FootBar from "./component/FootBar/FootBar"; // Ensure this is the correct import
import "./App.css";
import AppRouter from "./Router"; // Import the Router component

const App = ({ backdrop }) => {
  const theme = useTheme();

  return (
    <Router>
      <MyAppBar /> {/* AppBar stays consistent across routes */}
      <div className="app-container">
        <main className="content-container">
          <AppRouter /> {/* Use the AppRouter for routing */}
        </main>
      </div>
      <FootBar /> {/* FootBar stays consistent across routes */}

      <Backdrop
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    backdrop: state.backdropReducer?.show,
  };
};

export default connect(mapStateToProps)(App);
