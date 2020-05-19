import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state.name);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Product:</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            placeholder="Add Product..."
            style={{ flex: '10', padding: '5px' }}
          />
          <button className="btn" disabled={this.state.name.length < 1} style={{ flex: '1' }}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

addProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default addProduct;