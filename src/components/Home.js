import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">User Management</h1>
                <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Users</a>
                </p>
            </div>
        );
    }
}

export default Home;