import React, { Component } from 'react';

export class Post extends Component {
    render() {

        const {id, message} = this.props.post;

        return (
            <div>
                { message }
            </div>
        )
    }
}

export default Post;
