import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={styles.filter}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
