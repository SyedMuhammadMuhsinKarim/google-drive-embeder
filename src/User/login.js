import React from "react";
import { Form, Container, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: ""
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  ComponentDidMount() {
    this.login(this.state.post);
  }

  UNSAFE_componentWillMount() {
    const key = sessionStorage.getItem("key");
    if (key) {
      console.log(key);
      this.props.history.push("/");
    }
  }

  login(post) {
    if (post) {
      axios
        .post(`https://50tx2.sse.codesandbox.io/user/login`, post)
        .then(response => {
          console.log(response.data);
          sessionStorage.setItem("key", response.data.token);
          this.props.history.push("/");
        })
        .catch(e => console.log(e));
    }
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    const { email, password } = this.state;
    const post = { email, password };
    this.setState({ post });
    this.login(this.state.post);
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = email === "" && password === "";
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              onChange={this.onChange}
              name="email"
              type="email"
              placeholder="Email..."
            />
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="Password..."
            />
          </FormGroup>
          <Button disabled={isInvalid} color="danger">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
