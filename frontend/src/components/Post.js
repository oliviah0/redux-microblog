import React, { Component } from "react";
import "./Post.css";
import PostFormContainer from "../containers/PostFormContainer";
import CommentForm from "../components/CommentForm";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleRemovePost = this.handleRemovePost.bind(this);
  }

  toggleEditForm() {
    this.setState({ showEdit: !this.state.showEdit });
  }

  handleRemovePost() {
    this.props.removePostFromAPI(this.props.id);
    this.props.history.push('/');
  }

  render() {
    if (this.props.post) {
      let { title, body, description, comments } = this.props.post;
      let { id, removeCommentFromAPI, addCommentToAPI } = this.props;
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
              isEditingPost={true}
              toggleEditForm={this.toggleEditForm} />
          </div>

        );
      }

      // html for comments list / individual comment associated to post
      let commentList = comments.map(comment => (
        <Comment
          key={comment.id}
          id={comment.id}
          postId={id}
          removeCommentFromAPI={removeCommentFromAPI}
          text={comment.text}
        />
      ));

      let postRender = (<div>
        <div className="header">
          <h1>{title}</h1>
          <div className="">
            <button
              onClick={this.toggleEditForm}
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

        <h4 className="mt-5">Comments</h4>
        <ul class="list-group list-group-flush mb-3">
          {commentList}
        </ul>
        <CommentForm postId={id} addCommentToAPI={addCommentToAPI} />

        {editForm}
      </div>)

      return (
        <div>
          {!this.props.loading ? postRender : <p>Content is loading...</p>}
        </div>
      );
    } else {
      return 'LOADING';
    }
  }
}

export default Post;