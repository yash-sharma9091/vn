import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from  '../Logo/Logo';
import {LinkContainer} from 'react-router-bootstrap';
import {join, login} from '../../lib/SiteLinks';

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({isOpen: !this.state.isOpen });
    }

  	render() {
    	return (
			<header className="main-header">
				<Logo />

                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className="container">
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="text-uppercase" href="">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-uppercase" href="">Faq</NavLink>
                                </NavItem>
                            </Nav>
                            <form className="form-inline my-2 my-lg-0">
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <LinkContainer to={join}>
                                            <NavLink className="text-uppercase" >Join Pencil Ink</NavLink>
                                        </LinkContainer>
                                    </NavItem>
                                    <NavItem className="active">
                                        <LinkContainer to={login}>
                                            <NavLink className="text-uppercase">Login</NavLink>
                                        </LinkContainer>    
                                    </NavItem>
                                </Nav>
                            </form>    
                        </Collapse>
                    </Navbar> 
            </header>
    	);
  	}
}


export default MainHeader;