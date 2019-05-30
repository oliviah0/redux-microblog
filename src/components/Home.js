import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

class Home extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    let { posts } = this.props

    let postCards = posts.map(post => (
      <PostCard key={post.id} id={post.id} title={post.title} description={post.description} />
    ));


    return (


      <div className="row">
       
        { postCards }

       
      </div>

    );
  }
}

export default Home;