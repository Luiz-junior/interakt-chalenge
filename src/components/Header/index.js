import React, { Component } from 'react';
import { Icon } from 'antd';

import './styles.css';

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <h3>INTERAKT | Chalenge</h3>
                <Icon type="user" className="icon-user" />
            </div>
        )
    }
}

export default Header;
