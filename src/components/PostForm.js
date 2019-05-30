import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // determine how to process add new or edit post
    if (this.props.isEditingPost) {
      this.props.editPost(this.state);

      // TODO: figure out how to rerender the page to untoggle form area on post and updated content
      window.location.reload();
      // <Redirect to = {`/${this.props.id}`} />
      // this.props.history.push(`/${this.props.id}`);

    } else {
      this.props.addPost(this.state);
      this.props.history.push("/");
    }
  }

  render() {
    let { title, description, body } = this.state;
    let formTitle = this.props.isEditingPost ? "Edit Post" : "New Post";

    return (
      <div>

        <h3 className="mb-4">{formTitle}</h3>
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              id="description"
              name="description"
              placeholder="description"
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
              onChange={this.handleChange}
              value={body}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;