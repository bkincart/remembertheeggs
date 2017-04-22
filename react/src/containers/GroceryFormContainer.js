import React, { Component } from 'react';
import GroceryInputField from '../components/GroceryInputField'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      unit: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let formPayload = {
      name: this.state.name,
      unit: this.state.unit
    };
    debugger;
    this.props.addNewGrocery(formPayload);
    this.handleClearForm(e);
  };

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      unit: ''
    })
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  };

  handleUnitChange(e) {
    this.setState({ unit: e.target.value })
  };

  render() {
    return(
      <form className="new-grocery-form" onSubmit={ this.handleFormSubmit }>
        <GroceryInputField
          content = { this.state.name }
          handleChange = { this.handleNameChange }
          label = 'Name'
          placeholder = ''
        />
        <GroceryInputField
          content = { this.state.unit }
          handleChange = { this.handleUnitChange }
          label = 'Unit'
          placeholder = 'e.g. Pounds, Loaf'
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default GroceryFormContainer;
