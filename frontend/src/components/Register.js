import React, { Component } from 'react'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password1: '',
        password2: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(
            this.state.username,
            this.state.email,
            this.state.password1,
            this.state.password2
        );
        this.setState({
            username: '',
            email: '',
            password1: '',
            password2: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="username" placeholder="Username"
                    value={this.state.username} onChange={this.onChange}/>
                <input type="text" name="email" placeholder="Email"
                    value={this.state.email} onChange={this.onChange}/>
                <input type="password" name="password1" placeholder="Password"
                    value={this.state.password1} onChange={this.onChange}/>
                <input type="password" name="password2" placeholder="Confirm Password"
                    value={this.state.password2} onChange={this.onChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Register
