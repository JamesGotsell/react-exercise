import React, { Component } from 'react'
import UserList from './UserList'
import { fetchUsers } from '../../api/user'

class UserListContainer extends Component {
  constructor() {
    super()
      this.state = {
       users: []
      }
  }

  componentDidMount() {
    fetchUsers()
    .then((data) => {
        this.setState({ users: data })
    }).catch((err)=> {
        console.log(err)
    })
  }
  render() {
    return (
      //you need to render the UserList component and pass the users
        <div>
          <UserList
              users={this.state.users}
              match={this.props.match}
              history={this.props.history}
          />
        </div>

    )
  }
}

export default UserListContainer
