import React, { Component } from "react";

import LeftNav from '../dashboard-elements/leftNav/LeftNav';
import Header from '../dashboard-elements/header/Header';
import WorkerContainer from '../dashboard-elements/workerContainer/WorkerContainer';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="bodyWrapper">
          <LeftNav history={this.props.history}/>
          <div className="right">
            <Header/>
            <WorkerContainer/>
          </div>
          {this.props.children}
        </div>
    );
  }
}