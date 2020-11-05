import React from 'react';
import './Login.css';
import {Button} from 'reactstrap';
import {FetchLogin} from "./Util";

export const LoginForm = ({loginRequested}) => {

    const [canLogin, setCanLogin] = React.useState("");
    const [loggedIn, setLoggedIn] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        FetchLogin(event, setCanLogin, setLoggedIn, setMessage, loginRequested).then(r => message);
    }

        return(
            <form data-testid="login-form" className="sign-in" onSubmit={handleSubmit}>
                <div className="empty"> </div>
                <div className="container">
                    <div className="card card-container">
                        <div className="pb-2"><
                            h4 id="Title">Sign in</h4>
                        </div>

                        <input type="email" id="email" className="form-control" placeholder="Email address" data-hj-allow
                               required={true} autoFocus={true}/>

                        <input type="password" id="password" className="form-control" placeholder="Password"
                               required={true}  data-hj-allow />
                        <div className="text-danger pb-2">{message}</div>

                        <Button id="login-btn" className="btn btn-lg btn-primary btn-block btn-sign-in" type="submit">Sign in </Button>
                        <div>
                            <p>Don't have a account yet?
                                <a  className="register" href={'/register'}> Register.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
}
export default LoginForm;
