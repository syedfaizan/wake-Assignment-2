import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/login/Login';
import Dashboard from './containers/dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="bodyWrapper">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
