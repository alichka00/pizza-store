import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Нічого не знайдено</h1>
      <p className={styles.description}>
        На жаль ця сторінка відсутня у нашому інтернет-магазині.
      </p>
    </div>
  );
};
