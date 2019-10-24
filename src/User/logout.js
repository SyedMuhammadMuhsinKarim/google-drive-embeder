import React, { Component } from "react";
import { withServer } from "../Api/context";
import { Button } from "reactstrap";
import Swal from "sweetalert2";

class LogOut extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  action = () => {
    console.log("running");
    this.props.server
      .logoutUser()
      .then(() => {
        sessionStorage.removeItem("key");
        Swal.fire("Logout Successfully", "", "success");
      })
      .catch(err => console.error(err.message));
  };

  render() {
    return (
      <Button type="button" onClick={this.action}>
        Log Out
      </Button>
    );
  }
}

export default withServer(LogOut);
