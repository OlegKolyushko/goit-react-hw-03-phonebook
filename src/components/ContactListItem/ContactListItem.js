import React from "react";
import PropTypes from 'prop-types';

function ContactListItem({ name, number, deleteContact }) {
  return (
    <li>
      {name} : {number} <button onClick={deleteContact}>Delete</button>
    </li>
  );
}
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}
export default ContactListItem;
