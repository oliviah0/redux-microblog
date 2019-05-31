import React, { Component } from "react";
import PostCard from "./PostCard";

class Home extends Component {
  render() {
    let { posts } = this.props;

    // get single post details and pass down to individual PostCard component
    let postCards = Object.keys(posts).map(key => (
      <PostCard
        key={key}
        id={key}
        title={posts[key].title}
        description={posts[key].description}
      />
    ));

    return (
      <div className="row">
        {postCards}
      </div>

    );
  }
}

export default Home;