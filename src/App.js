import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import GetLink from "./GetLink";
import GetDrive from "./GetDrive";
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={GetLink} />
        <Route exact path="/:id" component={GetDrive} />

        <Footer />
      </div>
    </Router>
  );
};
export default App;
