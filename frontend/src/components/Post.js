import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    render() {

        const {message} = this.props.post;

        return (
            <div>
                { message }
            </div>
        )
    }
}

export default Post;

// PropTypes
Post.propTypes = {
    posts: PropTypes.array.isRequired
}
