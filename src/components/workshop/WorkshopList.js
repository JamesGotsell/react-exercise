import React, { Component } from 'react'
import WorkshopInfoContainer from './WorkshopInfoContainer'
import View from '../layout/View'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'



class WorkshopList extends Component {
    constructor(props) {
        super(props)
    }

    showWorkShop(workshop) {
        this.props.history.push(`/workshops/${workshop.title}`)
      }


    render() {
        console.log(this.props.workshops)
        const { workshops , match } = this.props;
        return (
          <View style={{ display: 'flex' }}>
            <View>
              { workshops.map(workshop => (
                <ListItem
                  onClick={this.showWorkShop.bind(this, workshop)} key={workshop.id} style={{color: "black"}}
                  primaryText={ `${workshop.title}`}
                  leftIcon={<ActionGrade color={pinkA200} />}
                />
              ))}
            </View>
            <Route path={`${match.url}/:workshop`} component={WorkshopInfoContainer} />
          </View>
        )
      }
}

export default WorkshopList
