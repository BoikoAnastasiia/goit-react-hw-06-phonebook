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

const mapStateToProps = state => {
  const { contacts, filter } = state.stateContacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return { contacts: visibleContacts };
};

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
