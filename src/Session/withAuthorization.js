import React from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./context";
import { compose } from "recompose";
import * as ROUTES from "./../constants/routes";

const withAuthorization = condition => Component => {
  //condition => send by protected route
  return class WithAuthorization extends React.Component {
    listner() {
      if (!condition(sessionStorage.getItem("key"))) {
        // if user-key is not fount send to login page
        this.props.history.push(ROUTES.SIGN_IN);
      }
    }

    componentWillUnmount() {
      this.listener();
    }

    componentDidMount() {
      this.listner();
    }

    render() {
      return (
        /* token -(taken by)-> withAuthentication */
        <AuthContext.Consumer>
          {authUserToken =>
            condition(authUserToken) ? <Component {...this.props} /> : null
          }
        </AuthContext.Consumer>
      );
    }
  };
};

export default compose(withRouter)(withAuthorization);
