import React, {Component} from "react";
import request from '../../../utils/request';
import {Bar} from 'react-chartjs-2';
import Helmets from '../helmet/helmet'


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workers: [],
            selectedWorker: null,
            refresh: false
        };
    }

    componentDidMount() {
        let self = this;
        request
            .get('/workers')
            .then(response => {
                self.setState({workers: response.data})
            })
    }

    onSearch(event) {

        request
            .get('/workers', {
            params: {
                name_like: event.target.value
            }
        })
            .then(response => {
                this.setState({workers: response.data})
            })

    }

    selectWorker(worker) {
        this.setState({selectedWorker: worker});
        this.setState({refresh: !this.state.refresh});
    }
    render() {
        return (
            <div className="body">
                <div className="workers">
                    <div className="search__wrapper">
                        <input
                            className="search__box"
                            placeholder="Search Worker"
                            onChange={this
                            .onSearch
                            .bind(this)}/>
                    </div>

                    <ul className="workers_list">
                        {this
                            .state
                            .workers
                            .map((worker, index) => {
                                return (
                                    <li
                                        className="worker__item"
                                        key={index}
                                        onClick={this
                                        .selectWorker
                                        .bind(this, worker)}>
                                        <span>
                                            <img
                                                className="usericon"
                                                alt=""
                                                src={worker.avatar
                                                ? worker.avatar
                                                : 'usericon.jpg'}></img>
                                        </span>
                                        <div className="worker__details">
                                            <div className="worker__name">
                                                <b>{worker.name}</b>
                                            </div>
                                            <div className="worker__designation">{worker.designation}</div>
                                        </div>
                                        <div className="worker__number">
                                            Worker Id: {worker.id}
                                        </div>
                                    </li>
                                )
                            })}

                    </ul>

                    <div className="pagination">
                        <span>Prev</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>Next</span>
                    </div>
                </div>

                {this.state.selectedWorker
                    ? <div className="worker">
                            <div className="top">
                                <div className="container worker__details__large">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <img className="profile__avatar__large" src={this.state.selectedWorker? this.state.selectedWorker.avatar: 'usericon.jpg'} alt=""/>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <b className="worker__name__large">{this.state.selectedWorker.name}</b>
                                                </div>
                                                <div className="col-lg-6">
                                                    <span>Asset Id: #{this.state.selectedWorker.assetId}</span>
                                                </div>
                                            </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <span className="worker__designation__large">{this.state.selectedWorker.designation}</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                    <span>Tag Id: #{this.state.selectedWorker.tagId}</span>
                                                </span>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="row">
                                                <span className="col-lg-6">Supervisor Name</span>
                                                <div className="col-lg-6">
                                                    <span className="username__photo"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="middle">
                                <div className="middle__format">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-3 adjust__rows">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <img src="calendar.png" alt=""></img>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <span>Total hours Worked</span>
                                                        <p>{this.state.selectedWorker.totalHours}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <img src="location.png" alt=""></img>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <span>last seen</span>
                                                        <p>{this.state.selectedWorker.lastSeen}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <Bar/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="bottom">
                                <div className="container-fuild">
                                    <Helmets workerId={this.state.selectedWorker.id} refresh={this.state.refresh}></Helmets>
                                </div>
                            </div>
                        </div>
                    : null
}

            </div>
        );
    }
}