import React, { Component } from "react";
import plyr from "plyr";
import "./index.css";
import Helmet from "react-helmet";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video
    };
  }

  componentDidMount() {
    // const options = {};

    const controls = [
      "play-large", // The large play button in the center
      "restart", // Restart playback
      // "rewind", // Rewind by the seek time (default 10 seconds)
      "play", // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      "progress", // The progress bar and scrubber for playback and buffering
      "current-time", // The current time of playback
      "duration", // The full duration of the media
      // "mute", // Toggle mute
      "volume", // Volume control
      // "captions", // Toggle captions
      "settings", // Settings menu
      "pip", // Picture-in-picture (currently Safari only)
      "airplay", // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      "fullscreen" // Toggle fullscreen
    ];

    this.player = plyr.setup("#plyr-player", { controls });
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

        <div className="my-div shadow container">
          <div className="embed-responsive-16by9">
            <video
              id="plyr-player"
              className="embed-responsive-item my-player"
              controls
              playsinline
              poster={
                this.props.poster
                  ? `https://drive.google.com/vt?id=${this.props.poster}`
                  : ""
              }
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
