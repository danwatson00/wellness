import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.png';
import './Header.css';




class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo"alt="logo"></img>
                <Menu />

            </div>
        );
    }
}

export default Header;