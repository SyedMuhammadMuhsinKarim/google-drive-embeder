import React, { Component } from "react";
import axios from "axios";
import Form from "./Components/Form";
import "./styles.css";
import Swal from "sweetalert2";
import dotenv from "dotenv";
import { withServer } from "./Api/context";
dotenv.config();

const KEY = process.env.REACT_APP_KEY;
const GAPI = process.env.REACT_APP_GOOGLE_API;

const INITIAL_STATE = {
  link: "",
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
    this.setState({ host: undefined });
    event.preventDefault();
  };

  getIdentity = () => {
    const { link } = this.state;
    let identity = undefined;

    if (link.split("=")[0] === "https://drive.google.com/open?id") {
      identity = link.split("=")[1];
      this.fetchingAPI(identity);
      // console.log("ID OPEN", identity);
    } else if (link.split("/")[3] === "file") {
      identity = link.split("/")[5];
      this.fetchingAPI(identity);
      // console.log("ID VIEW", identity);
    } else {
      Swal.fire("Something Wrong", "Your Link Format is Improper", "error");
      this.setState({
        loading: false
      });
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

  fetchingAPI(link) {
    axios(`${GAPI}${link}?key=${KEY}`)
      .then(result => {
        let fileSize = undefined;
        // console.info(result);

        if (result.data.fileSize > 1000000000) {
          fileSize = `${result.data.fileSize / 1000000000} GB`;
        } else {
          fileSize = `${result.data.fileSize / 1000000} MB`;
        }

        if (fileSize !== undefined) {
          this.setState({
            result: result.data,
            loading: true,
            post: {
              g_id: result.data.id,
              g_down: `${GAPI}${link}?key=${KEY}&alt=media`,
              title: result.data.title.slice(0, -4),
              size: `${fileSize}`,
              format: result.data.mimeType
            }
          });
        }
      })
      // .then(() => console.info(this.state.post))
      .then(() => this.sendInfo())
      .catch(error => {
        Swal.fire("Something Wrong", error, "error");
        this.setState({ loading: false });
      });
  }

  sendInfo() {
    // axios
    //   .post(`${DEV_SERVER}/link`, this.state.post)
    this.props.server
      .postLink(this.state.post)
      .then(res => {
        this.setState({ host: res.data._id });
      })
      .then(() => this.setState({ loading: false }))
      .catch(error => {
        Swal.fire("Something Wrong", error.response.data, "error");
        this.setState({ loading: false });
      });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { link, loading, host } = this.state;
    const isInvalid = link === "";
    return (
      <>
        <Form
          link={this.state.link}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          disabled={isInvalid}
          loading={loading}
          host={host}
        />
      </>
    );
  }
}

export default withServer(Drive);
