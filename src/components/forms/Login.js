import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Transition } from 'semantic-ui-react'


class LoginForm extends Component {
 

  render() {

    return (
      <Transition visible={this.props.visible} animation='scale' duration={1000}>
      <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Futt
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
    
                <Button color='blue' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      
    </div>
    </Transition>
    );
  }
}

export default LoginForm;