import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';


export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = (name, number) => {
    const { contacts } = this.state;
    const include = contacts.find(item => item.name === name);
    if (include) {
      alert(`${name} is already in contacts`);
      return;
    }
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      this.setState(prevState => {
          return { 
              contacts: [...prevState.contacts, contact]
          };
      });
     
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));

  }

  handlerFilter = filter => {
    this.setState({ filter });
  };

  filteredContact = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  };

  render() {
      const { contacts, filter } = this.state;
      // const filteredContact = this.filteredContact;
    return (
      <>
        <h1>Phonebook</h1>
       <ContactForm onAddContact={this.addContact}></ContactForm>
       {contacts.length > 0 && (
           <>
           <br></br>
           <Filter value={filter} handlerFilter={this.handlerFilter}></Filter>
           <h2>Contacts</h2>
           <ContactList contacts={this.filteredContact()} deleteContact={this.deleteContact}></ContactList>
           </>
       )}
      </>
    );
  }
}
