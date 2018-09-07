import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditUsersForm from '../forms/EditUsersForm';
import { onUpdateUsersSubmit,singleFetchUsers } from '../../actions/usersAction';
import { fetchAuthorizations } from '../../actions/authorizationsAction';

class EditUsers extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.singleFetchUsers(this.props.match.params.usersId);
    this.props.fetchAuthorizations();
  }



  render () {
    return (
      <div>
        <EditUsersForm authorizations={this.props.authorizationsReducer} users={this.props.usersSingleReducer} usersUpdate={this.props.usersUpdateReducer} onUpdateUsersSubmit={this.props.onUpdateUsersSubmit}></EditUsersForm>
      </div>
    )
  }
}

const mapStateToProps = ({ usersSingleReducer,usersUpdateReducer,authorizationsReducer }) =>{ 
  return {
    usersSingleReducer,
    usersUpdateReducer,
    authorizationsReducer
  }
}
const mapDispatchToProps = {
  //onNewUsersSubmit,
  singleFetchUsers,
  onUpdateUsersSubmit,
  fetchAuthorizations

}
export default connect(mapStateToProps,mapDispatchToProps)(EditUsers)