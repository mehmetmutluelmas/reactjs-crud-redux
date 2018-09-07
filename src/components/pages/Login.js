import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginForm from '../forms/Login'
import { effect } from '../../actions/login';

class Login extends Component {

  componentWillMount(){
    //this.props.effect('Hide');
  }

  componentDidMount() {
    //console.log(this.props);
    this.props.effect(true);
  }

  render () {
    return (
      <div>
        <LoginForm visible={this.props.usersLogin.visible}/>
      </div>
    )
  }
}

const mapStateToProps = ({ usersLogin }) =>{ 
  return {
    usersLogin
  }
}
const mapDispatchToProps = {
  effect
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);