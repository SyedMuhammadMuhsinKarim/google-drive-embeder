import React from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./context";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listner();
    }

    listner() {
      if (!condition(sessionStorage.getItem("key"))) {
        this.props.history.push("/login");
      }
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthContext.Consumer>
      );
    }
  }
  return WithAuthorization;
};

export default withRouter(withAuthorization);
