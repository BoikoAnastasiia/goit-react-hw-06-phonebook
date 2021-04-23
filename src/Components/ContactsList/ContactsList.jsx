import styles from './ContactList.module.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ contacts, onDelete }) => (
  <ul className={styles.container}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <div className={styles.buttonContainer}>
          <button className={styles.delete} onClick={() => onDelete(id)}>
            -
          </button>
        </div>
        <div>
          <p className={styles.name}>{name} </p>
          <span className={styles.number}>{number}</span>
        </div>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ stateContacts: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state.contacts, state.filter),
// });

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.number.isRequired,
    }),
  ),
  onDelete: propTypes.func.isRequired,
};
