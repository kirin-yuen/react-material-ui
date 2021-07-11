/*
 * @Author: ywl
 * @LastEditors: ywl
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Exception from "@/views/Exception";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}
