import React, { Component } from 'react';
//import logo from './logo.svg';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';
import './App.css';

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    event.preventDefault()

    this.props.fetchFriends(this.state)
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
        {this.props.error !==  '' && ( <div className="text-error">{this.props.error}</div>)}

        {this.props.isLoggedIn && ( <div className="logged-in">FETCH_FRIENDS_SUCCESS</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isLoggedIn: state.isLoggedIn,
  waiting: state.waiting
})
export default connect(mapStateToProps, {fetchFriends})(App);
