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
    }
    this.showForm = this.showForm.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  showForm() {
    this.setState({ showEdit: !this.state.showEdit })
  }

  handleRemove(){
    console.log('i fired')
    this.props.removePost(this.props.id)
    this.props.history.push('/')
  }

  render() {
    let editForm;

    if (this.state.showEdit) {
      editForm = (
      <div>
        <hr/>
        <PostFormContainer 
          title={this.props.post.title} 
          id={this.props.id} 
          body={this.props.post.body}
          description={this.props.post.description} 
          isEditingPost={true} />
      </div>
        
      )
    }

    let commentList = this.props.comments.map(comment => (
      <Comment key={comment[0]} id={comment[0]} removeComment={this.props.removeComment}text={comment[1].text}/>
    ))

    return (
      <div>

        <div className="header">
          <h1>{this.props.post.title}</h1>
          <div className="">
            <button onClick={this.showForm} className="btn btn-default btn-lg"><i className="far fa-edit text-primary"></i></button>
            <button onClick={this.handleRemove} className="btn btn-default btn-lg"><i className="far fa-trash-alt text-danger"></i></button>
          </div>
        </div>
        <p>{this.props.post.description}</p>
        <p>{this.props.post.body}</p>
        <hr/>
        <h3>Comments</h3>
        {commentList}
        <CommentForm postId={this.props.id} addComment={this.props.addComment}/>

        {editForm}
      </div>
    );
  }
}

export default Post;