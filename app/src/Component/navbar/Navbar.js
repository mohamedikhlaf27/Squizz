import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return<div className="sidebar">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        </div>
    }
}

export default Navbar
