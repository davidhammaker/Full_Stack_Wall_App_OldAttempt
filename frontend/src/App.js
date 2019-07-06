import React, { Component } from 'react';
import Wall from './components/Wall';
import $ from 'jquery';

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
      <div>
        <h1>Test</h1>
        <div className="container">
          <Wall posts={this.state.posts}/>
        </div>
      </div>
    )
  }
}

export default App;
