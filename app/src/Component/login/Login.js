import React from 'react';
import './Login.css';
import { withRouter } from "react-router-dom";
import { LoginForm }  from "./LoginForm";
import {RegisterForm} from "../register/RegisterForm";

export class Login extends React.Component{
    constructor(props) {
        super(props);
       this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.props.history.push("/");
    }

    render() {
        return(
            <LoginForm loginRequested={() => this.redirect()}/>
        )
    }
}

export default withRouter(Login);
