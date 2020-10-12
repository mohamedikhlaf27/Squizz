import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const handleLogout = history => () => {
    localStorage.removeItem('loggedIn');
    history.push('/login');
}

class navbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            showNavbar: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/">Squizz</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink  href="/" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/create/">Create</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login" onClick={handleLogout(history)}>
                                    Sign out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default navbar
