import styles from "./Badge.module.scss";

const Badge = ({ text, type }) => {
  return (
    <span
      className={`${styles.badge} ${
        type === "discount" ? styles.discount : styles.new
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
