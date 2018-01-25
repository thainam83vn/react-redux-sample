import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

import UserList from './user-list';
import UserDetail from './user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>User List</h2>
        <UserList />
        <h2>User Detail</h2>
        <UserDetail />
      </div>
    );
  }
}

export default App;
