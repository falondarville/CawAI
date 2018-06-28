import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/signup';
import Analysis from './components/analysis';
import Loggedin from './components/loggedin';
import Logout from './components/logout';

export default class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Switch>
       			<Route exact path='/' component={Login} />
       			<Route path='/analysis' component={Analysis} />
            <Route path='/loggedin' component={Loggedin} />
            <Route path='/logout' component={Logout} />
            <Route path='*' component={Login} />
       		</Switch>
        </div>
      </Router>
    );
  }
}
