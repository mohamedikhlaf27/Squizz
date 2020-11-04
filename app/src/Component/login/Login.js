import React, {Component} from 'react';
import './Login.css';
import {Button, Label, Input} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { LoginForm }  from "./LoginForm";

export class Login extends React.Component{
    constructor(props) {
        super(props);
       //  this.state = {
       //      canLogin: false,
       //  }
       this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.props.history.push("/");
    }

    // onLogin(event) {
    //     console.log(event);
    //     event.preventDefault();
    //     this.setState({
    //         canLogin: false,
    //     });
    //
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     const { history } = this.props;
    //
    //     let formData = new URLSearchParams();
    //     formData.append('email', email)
    //     formData.append('password', password);
    //
    //     return fetch("http://localhost:8080/person/login", {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: formData
    //     })
    //         .then(result => {
    //             if(result.status === 200){
    //                 return result.json()
    //             }else{
    //                 return Promise.reject(result)
    //             }
    //         })
    //         .then(data => {
    //             if (data) {
    //                 console.log(data);
    //                 localStorage.setItem('Squizz-loggedIn', true);
    //                 this.setState({
    //                     loggedIn: true,
    //                     canLogin: true,
    //                     message: data.message
    //                 });
    //                 history.push("/");
    //             }
    //         })
    //         .catch(result => result.json())
    //         .then(data => {
    //             if (data) {
    //                 localStorage.setItem('Squizz-loggedIn', false);
    //                 this.setState({
    //                     loggedIn: false,
    //                     canLogin: false,
    //                     message: data.message
    //                 });
    //             }
    //         })
    // }

    render() {
        return(
            <LoginForm loginRequested={() => this.redirect()}/>
            )
    }
}

export default withRouter(Login);
