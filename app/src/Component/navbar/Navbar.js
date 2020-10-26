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

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showNavbar: false,
            loggedIn: localStorage.getItem('Squizz-loggedIn')
        };
        this.toggle = this.toggle.bind(this);
    }

    logout() {
        localStorage.removeItem('Squizz-loggedIn')
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const {loggedIn} = this.state;

        return (
            <div>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/">Squizz</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/create">Create</NavLink>
                            </NavItem>
                            {!loggedIn &&
                            <NavItem>
                                <NavLink href="/login">Sign in</NavLink>
                            </NavItem>
                            }
                            {loggedIn &&
                            <NavItem>
                                <NavLink href="/login" onClick={this.logout}>Sign out</NavLink>
                            </NavItem>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default navbar
