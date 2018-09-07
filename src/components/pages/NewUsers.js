import React, { Component } from 'react'
import { connect } from 'react-redux';
import NewUsersForm from '../forms/NewUsersForm';
import { onNewUsersSubmit } from '../../actions/usersAction';
import { fetchAuthorizations } from '../../actions/authorizationsAction';

class NewUsers extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount(){
    this.props.fetchAuthorizations();
  }

  render () {
    return (
      <div>
        <NewUsersForm authorizations={this.props.authorizationsReducer}  newUsers={this.props.usersNewReducer} onNewUsersSubmit={this.props.onNewUsersSubmit}></NewUsersForm>
      </div>
    )
  }
}

const mapStateToProps = ({ usersNewReducer,authorizationsReducer }) =>{ 
  return {
    usersNewReducer,
    authorizationsReducer
  }
}
const mapDispatchToProps = {
  onNewUsersSubmit,
  fetchAuthorizations
}
export default connect(mapStateToProps,mapDispatchToProps)(NewUsers)