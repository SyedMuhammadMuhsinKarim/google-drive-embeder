import React, { Component } from "react";
import { withServer } from "../Api/context";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import { Redirect } from "react-router";
import * as ROUTER from "./../constants/routes";
import { compose } from "recompose";

class LogOut extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  action = () => {
    console.log("running");
    // sessionStorage.removeItem("key");
    this.props.server
      .logoutUser()
      .then(() => {
        sessionStorage.removeItem("key");
        Swal.fire("Logout Successfully", "", "success");
        return <Redirect to={ROUTER.SIGN_IN} />;
      })
      .catch(err => Swal.fire("Logout Failed", err.message, "error"));
  };

  render() {
    return (
      <Button type="button" onClick={this.action}>
        Log Out
      </Button>
    );
  }
}

export default compose(withServer)(LogOut);
