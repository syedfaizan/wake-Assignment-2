import React, {Component} from "react";

export default class LeftNav extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    logout(){
        debugger;
        localStorage.clear();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="left">
                <div className="logoWrapper">
                    <a href="/"><img className="img-thumbnail wakecap_logo" src="wakecap.png" alt=""/></a>
                    <span className="logo__text"></span>
                </div>
                <ul className="leftPanel__list">
                    <li className="leftPane__item">Dashboard</li>
                    <li className="leftPane__item active">Workers</li>
                    <li className="leftPane__item">Zones</li>
                    <li className="leftPane__item">Assign Helmets</li>
                    <li className="leftPane__item">Reports</li>
                    <li className="leftPane__item">Manage Site</li>
                    <li className="leftPane__item">Settings</li>
                    <li className="leftPane__item" onClick={this.logout.bind(this)}>Logout</li>
                </ul>

                <div className="emergencyButtonWrapper">
                    <button className="emergencyButton">EMERGENCY</button>
                </div>
            </div>
        );
    }
}