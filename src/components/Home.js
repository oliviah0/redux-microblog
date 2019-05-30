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

    let postCards = Object.keys(posts).map(key => (
      <PostCard key={key} id={key} title={posts[key].title} description={posts[key].description} />
    ));


    return (


      <div className="row">
       
        { postCards }

       
      </div>

    );
  }
}

export default Home;