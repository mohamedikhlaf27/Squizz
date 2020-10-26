import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import './App.css';

import Register from '../register/Register';
import Login from '../login/Login';
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Create from "../create/Create";

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

        // const script = document.createElement("script");
        // script.src = (function(h,o,t,j,a,r){
        //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        //     h._hjSettings={hjid:2042555,hjsv:6};
        //     a=o.getElementsByTagName('head')[0];
        //     r=o.createElement('script');r.async=1;
        //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        //     a.appendChild(r);
        // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        // script.async = true;
        //
        // document.head.appendChild(script);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div className="content" loginstatus={this.state.loggedIn}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/create" exact component={Create}/>
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
