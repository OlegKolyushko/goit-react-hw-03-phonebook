import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }
  state = {
    name: '',
    number: '',
  };

  handlerForm = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({name: ''});
    this.setState({number: ''});
  };
  handlerName = (e) => {
    this.setState({ name: e.target.value });
  };
  handlerNumber = (e) => {
      this.setState({ number: e.target.value });
  }

  render() {
      const {name, number} = this.state
    return (
      <form onSubmit={this.handlerForm}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={this.handlerName} placeholder='Enter your name'></input>
        <br></br>
        <br></br>
        <h2>Number</h2>
        <input type="tel"  value={number} onChange={this.handlerNumber} pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='123-12-12' ></input>
        {/* <span>123-12-12</span> */}
        <br></br>
        <br></br>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
