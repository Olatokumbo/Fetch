import React from "react";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
