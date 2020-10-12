import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Register from '../register/Register';
import Login from '../login/Login';
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('Squizz-loggedIn'),
            canLogin: true,
            loginData: ""
        }
    }
    componentDidMount() {
        const loggedIn = localStorage.getItem('Squizz-loggedIn');
        this.setState({loggedIn: loggedIn, canLogin: false})
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div className="content" loginStatus={this.state.loggedIn}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {/*<Route path="/login" exact component={Login}/>*/}
                            <Route path="/login" exact>
                                <Login  onResult={loginData => {this.setState({loginData})}} />
                            </Route>
                            <Route path="/register" exact component={Register} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
