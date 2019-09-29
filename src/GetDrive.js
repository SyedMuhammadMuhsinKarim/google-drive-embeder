import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import Video from "./Components/Video";
import image from "./Components/Form/719.gif";

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

  async fetchingData() {
    await axios
      .get(`https://api-gd.herokuapp.com/${this.state.id}`)
      .then(response => {
        this.setState({ my_res: response.data, loading: false });
        console.log(response.data);
      })
      .catch(function(error) {
        console.error("Error", error);
      });
  }

  render() {
    const { my_res } = this.state;
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
          <Video video={my_res.g_down} title={my_res.title} />
        )}
      </>
    );
  }
}

export default Drive;
