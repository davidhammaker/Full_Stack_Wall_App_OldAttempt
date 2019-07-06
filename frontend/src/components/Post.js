import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    render() {

        const {message} = this.props.post;

        return (
            <div className="box">
                { message }
            </div>
        )
    }
}

// PropTypes
Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
