import React, { Component } from 'react';
import Wall from './components/Wall';
import Register from './components/Register';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    let promise = $.get("http://127.0.0.1:8000/posts/");
    promise.then(
      data => this.setState({ posts: data }),
      error => console.log('Error: ', error)
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

            <Route path="/register/" component={Register} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
