import React, { Component } from 'react';
import store from '../store';
import { saveUser } from '../actions/users';

import {
    withRouter
} from "react-router-dom";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                age: '',
            }
        }
    }
    handleChange(e){
        let {user}=this.state;
        user[e.target.id]=e.target.value
        this.setState({user});
    }
    handleSubmit(e) {
        e.preventDefault();
        let newUser = {
            name: this.refs.name.value,
            age: this.refs.age.value
        }
        let { id } = this.props.match.params;
        let { user } = this.state;
        console.log(user);
        if (id) {
            fetch(`http://localhost:8182/users/${id}`, { method: 'PUT', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' } })
                .then(resp => resp.json())
                .then(r => {
                    let user = {
                        name: '',
                        age: ''
                    }
                    this.setState({ user })
                });
        } else {
            store.dispatch(saveUser(newUser))
        }
        this.props.history.push('/view-all');
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        fetch(`http://localhost:8182/users/${id}`)
            .then(resp => resp.json())
            .then(user => { this.setState({ user }) });
    }
    render() {
        let { user } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header">User Form - {this.props.match.params.id} </div>
                            <div className="card-body">
                                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input id="name" onChange={(e)=>{this.handleChange(e)}} value={user.name} ref="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input id="age" onChange={(e)=>{this.handleChange(e)}} value={user.age} ref="age" className="form-control" />
                                    </div>
                                    <button className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UserForm);