import React from "react";
import { AuthContext } from "./index";
// import { withRouter } from "react-router-dom";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authUser: sessionStorage.getItem("key") };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    listner() {
      if (this.state.authUser) {
      }
    }

    render = () => (
      <AuthContext.Provider value={this.state.authUser}>
        <Component {...this.props} />
      </AuthContext.Provider>
    );
  }

  return WithAuthentication;
};

export default withAuthentication;
