/**
 * Handles application routing and places views
 */
import SPLOMPanel from "../views/SPLOMPanel";
import PAPanel from "../views/PAPanel";
import SchedulerPanel from "../views/SchedulerPanel";
import TableView from "./TableView";
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, } from 'react-router'
import Header from "./Header";
class App extends Component {
  render() {
    return (
      <span >

        <Router history={hashHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={SchedulerPanel} />
            <Route path='/Scheduler' component={SchedulerPanel} />
            <Route path='/SPLOM' component={SPLOMPanel} />
            <Route path='/PAPanel' component={PAPanel} />
          </Route>
        </Router>


      </span>
    );
  }
}
export default App;

