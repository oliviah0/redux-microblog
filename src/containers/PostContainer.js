import { connect } from "react-redux";
import Post from "../components/Post";
import { editPost, removePost } from "../actions";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  console.log("ID", id)
  let post = state.posts.filter(post => post.id === Number(id) )
  console.log(state.posts)
  return {
    post: post[0]
  };
}

export default connect(mapStateToProps, {editPost, removePost})(Post);
