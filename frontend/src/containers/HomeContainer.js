import { connect } from "react-redux";
import Home from "../components/Home";
import { getTitlesFromAPI } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.titles
  };
}

export default connect(
  mapStateToProps,
  { getTitlesFromAPI }
)(Home);
