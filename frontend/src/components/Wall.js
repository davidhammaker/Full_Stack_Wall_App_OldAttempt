import React, { Component } from 'react'

export class NewComponent extends Component {
    render() {
        return this.props.posts.map((post) => (
            <React.Fragment>
                <h3>Post by <em>{ post.author }</em></h3>
                <p>{ post.message }</p>
            </React.Fragment>
        ));
    }
}

export default NewComponent
