import React, { Component } from 'react';
import GroceryFormContainer from './GroceryFormContainer'

class InventoryIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      inventories: [],
      locations: []
    }

    this.addNewGrocery = this.addNewGrocery.bind(this);
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

  addNewGrocery(formPayload) {
    fetch('/api/v1/groceries', {
      method: 'POST',
      body: { grocery: { name: JSON.stringify(formPayload).name, unit: JSON.stringify(formPayload).unit }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ groceries: [...this.state.groceries, responseData] })
    })
  }

  render() {
    let groceries = this.state.groceries.map(grocery =>{
      return(
        <li>{grocery.name}</li>
      )
    })
    // let locations = this.state.locations.map(location =>{
    //   return(
    //     <li>{location.name}</li>
    //   )
    // })

    return (
      <div>
        <GroceryFormContainer
          addNewGrocery = {this.addNewGrocery}
        />
        {groceries}
      </div>
    )
  }
}

export default InventoryIndexContainer;
