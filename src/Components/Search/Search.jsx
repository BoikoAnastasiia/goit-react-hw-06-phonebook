import styles from './Search.module.css';

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

export default Search;
