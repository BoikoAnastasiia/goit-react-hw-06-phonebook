import styles from './Search.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import propTypes from 'prop-types';

const Search = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Phone book search
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  </div>
);

Search.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.stateContacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
