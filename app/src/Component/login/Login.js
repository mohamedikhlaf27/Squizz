import React, {Component} from 'react';
import './Login.css';
import {Button, Label, Input} from 'reactstrap';

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
                {/*<div>*/}
                {/*    <label htmlFor="email">Email</label>*/}
                {/*    <input placeholder="email" type="text" name="email" id="email"></input>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor="password">Password</label>*/}
                {/*    <input placeholder="password" type="password" name="password" id="password"></input>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button type="submit">Login</button>*/}
                {/*</div>*/}
                <div className="container">
                    <div className="card card-container">
                        <div className= "pb-2"><h4>Sign in</h4>
                        </div>
                            <Input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required autoFocus> </Input>
                            <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required> </Input>
                            <div id="remember" className="checkbox">
                                <Label>
                                    <Input type="checkbox" value="remember-me"> </Input> Remember me
                                </Label>
                            </div>
                            <Button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in
                            </Button>
                        <a href="#" className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
                </div>
            </form>

        )
    }
}

export default Login;
