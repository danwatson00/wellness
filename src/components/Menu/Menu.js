import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import hamburger from '../../img/hamburger.png';
import './Menu.css';

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
                
                <DropdownToggle className="hamburger">
                    <img src={hamburger} alt="menu button"></img>
                    <div className="menuText">MENU</div>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}