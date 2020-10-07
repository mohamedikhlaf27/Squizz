import React, {Component} from 'react';
import './Login.css';
import {Button, Label, Input} from 'reactstrap';
import Background from '../img/MicrosoftTeams-image.png';

class Login extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);


        fetch("http://localhost:8080/user/login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(result => result.json())
            .then(data => {
                console.log(data)
            });
    }

    render() {
        return (

            <form class="form-signin" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="card card-container">
                        <div className= "pb-2"><
                            h4 id = "Title">Sign in</h4>
                        </div>
                            <Input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required autoFocus> </Input>
                            <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required> </Input>
                            <Button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in
                            </Button>
                        <div>
                            <p>Don't have a account yet? <a href="#" className="register">
                                Register.
                            </a>
                            </p>

                        </div>

                    </div>
                </div>
            </form>

        )
    }
}

export default Login;
