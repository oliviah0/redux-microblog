import React, { Component } from 'react';

export default class Comment extends Component {
  handleRemove = () => {
    this.props.removeCommentFromAPI(this.props.id, this.props.postId);
  }

  render() {
    return (
      <li className="list-group-item">
        <button
          onClick={this.handleRemove}
          className='btn btn-default'>
          <i className="text-danger fas fa-minus-circle"></i>
        </button>
        {this.props.text}
      </li>
    );
  }
}
