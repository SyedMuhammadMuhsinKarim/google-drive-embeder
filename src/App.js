import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Use as Routes
import GetLink from "./GetLink";
import GetDrive from "./GetDrive";

import Navigation from "./Components/Navbar";
import Footer from "./Components/Footer";

import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Navigation />
    <br />
    <div>
      <Route exact path={ROUTES.LANDING} component={GetLink} />
      <Route exact path={ROUTES.EMBED} component={GetDrive} />
    </div>
    <br /> <br />
    <Footer />
  </Router>
);

export default App;
