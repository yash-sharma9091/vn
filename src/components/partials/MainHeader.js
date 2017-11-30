import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from  '../Logo/Logo';
import AuthButton from './AuthButton';
import {faq} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';

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
                                    <LinkContainer to={`${faq}?tab=contact`}>
                                        <NavLink className="text-uppercase">Contact Us</NavLink>
                                    </LinkContainer>    
                                </NavItem>
                                <NavItem>
                                    <LinkContainer to={`${faq}?tab=faq`}>
                                        <NavLink className="text-uppercase" href="">Faq</NavLink>
                                    </LinkContainer>        
                                </NavItem>
                            </Nav>
                            <form className="form-inline my-2 my-lg-0">
                                <AuthButton/>
                            </form>    
                        </Collapse>
                    </Navbar> 
            </header>
    	);
  	}
}


export default MainHeader;