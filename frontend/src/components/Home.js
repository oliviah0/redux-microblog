import React, { Component } from "react";
import PostCard from "./PostCard";

class Home extends Component {
  componentDidMount(){
    this.props.getTitlesFromAPI();
  }

  render() {
    //this is state.titles
    let { posts } = this.props;

    // get single post details and pass down to individual PostCard component
    let postCards = posts.map(post => (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        description={post.description}
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