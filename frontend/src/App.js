import React, { Component } from 'react';
import Wall from './components/Wall';
import Register from './components/Register';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    posts: [],
    users: []
  }

  componentDidMount() {
    let promise = $.get("http://127.0.0.1:8000/posts/");
    promise.then(
      data => this.setState({ posts: data }),
      error => console.log('Error: ', error)
    );
  }

  // Add User
  addUser = (username, email, password1, password2) => {
    const newUser = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    }
    let promise = $.post("http://127.0.0.1:8000/register/", newUser);
    promise.then(
      data => this.setState({ users: [...this.state.users, data]}),
      error => console.log(error)
    );
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Wall App</h1>
          <div className="container">

            <Route exact path="/" render={props => (
              <Wall posts={this.state.posts}/>
            )} />

            <Route path="/register/" render={props => (
              <Register addUser={this.addUser} />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
