import { connect } from "react-redux";
import { addPost, editPost, removePost } from "../actions";
import PostForm from "../components/PostForm";

// when you use the object curlies, it implies to dispatch the action
export default connect(
  null,
  {addPost, editPost}
)(PostForm);
