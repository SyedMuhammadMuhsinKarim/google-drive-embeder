import React, { Component } from "react";
import "./styles.css";
import Video from "./Components/Video";
import image from "./Components/Form/719.gif";
import { withServer } from "./Api/context";
import dotenv from "dotenv";
dotenv.config();

class Drive extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  UNSAFE_componentWillMount() {
    const path = window.location.pathname.split("/");
    this.setState({ id: path[1] });
  }

  componentDidMount() {
    this.fetchingData();
  }

  fetchingData() {
    const { id } = this.state;
    this.props.server
      .getLinkWithId(id)
      .then((response) =>
        this.setState({ my_res: response.data, loading: false })
      )
      .catch((error) => this.setState({ loading: false }));
  }

  render() {
    const { my_res } = this.state;
    // console.log(my_res);
    return (
      <>
        {this.state.loading === true ? (
          <img
            className="mid"
            width="64px"
            height="64px"
            alt="Loading"
            src={image}
          />
        ) : (
          <Video video={my_res} />
        )}
      </>
    );
  }
}

export default withServer(Drive);
