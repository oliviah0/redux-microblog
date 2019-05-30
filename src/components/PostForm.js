import React, { Component } from "react";
// import "./PostForm.css";

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
    console.log("WE SUBMITTED FORM", this.props)

    // check if we came from editing post page
    this.props.isEditingPost ? this.props.editPost( this.state ) : this.props.addPost( this.state );
    this.props.history.push("/");
    // untoggle form, if editing and stay on post page
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          className="form-control" 
          id="title"
          name="title"
          placeholder="Enter a title"
          onChange={this.handleChange}
          value={this.state.title}
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
          value={this.state.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea 
          className="form-control" 
          id="body"
          name="body"
          onChange={this.handleChange}
          value={this.state.body}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default PostForm;