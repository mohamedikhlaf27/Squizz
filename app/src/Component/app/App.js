import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';
import {BrowserRouter as Route} from 'react-router-dom';
import './App.css';

import Register from '../register/Register';
import Login from '../login/Login';
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Login/>
                    {/*<div className="content">*/}
                    {/*    <Switch>*/}
                    {/*        <Route path="/" exact component={Home} />*/}
                    {/*        <Route path="/login" exact component={Login} />*/}
                    {/*        <Route path="/register" exact component={Register} />*/}
                    {/*    </Switch>*/}
                    {/*</div>*/}
                </Router>
            </div>
        );
    }
}

export default App;
