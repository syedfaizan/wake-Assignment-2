import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './containers/login/Login';

const Dashboard = () => (
  <div>
    Dashboard
  </div>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainMenu/>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
