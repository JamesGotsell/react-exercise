import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
    Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card'

import View from '../layout/View'

class Info extends Component {
    constructor(props) {
        super()
        
    }
    render() {
        console.log(this.props)
        // const { title , price   } = this.props
        return (
            <View>
                <Card>
                    <CardHeader
                      
                     
                    />
                     <CardTitle  />
                       <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                    <CardActions />
                </Card>
            </View>
        )
    }
}


export default Info