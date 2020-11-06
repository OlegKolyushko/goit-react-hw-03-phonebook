import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} deleteContact={() => deleteContact(id)}></ContactListItem>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;
