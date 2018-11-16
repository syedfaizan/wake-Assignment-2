import React, { Component } from "react";
import request from '../../../utils/request';
import './hemlet.css';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            helmets: []
        }
    }

    componentDidMount(){
        var workerId = this.props.workerId;
        this.fetchHelmets(workerId);
    }
    fetchHelmets(workerId){
        request.get('/helmets', {
            params: {
            workerId: workerId
            }
        })
        .then( response =>{
            if(response.data && response.data.length){
                this.setState({
                    helmets: response.data
                })
            }
        })
    }
    componentWillReceiveProps(props){
        const { refresh } = this.props;
        if(props.refresh !== refresh){
            this.fetchHelmets(props.workerId)
        }
    }
    render(){
        return (
            <div className="row">
                { this.state.helmets && this.state.helmets.length ? 

                this.state.helmets.map( (helmet, index) => {
                    return (
                        <div className="helmet_container col-md-3" key={index}>
                            <div className="card helmet" >
                                <div className="card-body">
                                    <div >
                                        <div className="row">
                                            <img src="helmet.png" alt=""></img>
                                            <div className="">{helmet.id}</div>
                                        </div>
                                        <div className="row">
                                            <img src="id.png" alt=""></img>
                                            <div className="">{helmet.identifier}</div>
                                        </div>
                                        <div className="row">
                                            <img src="clock.png" alt=""></img>
                                            <div className="">{helmet.lastUsed}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })
                 : <span>No Helmets Assigned! Assign one?</span> }

                <img className="addmore_image" src="addmore.png" alt=""></img>

            </div>
        )
    }
}