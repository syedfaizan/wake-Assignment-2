

import React, {Component} from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount(){
        let user = localStorage.getItem('user');
        this.setState({
          user: JSON.parse(user)
        })
    }

    render() {
        return (
            <div className="header">
            <div className="overview">
                <div className="overview__workers">Workers</div>
                <div className="overview__overview">Overview</div>
            </div>

            <div className="selectSite">
                <select className="selectSiteDropdown">
                    <option disabled>Select site</option>
                    <option>Site A</option>
                    <option>Site B</option>
                </select>
            </div>

            <div className="username">
                <span>
                    <img className="img-rounded profile__avatar" alt="profile pic" src={this.state.user && this.state.user.avatar}/>
                </span>
                <span className="username__username">{this.state.user && this.state.user.name}</span>
            </div>
        </div>
        );
    }
}