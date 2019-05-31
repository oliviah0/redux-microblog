import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import PostFormContainer from "../containers/PostFormContainer";
import PostContainer from "../containers/PostContainer";


class Routes extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <HomeContainer />} />
        <Route exact path="/new" render={(props) => <PostFormContainer {...props} />} />
        <Route exact path="/:id" render={(props) => <PostContainer {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

}

export default Routes;