import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WorkshopList from './WorkshopList'


class Workshop extends Component {
    constructor() {
        super();
        this.state = {
            workshops: []
        }

    }

    componentDidMount() {
        fetch('/data/workshops.js', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
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

export default Workshop

Workshop.contextTypes = {
    router: PropTypes.object.isRequired
}
