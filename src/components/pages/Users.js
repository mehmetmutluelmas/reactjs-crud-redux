import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers,onDeleteUsersSubmit } from '../../actions/usersAction';
import { PulseLoader } from 'react-spinners';
import { Modal,Table,Icon,Button } from 'semantic-ui-react'
import ApiError from '../../components/ApiError';
import { Link } from 'react-router-dom';


class Users extends Component {
  state = {
    modalOpen: false,
    modalErrorOpen: false,
    usersId: '',
    listRefresh: false,
  }

  close = () => this.setState({ modalOpen: false })
  closeError = () => this.setState({ modalErrorOpen: false })

  static propTypes = {
    //usersReducer: PropTypes.object.isRequired
  }
  
  componentDidMount() {
    this.props.fetchUsers();
  }




  showModal = (usersId) => { 
    this.setState({ modalOpen: true,usersId: usersId })
  }

  componentDidUpdate(){
    if (this.state.listRefresh == true && this.props.usersDeleteReducer.done){
      this.props.usersDeleteReducer.errorDb || this.props.usersDeleteReducer.errorApi ? this.setState({modalErrorOpen: true,}) : this.props.fetchUsers()
      this.setState({
        listRefresh: false,
      })
    }
  }

  onDelete = () => { 
    this.props.onDeleteUsersSubmit(this.state.usersId);

    this.setState({ modalOpen: false,listRefresh: true });
    
  }


  render() {

    return (
      
      <div style={{padding:'100px',paddingTop:'40px'}}>
        <PulseLoader
          sizeUnit={"px"}
          size={10}
          color={'#123abc'}
          loading={this.props.usersReducer.fetching}
        />
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>Kullanıcılar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.props.usersReducer.errorApi || this.props.usersReducer.errorDb  ? 
              <ApiError  error={this.props.usersReducer} />
            : this.props.usersReducer.data.map(user => 
            <Table.Row key={user.usersId}>
              <Table.Cell collapsing>
                <Icon name='folder' /> {user.usersFirstName}
              </Table.Cell>
              <Table.Cell>{user.usersLastName}</Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                {user.usersEmail}
              </Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                {user.authorizationsName}
              </Table.Cell>
              <Table.Cell style = {{width:'200px'}}>
                <Button as={Link} to={`/users/edit/${user.usersId}`}>
                  <Button.Content visible>Değiştir</Button.Content>
                </Button>
                <Button onClick={() => this.showModal(user.usersId)} >
                  <Button.Content visible>Sil</Button.Content>
                </Button>
                </Table.Cell>
            </Table.Row>
            )
          }
          </Table.Body>
        </Table>
        <Modal open={this.state.modalOpen}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>No</Button>
            <Button positive onClick={this.onDelete} icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>


          <Modal open={this.state.modalErrorOpen}>
          <Modal.Header>Hata</Modal.Header>
          <Modal.Content>
            <ApiError  error={this.props.usersDeleteReducer} />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.closeError}>Kapat</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, usersLogin,usersDeleteReducer }) =>{ 
  return {
    usersReducer,
    usersDeleteReducer,
    usersLogin,
  }
}

/*

const mapStateToProps = state =>{ 
  return {
    users: state.users,
  }
}

*/

const mapDispatchToProps = {
  fetchUsers,
  onDeleteUsersSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);