import { connect } from "react-redux";
import Home from "../components/Home";

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
