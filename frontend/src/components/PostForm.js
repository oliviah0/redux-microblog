import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // determine how to process add new or edit post
    if (this.props.isEditingPost) {
      this.props.editPost(this.props.id, this.state);
      this.props.toggleEditForm();

    } else {
      this.props.addPostToAPI({ ...this.state });
      this.props.history.push("/");
    }
  }

  handleCancel() {
    this.props.history.push("/");
  }

  render() {
    let { title, description, body } = this.state;
    let formTitle = this.props.isEditingPost ? "Edit Post" : "New Post";

    return (
      <div>

        <h4 className="mb-4">{formTitle}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter a title"
              onChange={this.handleChange}
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter a description"
              onChange={this.handleChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              placeholder="Add content"
              onChange={this.handleChange}
              value={body}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mx-1">Save</button>
          <button onClick={this.handleCancel} className="btn btn-secondary mx-1">Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;