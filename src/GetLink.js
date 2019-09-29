import React, { Component } from "react";
import axios from "axios";
import Form from "./Components/Form";
import "./styles.css";
import { Link } from "react-router-dom";
import image from "./Components/Form/719.gif";

const GAPI = `https://www.googleapis.com/drive/v2/files/`;
const KEY = `AIzaSyCP2-urwiL1AUDbv0_KHHSv_JKfJXdrKXk`;
const INITIAL_STATE = {
  link: "",
  error: null,
  post: undefined,
  result: undefined
};

class Drive extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    this.setState({ loading: true });
    this.getIdentity();

    event.preventDefault();
  };

  getIdentity = () => {
    const { link } = this.state;
    let identity = undefined;

    if (link.split("=")[0] === "https://drive.google.com/open?id") {
      identity = link.split("=")[1];
      // this.setState({ id: identity });
      this.fetchingAPI(identity);
      // this.fetchingLink(identity);
    } else if (link.split("/")[3] === "file") {
      identity = link.split("/")[5];
      // this.setState({ id: identity });
      this.fetchingAPI(identity);
      // this.fetchingLink(identity);
    } else {
      alert("Error");
    }
  };

  msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + " Hr " + minutes + " Min " + seconds + " Sec";
  }

  async fetchingAPI(link) {
    await axios(`${GAPI}${link}?key=${KEY}`)
      .then(async result => {
        let fileSize = undefined;

        if (result.data.fileSize > 1000000000) {
          fileSize = `${result.data.fileSize / 1000000000} GB`;
        } else {
          fileSize = `${result.data.fileSize / 1000000} MB`;
        }

        if (fileSize !== undefined) {
          await this.setState({
            result: result.data,
            loading: true,
            post: {
              g_id: result.data.id,
              g_down: `${GAPI}${link}?key=${KEY}&alt=media`,
              title: result.data.title.slice(0, -4),
              size: `${fileSize}`,
              // quality: `${result.data.videoMediaMetadata.height}p`,
              format: result.data.title.slice(-3)
              // duration: this.msToTime(
              //   result.data.videoMediaMetadata.durationMillis
              // )
            }
          });
        }
      })
      .then(() => this.sendInfo())
      .then(() => this.setState({ loading: false }))
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  async sendInfo() {
    await axios
      .post("https://api-gd.herokuapp.com", this.state.post)
      .then(response => {
        if (response.data.g_id) {
          this.setState({ host: response.data._id });
          console.log("res", response);
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { link, error, loading, host } = this.state;
    const isInvalid = link === "";
    console.log(host);
    return (
      <>
        <Form
          link={this.state.link}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          disabled={isInvalid}
          error={error}
          loading={loading}
          host={host}
        />
      </>
    );
  }
}

export default Drive;
