import React from 'react'
import './Register.css';
import { withRouter } from "react-router-dom";
import {RegisterForm} from "./RegisterForm";
import Navbar from "../navbar/Navbar";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.props.history.push("/login");
    }

    render() {
        return( <>
            <Navbar/>
            <RegisterForm registerRequested={() => this.redirect()}/>
            </>
        )
    }
}
export default withRouter(Register);