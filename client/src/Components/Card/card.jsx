import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} className={styles.image} alt="" />

      <div className={styles.info}>
        <h3 className={styles.title}>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
