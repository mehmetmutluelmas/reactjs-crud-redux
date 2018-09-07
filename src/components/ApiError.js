import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class ApiError extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
  }
  
  render () {
    //console.log(this.props)
    return (
      <div>

        {
          this.props.error.errorDb ? 
            <Message negative >
              <Message.Header>{this.props.error.errorDb.code ? this.props.error.errorDb.code : '' }</Message.Header>
              <p>{this.props.error.errorDb.sqlMessage ? this.props.error.errorDb.sqlMessage : '' }</p>
              <p>{this.props.error.errorDb.sql ? this.props.error.errorDb.sql : '' }</p>
            </Message>
          : ''
        }
        {
          this.props.error.errorApi ? 
            <Message negative >
              <Message.Header>{this.props.error.errorApi.message }</Message.Header>
              <p> { this.props.error.errorApi.config.url  }</p>
            </Message>
          : ''
        }
      </div>
    )
  }
}

export default ApiError