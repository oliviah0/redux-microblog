import { connect } from "react-redux";
import Post from "../components/Post";
import { 
  editPost, 
  removePostFromAPI, 
  addCommentToAPI, 
  removeCommentFromAPI, 
  startLoad
} from "../actions";

function mapStateToProps(state, ownProps) {
  startLoad();
  let id = Number(ownProps.match.params.id);
  let post = state.posts[id];

  return {
    id,
    post
    // loading: state.loading
  };
}

export default connect(
  mapStateToProps, 
  { 
    editPost, 
    removePostFromAPI, 
    addCommentToAPI, 
    removeCommentFromAPI 
  }
)(Post);
