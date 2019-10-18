import React from "react";

const serverApiContext = React.createContext(null);

export const withServer = Component => props => (
  <serverApiContext.Consumer>
    {server => <Component {...props} server={server} />}
  </serverApiContext.Consumer>
);

export default serverApiContext;
