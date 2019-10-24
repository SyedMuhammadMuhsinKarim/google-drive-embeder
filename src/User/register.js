import React, { Component } from "react";
import { Form, Container, FormGroup, Input, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withServer } from "../Api/context";
// import Swal from "sweetalert2";

const INITIAL_STATE = {
  email: "",
  username: "",
  password: ""
};

class Registeration extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  UNSAFE_componentWillMount() {
    const key = localStorage.getItem("key");
    console.log("Key:", key);
    if (key) {
      this.props.history.push("/");
    }
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { email, password, username, myResult } = this.state;
    const post = { username, email, password };
    const { server } = this.props;
    const registerUser = server.registerUser;

    registerUser(post)
      // .then(result => console.log(result.data))
      .then(result => this.setState({ myResult: result.data }))
      .then(() => localStorage.setItem("key", myResult.token))
      .then(() => this.props.history.push("/"))
      .catch(error => console.info(error.message));

    event.preventDefault();
  };

  render() {
    const { password, email, username } = this.state;
    const isInvalid = email === "" || password === "" || username === "";

    return (
      <Container>
        <h3 className="text-center">Sign Up</h3>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type="username"
              name="username"
              placeholder="Username..."
              // className="shadow login"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email..."
              onChange={this.onChange}
              // className="shadow login"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password..."
              // className="shadow login"
              onChange={this.onChange}
            />
          </FormGroup>

          <Button disabled={isInvalid} color="danger">
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}

export default compose(
  withRouter,
  withServer
)(Registeration);
