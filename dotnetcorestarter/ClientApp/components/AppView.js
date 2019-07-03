import React, { Component } from 'react';
import Constants from '../constants';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import PlantOverView from '../containers/PlantOverview';
class AppView extends Component {
    componentWillMount() {
        console.log("AppView mounted");
    }
    render() {
        console.log("AppView Props: ", this.props);
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container">
                        <a className="navbar-brand" href="#">{this.props.CurrentView.View}</a>
                    </div>
                </nav>
                {CurrentView}
            </div>
        );
    }
}

export default AppView;
