import React, { Component } from 'react';
import Wall from './components/Wall';

export class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: 'davidjosh',
        message: 'Post number 1.',
        date_posted: '2019-07-05T23:44:30Z'
      },
      {
        id: 2,
        author: 'davidjosh',
        message: 'Post number 2.',
        date_posted: '2019-07-05T23:45:31Z'
      },
      {
        id: 3,
        author: 'davidjosh',
        message: 'Post number 3.',
        date_posted: '2019-07-05T23:46:32Z'
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Wall />
      </div>
    )
  }
}

export default App;
