import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Login extends Component {

  constructor() {
      super()
      this.state = {
        username: '',
        password: ''
      }
  }
  handleChange = (name, event) => {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    const { history } = this.props 
      if (this.state.username === 'reactboy@facebook.com' &&
        this.state.password === '1234') {
        // issue with login
        localStorage.setItem('isAuthenticated', 1)
        history.push('/')
    }else {
      console.log('not correct login')
    }
  }

  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>
        <FormGroup>
          <FormControl
            className="form-control"
            id="email"
            type="email"
            value={this.state.username}
            onChange={this.handleChange.bind(this, 'username')}
            placeholder="Enter email" />
          <FormControl
            className="form-control"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
            placeholder="Password" />
        </FormGroup>
        

        <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
      </form>
    )
  }
}

export default withRouter(Login)

