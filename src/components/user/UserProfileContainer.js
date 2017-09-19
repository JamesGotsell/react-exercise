import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import UserProfile from './UserProfile'
import { fetchUser } from '../../api/user'

class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser = (username) =>  {
      fetchUser(username).then((data) => {
          this.setState({user : data})
      }).catch((err)=> {
          console.log(err)
      })
  }

  render() {
    
    return (
      <UserProfile
        user={this.state.user} stuff={'stuff'}
    />
    )
  }
}

UserProfileContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfileContainer
