import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  render() {
    let { id, title, description } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card"
          style={{ "width": "18rem", "display": "inline-block", "height": "15rem" }}>
          <div className="card-body">
            <Link
              to={`/${id}`}>
              <h5 className="card-title">{title}</h5>
            </Link>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;