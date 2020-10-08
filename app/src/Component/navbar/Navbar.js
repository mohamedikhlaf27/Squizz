// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
//
//
//
// class Navbar extends Component {
//     render() {
//         return<div className="sidebar">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <ul className="nav flex-column">
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/register">Register</Link>
//                 </li>
//             </ul>
//         </div>
//     }
// }
// export default Navbar

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
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
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
                                <NavLink href="/home/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/create/">Create</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Sign in</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header
