import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../components/Home";
import PostFormContainer from "../containers/PostFormContainer";
// import ItemDetailsContainer from "../containers/ItemDetailsContainer";
// import CartContainer from "../containers/CartContainer";


class Routes extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/new" render={() => <PostFormContainer />} />
        {/* <Route exact path="/items/:id" render={(props) => <ItemDetailsContainer {...props}/>} />
        <Route exact path="/cart" render={(props) => <CartContainer {...props}/>} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

}

export default Routes;