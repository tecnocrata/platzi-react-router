import React from "react";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import NotFound from "../components/NotFound";

class UniqueVideo extends React.Component {
  render() {
    if (this.props.hasId) return <VideoPlayer autoplay id={this.props.id} />;
    //return <NotFound history={this.props.history} />; //ONE OPTION!!!!!
    return <NotFound />;
  }
}

function mapStateToProps(state, props) {
  const id = props.match.params.id; //this comes from /videos/:id
  return {
    hasId: state
      .get("data")
      .get("entities")
      .get("media")
      .get(id),
    id
  };
}

export default connect(mapStateToProps)(UniqueVideo);
