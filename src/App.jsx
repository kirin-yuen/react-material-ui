/*
 * @Author: ywl
 * @LastEditors: ywl
 */
import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Exceptions from "@/views/Exceptions";
import { checkLogin } from "@/common/storage/login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            component={() => <Redirect to="/home" />}
            exact
          ></Route>
          <Route
            path="/home"
            component={(props) => {
              return checkLogin() ? (
                <Home />
              ) : (
                <Redirect to={`/login?prev_url=${props.match.path}`} />
              );
            }}
            exact
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={Exceptions}></Route>
        </Switch>
      </Router>
    );
  }
}
