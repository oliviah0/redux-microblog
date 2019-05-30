import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className="col-sm-4">
        <div className="card" style={{ "width": "18rem", "display": "inline-block", "height": "15rem" }}>
          <div className="card-body">
            <Link to={`/${this.props.id}`}><h5 className="card-title">{this.props.title}</h5></Link>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard ;