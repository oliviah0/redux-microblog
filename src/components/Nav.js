import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

class Nav extends Component {

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Olaley Blog</h1>
        <p className="lead">This is gonna be sooo fun. ಥ◡ಥ</p>
        <p>-Haley and Olivia</p>
        <hr className="my-4"/>
          <Link to="/">Home </Link> |
          <Link to="/new"> New Post </Link>
      </div>
        );
      }
    }
    
export default Nav;