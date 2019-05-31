import { connect } from "react-redux";
import Post from "../components/Post";
import { editPost, removePostFromAPI, addComment, removeComment } from "../actions";

function mapStateToProps(state, ownProps) {
  let id = Number(ownProps.match.params.id);
  let post = state.posts[id];

  return {
    id,
    post,
  };
}


export default connect(
  mapStateToProps, 
  { editPost, removePostFromAPI, addComment, removeComment }
)(Post);
