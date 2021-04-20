import styles from './ContactList.module.css';
import propTypes from 'prop-types';

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

export default ContactsList;
