import React, { Component } from "react";
import { Form, Container, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
    console.log(key);
    if (key) {
      this.props.history.push("/");
    }
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { email, password, username } = this.state;
    const post = { username, email, password };
    this.setState({ post });
    this.registerUser();
    event.preventDefault();
  };

  componentDidMount = () => this.registerUser();

  registerUser(post) {
    const { result } = this.state;
    if (post) {
      axios
        .post("https://50tx2.sse.codesandbox.io/user/", post)
        .then(result => console.log(result.data))
        .then(result => this.setState({ result: result.data }))
        .then(() => localStorage.setItem("key", result.token))
        .catch(error => console.log(error.message));
    }
  }

  render() {
    const { password, email, username } = this.state;
    const isInvalid = email === "" && password === "" && username === "";

    return (
      <Container className="middle">
        <h3 className="text-center">Sign Up</h3>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type="username"
              name="username"
              placeholder="Username..."
              className="shadow login"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email..."
              onChange={this.onChange}
              className="shadow login"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password..."
              className="shadow login"
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

export default withRouter(Registeration);
