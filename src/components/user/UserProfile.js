import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

const UserProfile = ({ user }) => {
  console.log(user)
  let fullname = ''
  let email = ''
  let username = ''

  if (user){
    
    fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
    email = user.email
    username = user.username
  }

  return (
    <View>
      <Card>
        <CardHeader
          title={fullname='book'}
          subtitle={username='boom'}
          avatar={`/images/${username}_sm.jpg`}
        />
        <CardMedia
          overlay={<CardTitle title={email} />}
        >
          <img alt={username} src={`/images/${username}_lg.jpg`} />
        </CardMedia>
        <CardActions />
      </Card>
    </View>
  )
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserProfile