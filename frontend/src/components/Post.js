import React, { Component } from 'react';

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
