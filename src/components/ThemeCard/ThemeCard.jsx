import styles from "./ThemeCard.module.scss";

export const ThemeCard = ({ title, image, selected, onClick }) => {
  return (
    <div
      className={[styles.themeCard, selected && styles.selected].join(" ")}
      onClick={onClick}
    >
      <figure className={styles.figure}>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};
