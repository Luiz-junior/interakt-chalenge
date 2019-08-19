import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from "react-router-dom";

import './styles.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <ul>
                    <li><Link to="/panel"> <Icon className="icon-list" type="home" /></Link></li>
                    <li><Link to="/deliverys"> <Icon className="icon-list" type="container" /></Link></li>
                    <li><Link to="/"> <Icon className="icon-list" type="shopping" /></Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
