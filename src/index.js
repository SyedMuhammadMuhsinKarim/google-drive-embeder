import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import serverApiContext from "./Api/context";
import AuthApi from "./Api";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <serverApiContext.Provider value={new AuthApi()}>
    <App />
  </serverApiContext.Provider>,
  rootElement
);
