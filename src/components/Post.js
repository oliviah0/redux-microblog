import React, { Component } from "react";
import "./Post.css";
import PostFormContainer from "../containers/PostFormContainer"

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false
    }
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    this.setState({ showEdit: true })
  }

  render() {
    return (
      <div>

        <div id="header">
          <h1>{this.props.post.title}</h1>
          <div className="">
            <button onClick={this.showForm} className="btn btn-default btn-lg"><i class="far fa-edit text-primary"></i></button>
            <button className="btn btn-default btn-lg"><i class="far fa-trash-alt text-danger"></i></button>
          </div>
        </div>
        <p>{this.props.post.description}</p>
        <p>{this.props.post.body}</p>

        <PostFormContainer 
          title={this.props.post.title} 
          id={this.props.post.id} 
          body={this.props.post.body}
          description={this.props.post.description} 
          isEditingPost={true} />
      </div>
    );
  }
}

export default Post;