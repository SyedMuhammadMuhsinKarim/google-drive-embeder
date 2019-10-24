import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Use as Routes
import GetLink from "./GetLink";
import GetDrive from "./GetDrive";
import Registeration from "./User/register";
import Login from "./User/Login";
import HomePage from "./User/userpanel"

import Navigation from "./Components/Navbar";
import Footer from "./Components/Footer";
import { withAuthentication } from "./Session";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Navigation />
    <br />
    <div>
      <Route exact path={ROUTES.LANDING} component={GetLink} />
      <Route exact path={ROUTES.EMBED} component={GetDrive} />
      <Route exact path={ROUTES.SIGN_IN} component={Login} />
      <Route exact path={ROUTES.SIGN_UP} component={Registeration} />
      <Route exact path={ROUTES.HOME} component={HomePage}/>
    </div>
    <br /> <br />
    <Footer />
  </Router>
);

export default withAuthentication(App);
