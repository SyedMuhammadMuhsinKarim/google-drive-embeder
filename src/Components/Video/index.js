import React, { Component } from "react";
import plyr from "plyr";
import "./index.css";
import Helmet from "react-helmet";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: props.video
    };
  }

  componentDidMount() {
    // const options = {};

    // console.log(this.state.video);

    const controls = [
      "play-large", // The large play button in the center
      "restart", // Restart playback
      // "rewind", // Rewind by the seek time (default 10 seconds)
      "play", // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      "progress", // The progress bar and scrubber for playback and buffering
      // "current-time", // The current time of playback
      "duration", // The full duration of the media
      // "mute", // Toggle mute
      "volume", // Volume control
      // "captions", // Toggle captions
      "settings", // Settings menu
      "pip", // Picture-in-picture (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      "airplay", // Airplay (currently Safari only)
      "fullscreen" // Toggle fullscreen
    ];

    this.player = plyr.setup("#plyr-player", {
      controls
    });
  }
  componentWillUnmount() {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.destroy();
      }
    }
  }

  render() {
    const { res } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>{res ? res.title : "Demo"}</title>
        </Helmet>

        <div className="my-div shadow container">
          <div className="embed-responsive-16by9">
            <video
              id="plyr-player"
              className="embed-responsive-item my-player"
              controls
              playsinline
              poster={res ? `https://drive.google.com/vt?id=${res.g_id}` : ""}
            >
              <source
                src={
                  res
                    ? res.g_down
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
