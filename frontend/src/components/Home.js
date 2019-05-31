import React, { Component } from "react";
import PostCard from "./PostCard";

class Home extends Component {
  componentDidMount(){
    
    // when you delete a post and it pushes back to home, it remounts this page causing componentDidMount to rerender.
    if (this.props.posts.length === 0) {
      this.props.getTitlesFromAPI();

    }
  }

  render() {
    //posts refers to state.titles
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