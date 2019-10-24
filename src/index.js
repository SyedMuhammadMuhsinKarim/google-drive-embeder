import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ServerApiContext from "./Api/context";
import AuthApi from "./Api";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ServerApiContext.Provider value={new AuthApi()}>
    <App />
  </ServerApiContext.Provider>,
  rootElement
);
