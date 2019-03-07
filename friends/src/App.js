import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    waiting: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    event.preventDefault()

    this.setState({
      waiting: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Friends Redux</h1>
        {this.state.waiting ? (<div className="wait">waiting...</div>) : (
          <form onSubmit={this.login}>
            <input type="text"
              name="username"
              onChange={this.handleChange}
              placeholder="username"
              value={this.state.username}
              required />

              <input type="text"
                name="password"
                onChange={this.handleChange}
                placeholder="password"
                value={this.state.password}
                required />

              <input type="submit" />
          </form>
        )}
      </div>
    );
  }
}

export default App;
