import React, { Component } from "react";
// import axios from 'axios';
import "./Dashboard.css";

import Helmet from './helmet';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-2 col-lg-2 ">
                    <img className="img-thumbnail" src="wakecap.png" alt="wakeCap logo"></img>
                </div>
            
                <div className="col-sm-10 col-lg-10">
                    <nav className="navbar">
                        <div className="navbar-menu-wrapper">
                            <ul className="navbar-nav">
                                <li className="nav-item pull-right">
                                    <a className="nav-link profile-pic"><img className="rounded-circle usericon" src="/usericon.jpg" alt=""/></a>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle">
                                            Dropdown button
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" >Action</a>
                                            <a className="dropdown-item" >Another action</a>
                                            <a className="dropdown-item" >Something else here</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
            <Helmet />
            <Helmet />
            </div>



        </div>
    );
  }
}