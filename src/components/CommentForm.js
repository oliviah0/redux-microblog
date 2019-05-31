import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // create a new comment record and add to our global state
    this.props.addComment(this.state, this.props.postId);

    //TODO - figure out how to rerender post page to show new comment
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleChange}
              name="text"
              className="form-control"
              value={this.state.text}
              placeholder="Add a new comment..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary">Add Comment
          </button>
        </form>
      </div>
    );
  }
}
