import React from "react";
import { withAuthorization } from "../Session";
// import { compose } from "recompose";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;
const auth = () => withAuthorization(condition);

console.log("Auth", condition);

export default auth(HomePage);
