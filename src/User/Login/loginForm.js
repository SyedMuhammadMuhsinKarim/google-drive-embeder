import React from "react";
import { Form, Container, FormGroup, Input, Button } from "reactstrap";

const LoginForm = props => (
  <Container>
    <Form onSubmit={props.onSubmit}>
      <FormGroup>
        <Input
          onChange={props.onChange}
          name="email"
          type="email"
          value={props.email}
          placeholder="Email..."
        />
      </FormGroup>
      <FormGroup>
        <Input
          onChange={props.onChange}
          name="password"
          type="password"
          value={props.password}
          placeholder="Password..."
        />
      </FormGroup>
      <Button type="submit" disabled={props.isInvalid} color="danger">
        Login
      </Button>
    </Form>
  </Container>
);

export default LoginForm;
