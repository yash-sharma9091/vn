import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from './DropdownWithoutActiveProps';
import NavBarImage from '../../assets/images/svg/menu.svg';
import NotificationImage from '../../assets/images/svg/notifications-button.svg';
import EnvelopeImage from '../../assets/images/svg/envelope.svg';

import UserImage from '../../assets/images/svg/user.svg';
import {AUTH_LOGOUT_REQUEST} from '../../constant';
import {push} from 'react-router-redux';
import {dashboard} from '../../lib/SiteLinks';
import Logo from  '../Logo/Logo';
import {LinkContainer} from 'react-router-bootstrap';

class DashboardHeader extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    }
    /*toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }*/
    toggle() {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen
        });
    }
  	render() {
          
          const {location} = this.props;
    	return (
            <header className={`dashboard-header ${location.pathname === dashboard ? 'schooladmin':''}`}>
                {location.pathname === dashboard && <Logo />}
                <div>
                    <Navbar color="faded" light expand="md">
                    <LinkContainer to={dashboard}>
                        <NavbarBrand><img src={NavBarImage} alt="NavBar" />
                        </NavbarBrand>
                    </LinkContainer>    
                    <div className="school-name">Build Your School</div>
                    <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                     <NavLink href="/components/">
                                        <div className="notification-image">
                                            <img src={EnvelopeImage} alt="Envelope Icon" />
                                            <div className="notification-number">3</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">
                                        <div className="notification-image">
                                            <img src={NotificationImage} alt="Bell Icon" />
                                            <div className="notification-number">5</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <DropdownWithoutActiveProps tag="li" nav="true" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret tag="a">
                                        <div className="user-image">
                                            <img src={UserImage} alt="Avatar"/>
                                        </div> Administrator
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => this.logout()}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </DropdownWithoutActiveProps>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
    	);
  	}
    logout() {
        const { dispatch } = this.props;
        return new Promise((resolve, reject) => {
            dispatch({
                type: AUTH_LOGOUT_REQUEST,
                callbackSuccess: () => {
                    dispatch(push('/'));
                    resolve();
                }
            })
        });
    }
}


export default connect(null)(DashboardHeader);