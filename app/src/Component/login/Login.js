import React, {Component} from 'react';
import './Login.css';
import {Button, Label, Input} from 'reactstrap';
import Background from "../login/img/MicrosoftTeams-image (1).png"
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canLogin: true,
        }
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(event) {
        event.preventDefault();
        this.setState({
            canLogin: false,
        });

        const email = event.target.email.value;
        const password = event.target.password.value;
        const { history } = this.props;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);

        fetch("http://localhost:8080/person/login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(result => {
                if(result.status === 200){
                    return result.json()
                }else{
                    return Promise.reject(result)
                }
            })
            .then(data => {
                if (data) {
                    console.log(data);
                    localStorage.setItem('Squizz-loggedIn', true);
                    this.setState({
                        loggedIn: true,
                        message: data.message
                    });
                    history.push("/");
                }
            })
            .catch(result => result.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('Squizz-loggedIn', false);
                    this.setState({
                        loggedIn: false,
                        canLogin: true,
                        message: data.message
                    });
                }
            })
    }

    render() {
        return(
            <form className="sign-in" onSubmit={this.onLogin}>
                <div className="container">
                    <div className="card card-container">
                        <div className="pb-2"><
                            h4 id="Title">Sign in</h4>
                        </div>
                        <Input type="email" id="email" className="form-control" placeholder="Email address"
                               required autoFocus> </Input>
                        <Input type="password" id="password" className="form-control" placeholder="Password"
                               required> </Input>

                        <div>{this.state.message}</div>

                        <Button className="btn btn-lg btn-primary btn-block btn-sign-in" type="submit">Sign in </Button>
                        <div>
                            <p>Don't have a account yet?
                                <a className="register" href={'/register'}> Register.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Login);
