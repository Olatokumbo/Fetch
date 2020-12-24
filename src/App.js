import React from "react";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Join from "./pages/Join/Join";
import Store from "./pages/Store/Store";
import Location from "./pages/Location/Location";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { geolocated } from "react-geolocated";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/join" component={Join} />
          <Route path="/store/:storeId" component={Store} />
          <Route path="/city/:cityId" component={Location} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(App);
