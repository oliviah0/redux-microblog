import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="header">
          <div>
            <h1 className="display-1">Pringle Mingle</h1>
            <blockquote className="blockquote">
              {/* <p class="mb-0">ಥ◡ಥ</p> */}
              <footer className="blockquote-footer">Haley and Olivia</footer>
            </blockquote>
          </div>
          <div>
            <img src="https://i.redd.it/dmn115amzf031.jpg" />
          </div>
        </div>
        <hr className="my-4" />
        <Link to="/">Home </Link> |
          <Link to="/new"> New Post </Link>
      </div>
    );
  }
}

export default Nav;