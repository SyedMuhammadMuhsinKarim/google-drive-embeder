import React, { Component } from "react";
import AuthContext from "../../Session/context";
import AuthNav from "./AuthNav";
import NonAuthNav from "./NonAuthNav";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <AuthContext.Consumer>
        {authUser =>
          authUser ? (
            <AuthNav toggle={this.toggle} isOpen={this.state.isOpen} />
          ) : (
            <NonAuthNav toggle={this.toggle} isOpen={this.state.isOpen} />
          )
        }
      </AuthContext.Consumer>
    );
  }
}

export default Navigation;
