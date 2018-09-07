import React,{ Component } from 'react'
import { Button, Checkbox, Form,Message,Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import ApiError from '../ApiError';

class NewUsersForm extends Component {
  

  state = {
    authorizationsId: '',
    usersFirstName: '',
    usersLastName: '',
    usersEmail: '',
    errors: '',
    onSubmitStatus: false,
    redirect: false
  }

  

  componentWillReceiveProps(nextProps){

      if (Object.keys(nextProps.users.singleData).length > 0){
        this.setState({
          usersFirstName: this.state.usersFirstName == '' ? nextProps.users.singleData[0].usersFirstName: this.state.usersFirstName ,
          usersLastName: this.state.usersLastName == '' ? nextProps.users.singleData[0].usersLastName: this.state.usersLastName ,
          usersEmail: this.state.usersEmail == '' ? nextProps.users.singleData[0].usersEmail: this.state.usersEmail,
          authorizationsId: this.state.authorizationsId == '' ? nextProps.users.singleData[0].authorizationsId: this.state.authorizationsId,
          usersId: nextProps.users.singleData[0].usersId,
        })
    }

  }


  static propTypes = {
    //onNewUsersSubmit: PropTypes.func.isRequired,
  }

  handleChangeDropDown = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = (e) =>  this.setState({ [e.target.name]: e.target.value })


  onSubmit = () => {
    const errors = this.validate();
    
    this.setState({
      errors,
      onSubmitStatus: true,
    })
    if (Object.keys(errors).length === 0){
       this.props.onUpdateUsersSubmit(this.state)
    }
  }

  componentDidUpdate(){



    if (this.state.onSubmitStatus && this.props.usersUpdate.done) {
      this.props.usersUpdate.errorDb || this.props.usersUpdate.errorApi ? this.setState({redirect:false }):this.setState({redirect:true })
      this.setState({
        onSubmitStatus: false,
      })
    }
  }



  validate = () => {
    const errors = {}; 
    if(!this.state.usersFirstName) errors.usersFirstName = 'Ad girilmedi';
    if(!this.state.usersLastName) errors.usersLastName = 'Soyad girilmedi'
    if(!this.state.usersEmail) errors.usersEmail = 'Eposta girilmedi'
    if(!this.state.authorizationsId) errors.authorizationsId = 'Yetki Seçmediniz'
    return errors;
  }


  render () {
    
    
    const form = (
      <div style={{padding:'15px',paddingTop:'15px'}}>
        <Form onSubmit={this.onSubmit} error={!!this.state.errors} loading={this.props.users.fetching || this.props.usersUpdate.fetching ? true : false} >
          <Form.Field>
            <label>Yetkiler</label>
            <Dropdown loading={this.props.authorizations.fetching} value={this.state.authorizationsId} placeholder='Yetkiler' id="authorizationsId" name="authorizationsId" onChange={this.handleChangeDropDown} selection search options={this.props.authorizations.data.map(authorization => ({
                  key: authorization.authorizationsId,
                  value: authorization.authorizationsId,
                  text: authorization.authorizationsName,
              }))} />
          </Form.Field>
          <Message
            error
            hidden={this.state.authorizationsId? true:false}
            content={this.state.errors.authorizationsId} 
          />
          <Form.Field>
            <label>Ad</label>
            <input  id="usersFirstName" name="usersFirstName" value={this.state.usersFirstName} onChange={this.handleChange} placeholder='Ad' />
          </Form.Field>
          <Message
            error
            hidden={this.state.usersFirstName? true:false}
            content={this.state.errors.usersFirstName} 
          />
          <Form.Field>
            <label>Soyad</label>
            <input id="usersLastName" name="usersLastName" value={this.state.usersLastName} onChange={this.handleChange} placeholder='Soyad' />
          </Form.Field>
          <Message
            error
            hidden={this.state.usersLastName? true:false }
            content={this.state.errors.usersLastName}
          />
          <Form.Field>
            <label>Eposta</label>
            <input id="usersEmail" name="usersEmail" value={this.state.usersEmail} onChange={this.handleChange} placeholder='Eposta' />
          </Form.Field>
          <Message
            error
            hidden={this.state.usersEmail? true:false } 
            content={this.state.errors.usersEmail}
          />
          <Button type='submit'>Kaydet</Button>
          <ApiError error={this.props.users}/>
          <ApiError error={this.props.usersUpdate}/>
        </Form>
      </div> 
      
    );
     
    return (
      

      
      //this.state.redirect == true && Object.keys(this.props.newUsers.errorDb).length === 0  ? <Redirect to="/users" /> : form
      this.state.redirect == true  ? <Redirect to="/users" /> : form
      //form
    )
    
  }
}



export default NewUsersForm;
