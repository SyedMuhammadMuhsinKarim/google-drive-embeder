import React from "react";
import { AuthContext } from "./index";
// import { withRouter } from "react-router-dom";
import * as ROUTES from "./../constants/routes";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authUserToken: sessionStorage.getItem("key") || null };
    }

    // componentDidMount() {
    //   this.listner();
    // }

    // componentWillUnmount() {
    //   this.listner();
    // }

    // listner() {
    //   const { authUserToken } = this.state;
    //   if (!authUserToken) {
    //     this.props.history.push(ROUTES.SIGN_IN);
    //   }
    // }

    render = () => (
      <AuthContext.Provider value={this.state.authUserToken}>
        <Component {...this.props} />
      </AuthContext.Provider>
    );
  }

  return WithAuthentication;
};

export default withAuthentication;
