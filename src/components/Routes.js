import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import PostFormContainer from "../containers/PostFormContainer";
// import ItemDetailsContainer from "../containers/ItemDetailsContainer";
// import CartContainer from "../containers/CartContainer";


class Routes extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <HomeContainer />} />
        <Route exact path="/new" render={(props) => <PostFormContainer {...props} />} />
        {/* <Route exact path="/items/:id" render={(props) => <ItemDetailsContainer {...props}/>} />
        <Route exact path="/cart" render={(props) => <CartContainer {...props}/>} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

}

export default Routes;