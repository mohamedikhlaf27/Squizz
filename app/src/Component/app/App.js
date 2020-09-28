import React, {Component} from 'react';
import './App.css';
import Register from '../register/Register';
import Login from '../login/Login';

class App extends Component {

  render() {

    return (
        <div className="App">
          app
          <Register />
          <Login />
        </div>
    );
  }
}

export default App;
