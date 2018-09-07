import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Users from './components/pages/Users';
import Login from './components/pages/Login';
import NewUsers from './components/pages/NewUsers';
import EditUsers from './components/pages/EditUsers';
import { Menu,Input} from 'semantic-ui-react'

class App extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div>
      <Menu secondary>
        <Menu.Item as={Link} to="/login" name='login' active={this.state.activeItem === 'login'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/users"
          name='users'
          active={this.state.activeItem === 'users'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to="/users/new"
          name='newUsers'
          active={this.state.activeItem === 'newUsers'}
          onClick={this.handleItemClick}
        />
      </Menu>

      <Route exact path="/users" component={Users}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/users/new" component={NewUsers}></Route>
      <Route exact path="/users/edit/:usersId" component={EditUsers}></Route>




      </div>

    );
  }
}

export default App;
