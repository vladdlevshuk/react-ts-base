import styles from "components/Spinner/Spinner.module.scss";

const Spinner = () => (
  <div className={styles.spinnerWrapper}>
    <div className={styles.spinner} />
  </div>
);

export default Spinner;
