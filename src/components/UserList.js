import React, { Component } from 'react';
import store from '../store';
import { loadUsers } from '../actions/users';
import 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let users = store.getState().users;
            this.setState({ users });
        });
        store.dispatch(loadUsers());
    }
    deleteUser(id) {
        fetch(`http://localhost:8181/users/${id}`, { method: 'DELETE' })
            .then(resp => resp.json())
            .then(r => {
                let { users } = this.state;
                users = users.filter(user => user.id !== id)
                this.setState({ users });
            })
    }
    renderUsers() {
        let { users } = this.state;
        return users.map((user, idx) => {
            return (
                <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  
                    <td><Link to={`edit-user/${user.id}`}><i className="fa fa-edit"></i></Link></td>
                    <td><a href="/#" onClick={() => { this.deleteUser(user.id) }}><i className="fa fa-trash"></i></a></td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    UserList
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>{this.renderUsers()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserList;