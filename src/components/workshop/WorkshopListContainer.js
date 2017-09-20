import React, { Component } from 'react'

import WorkshopList from './WorkshopList'
import withWidth from 'material-ui/utils/withWidth'
import { fetchWorkshops } from '../../api/workshop'


class WorkshopListContainer extends Component {
    constructor() {
        super();
        this.state = {
            workshops: []
        }

    }

    componentDidMount() {
        fetchWorkshops().then((data) => {
            this.setState({ workshops: data })
          }).catch((err)=> {
            console.log(err)
          })
    }

    render() {
        return (
            <div>
                <h1>WorkShop </h1>
                <WorkshopList 
                    workshops={this.state.workshops}
                    match={this.props.match}
                    history={this.props.history}
                 />
            </div>
        )
    }
}

export default withWidth()(WorkshopListContainer)


