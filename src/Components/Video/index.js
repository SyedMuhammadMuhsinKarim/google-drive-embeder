import React, { Component } from "react";
import plyr from "plyr";
import styles from "plyr/dist/plyr.css";
import "./index.css";
import Helmet from "react-helmet";

export default class Video extends Component {
  componentDidMount() {
    const options = {};
    this.player = plyr.setup("#plyr-player", options);
  }
  componentWillUnmount() {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.destroy();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.title ? this.props.title : "Demo"}</title>
        </Helmet>
        <div className="my-div shadow middle container">
          <div className="embed-responsive-16by9">
            <video
              id="plyr-player"
              className="embed-responsive-item my-player"
              controls
              poster={this.props.poster ? this.props.poster : ""}
            >
              <source
                src={
                  this.props.video
                    ? this.props.video
                    : "http://techslides.com/demos/sample-videos/small.mp4"
                }
                type={this.props.type ? this.props.type : "video/mp4"}
              />
            </video>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
