import styles from "./Button.module.scss";

export const Button = ({ onClick, children, type }) => {
  if (type === "link") {
    return (
      <a href="" className={styles.btn}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={styles.btn} onClick={onClick}>
        {children}
      </button>
    );
  }
};
