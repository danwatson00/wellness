import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import hamburger from '../../img/hamburger.png';
import menu from '../../img/circleMenu.png';
import { Button, Icon } from 'semantic-ui-react';
import './Menu.css';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

export default class MENU extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                
                <DropdownToggle className="hamburgerDiv">
                    <img src={menu} className="hamburgerMenu" alt="hamburger menu"></img>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to={routes.HOME}>Home</Link></DropdownItem>
                    <DropdownItem><Link to={routes.FEELINGS}>Create Entry</Link></DropdownItem>
                    <DropdownItem><Link to={routes.PAST}>Past Entries</Link></DropdownItem>
                    <DropdownItem><Link to={routes.ABOUT}>About</Link></DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

// <img className="hamburger" src={hamburger} alt="menu button"></img>