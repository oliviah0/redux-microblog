import React, { Component } from "react";
import "./Post.css";
import PostFormContainer from "../containers/PostFormContainer";
import CommentForm from "../components/CommentForm";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false
    };
    this.showForm = this.showForm.bind(this);
    this.handleRemovePost = this.handleRemovePost.bind(this);
  }

  showForm() {
    this.setState({ showEdit: !this.state.showEdit });
  }

  handleRemovePost() {
    this.props.removePost(this.props.id);
    this.props.history.push('/');
  }

  render() {
    let { title, body, description } = this.props.post;
    let { id, comments, removeComment, addComment } = this.props;
    let editForm;

    // html for for edit post form if showEdit is true
    if (this.state.showEdit) {
      editForm = (
        <div>
          <hr />
          <PostFormContainer
            title={title}
            id={id}
            body={body}
            description={description}
            isEditingPost={true} />
        </div>

      );
    }

    // html for comments list / individual comment associated to post
    let commentList = comments.map(comment => (
      <Comment
        key={comment[0]}
        id={comment[0]}
        removeComment={removeComment}
        text={comment[1].text}
      />
    ));

    return (
      <div>
        <div className="header">
          <h1>{title}</h1>
          <div className="">
            <button
              onClick={this.showForm}
              className="btn btn-default btn-lg">
              <i className="far fa-edit text-primary"></i>
            </button>
            <button
              onClick={this.handleRemovePost}
              className="btn btn-default btn-lg">
              <i className="far fa-trash-alt text-danger"></i>
            </button>
          </div>
        </div>
        <p>{description}</p>
        <p>{body}</p>

        <hr />
        <h3>Comments</h3>
        {commentList}
        <CommentForm postId={id} addComment={addComment} />

        {editForm}
      </div>
    );
  }
}

export default Post;