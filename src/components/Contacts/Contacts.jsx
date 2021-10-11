import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/actions';
import styles from './Contacts.module.css';

function Contacts({ onClick, contacts }) {
  const onDelete = id => {
    onClick(id);
  };

  return (
    <ul className={styles.contacts}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
