import React from "react";

const ServerApiContext = React.createContext(null);

export const withServer = Component => props => (
  <ServerApiContext.Consumer>
    {server => <Component {...props} server={server} />}
  </ServerApiContext.Consumer>
);

export default ServerApiContext;
