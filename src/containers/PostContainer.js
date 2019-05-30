import { connect } from "react-redux";
import Post from "../components/Post";
import { editPost, removePost, addComment, removeComment } from "../actions";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let post =state.posts[id]
 
  let comments = Object.entries(state.comments).filter(comment =>  comment[1].post_id === id
  )
  

  return {
    id,
    post, 
    comments
  };
}

export default connect(mapStateToProps, {editPost, removePost, addComment, removeComment})(Post);
