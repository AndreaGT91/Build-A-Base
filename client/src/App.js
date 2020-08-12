import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import NavBar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MyDatabase from "./pages/MyDatabase";
import { Parallax } from "react-parallax";
import "./App.scss";
import store from "./store"
import PrivateRoute from "./components/private-route/PrivateRoute";

import FirstImage from "./images/1.png"

const image2 = "https://media-public.canva.com/MAC_ThKmzeg/1/thumbnail_large-1.jpg"
const image3 = "https://media-public.canva.com/MADCCLp1-lc/1/thumbnail_large-1.jpg"

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
}

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtToken);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./Login";
  }
}

function App() {
  return (
    <div className="div1">
      <Provider store={store}>
        <Router>
          <div>

            <Switch>
              <Route exact path="/Login"><Login /></Route>
              <Route exact path="/SignUp"><SignUp /></Route>
              <Route exact path="/Home"><Home /></Route>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/MyDatabase"><MyDatabase /></Route>

              <Route exact path="/*"><Home /></Route>

            </Switch>
          </div>
        </Router>
      </Provider>
    </div>


  );
}

export default App;
