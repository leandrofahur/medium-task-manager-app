import PropTypes from "prop-types";

// custom components:
import Filter from "../Filter/Filter";

import styles from "./Header.module.scss";

export default function Header(props) {
  const { handleOnRemoveAll, handleOnAdd } = props;
  return (
    <header>
      <h1 className={styles.title}>Task Manager</h1>
      <h3 className={styles.subtitle}>Tasks</h3>
      <div className={styles.action}>
        <button type="button" onClick={handleOnAdd}>
          Add
        </button>
        <button type="button" onClick={handleOnRemoveAll}>
          Remove All
        </button>
      </div>
      <h3 className={styles.subtitle}>Filter Tasks</h3>
      <div className={styles.action}>
        <Filter />
      </div>
    </header>
  );
}

Header.propTypes = {
  handleOnRemoveAll: PropTypes.func,
  handleOnAdd: PropTypes.func,
};
