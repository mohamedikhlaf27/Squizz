import React, {Component} from 'react'
import './Register.css';
import {Button, Input, Label, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";

class Register extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);


        fetch("http://localhost:8080/user/register", {
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
            <form className="form-signup" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="card card-container">
                        <div className= "pb-2"><
                            h4 id = "Title">Sign up</h4>
                        </div>
                        <Input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required autoFocus> </Input>
                        <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required> </Input>

                        <div>
                            <Label>
                                Function:
                            </Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Teacher
                                </Label>
                            </FormGroup>
                            <FormGroup check className="pb-2">
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Student
                                </Label>
                            </FormGroup>
                        </div>

                        <Button className="btn btn-lg btn-primary btn-block btn-signup" type="submit">Sign up
                        </Button>
                        <div>
                            <p>Already have a account?
                                <a className="login"> <Link to="/login"> Sign in </Link></a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Register;
