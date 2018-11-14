import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hemlet.css';

export default class Login extends Component {

    render(){
        return (
        <div className="card helmet" >
            <div className="card-body">
                <div >
                    <FontAwesomeIcon className="onlineIcon" icon="circle"/>
                    <div className="row">
                        <img src="helmet.png" alt=""></img>
                        <div className="">#1113355</div>
                    </div>
                    <div className="row">
                        <img src="id.png" alt=""></img>
                        <div className="">IM-006</div>
                    </div>
                    <div className="row">
                        <img src="clock.png" alt=""></img>
                        <div className="">7 mins ago</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}