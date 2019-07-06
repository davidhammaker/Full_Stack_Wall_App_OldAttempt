import React, { Component } from 'react';
import Post from './Post';

export class Wall extends Component {
    render() {
        return this.props.posts.map((post) => (
            <React.Fragment>
                <Post key={post.id} post={post}/>
            </React.Fragment>
        ));
    }
}

export default Wall;
