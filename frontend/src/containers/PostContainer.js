import { connect } from "react-redux";
import Post from "../components/Post";
import { editPost, removePost, addComment, removeComment } from "../actions";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let post = state.posts[id];

  return {
    id,
    post,
  };
}

export default connect(
  mapStateToProps, 
  { editPost, removePost, addComment, removeComment }
)(Post);