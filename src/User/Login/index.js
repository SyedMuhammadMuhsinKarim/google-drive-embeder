import React from "react";
import { withRouter } from "react-router-dom";
import { withServer } from "./../../Api/context";
import { compose } from "recompose";
import Swal from "sweetalert2";
import LoginForm from "./loginForm";
import { withAuthentication } from "../../Session";

const INITIAL_STATE = {
  email: "",
  password: ""
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  // UNSAFE_componentWillMount() {
  //   const key = sessionStorage.getItem("key");
  //   if (key) {
  //     console.log(key);
  //     this.props.history.push("/");
  //   }
  // }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const post = { email, password };

    this.props.server
      .loginUser(post)
      .then(response => {
        console.log(response.data);
        sessionStorage.setItem("key", response.data.token);
        Swal.fire("Success", "success");
        this.props.history.push("/");
      })
      .catch(e => console.info(e.message));

    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = email === "" || password === "";

    return (
      <LoginForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        isInvalid={isInvalid}
        email={email}
        password={password}
      />
    );
  }
}

export default compose(
  withServer,
  withRouter
)(Login);
