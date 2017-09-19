import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import WorkShopInfo from './WorkShopInfo'

class WorkshopInfoContainer extends Component {
  constructor() {
    super()
    this.state = { workshop: null }
  }

  componentDidMount() {
    this.fetchWorkShop(this.props.match.params.workshop)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.workshop !== nextProps.match.params.workshop) {
      this.fetchWorkShop(nextProps.match.params.workshop)
    }
  }

  fetchWorkShop(workshop) {
    fetch(`/data/workshops/${workshop}`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        this.setState({workshop : data})
        console.log(this.state.workshop + "*************************")
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    //  let title = this.state.title
    //  let price = this.state.price

    return (
      <WorkShopInfo workshop={this.state.workshop} />
    )
  }

  
}

WorkshopInfoContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default WorkshopInfoContainer