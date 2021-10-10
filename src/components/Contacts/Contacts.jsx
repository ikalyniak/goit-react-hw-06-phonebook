import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import styles from './Contacts.module.css';

function Contacts({ contacts, onDelete }) {
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

// Contacts.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

const mapStateToProps = state => ({
  contacts: state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

/**


export default function Contacts(props) {
  const onDelete = id => {
    props.onClick(id);
  };

  const contacts = props.contacts;
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


 */
