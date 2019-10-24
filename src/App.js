import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import GetLink from "./GetLink";
import GetDrive from "./GetDrive";
import Registeration from "./User/register";
import Login from "./User/Login";
import Navigation from "./Components/Navbar";
import { withAuthentication } from "./Session";

const App = () => (
  <Router>
    <Navigation />
    <br />
    <div>
      <Route exact path="/" component={GetLink} />
      <Route exact path="/player/:id" component={GetDrive} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/nav-test" component={Navigation} />
      <Route exact path="/register" component={Registeration} />
    </div>
    <br /> <br />
    <Footer />
  </Router>
);

export default withAuthentication(App);
