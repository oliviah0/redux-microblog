import React, { Component } from 'react';

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
    let commentObj = {...this.state, id: this.props.postId};
    this.props.addComment(commentObj);

    //TODO - figure out how to rerender post page to show new comment
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              onChange={this.handleChange} 
              name="text" 
              className="form-control" 
              value={this.state.text} 
              placeholder="New Comment" 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary">Submit
          </button>
        </form>
      </div>
    );
  }
}
