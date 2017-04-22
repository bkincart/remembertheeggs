import React, { Component } from 'react';

class InventoryIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      inventories: [],
      locations: []
    }
  }
  componentDidMount() {
    fetch('/api/v1/groceries')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ groceries: [...this.state.groceries, ...responseData] })
    })
    fetch('/api/v1/locations')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ locations: [...this.state.locations, ...responseData] })
    })

  }

  render() {
    let groceries = this.state.groceries.map(grocery =>{
      return(
        <li>{grocery.name}</li>
      )
    })
    let locations = this.state.locations.map(location =>{
      return(
        <li>{location.name}</li>
      )
    })

    return (
      <div>
        <ul>
          {groceries}
          {locations}
        </ul>
      </div>
    )
  }
}

export default InventoryIndexContainer;
