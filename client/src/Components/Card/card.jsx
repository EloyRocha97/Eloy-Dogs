import styles from "./card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>

            <img className={styles.image} src={props.image} />

            <div className={styles.info}>
                <h4>{props.name}</h4>
                <p className={styles.temperamento}>Temperament: {props.temperament}</p>
                <p>Weight: {props.weight}</p>
            </div>
        </div>
    )
}

export default Card