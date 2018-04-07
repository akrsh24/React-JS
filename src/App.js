import React, { Component } from 'react';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.css"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import UserList from './components/UserList';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link class="navbar-brand" to="/">User Management</Link>
            </nav>
            <hr />
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <Link className="nav-link" to="/view-all">View All</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" to="/add-new">Add New</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-md-9">
                <Route exact path="/" component={Home} />
                <Route path="/view-all" component={UserList} />
                <Route path="/add-new" component={UserForm} />
                <Route path="/edit-user/:id" component={UserForm} />
              </div>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;