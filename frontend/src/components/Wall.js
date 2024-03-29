import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

class Wall extends Component {
    render() {
        return this.props.posts.map((post) => (
            <Post key={post.id} post={post}/>
        ));
    }
}

// PropTypes
Wall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Wall;
