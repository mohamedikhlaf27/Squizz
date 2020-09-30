import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Register from '../register/Register';
import Login from '../login/Login';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div className="content">
                        <Switch>
                            <Route path="/login" exact component={Login} />
                            <Route path="/register" exact component={Register} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
