import React from 'react';

const GroceryInputField = (props) => {
  return (
    <label onChange={props.handleChange}>{props.label}
      <input
        type='text'
        value={props.content}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default GroceryInputField;
