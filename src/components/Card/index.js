import styles from './Card.module.scss'

console.log(styles);

function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/heart-unliked.svg" alt="liked"/>
            </div>
            <img width={133} height={122} src={props.imageUrl} alt="Sneakers" />

            <h5>{props.title}</h5>
            
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price}</b>
                </div>
                <button className="buttom" onClick={props.onClick}>
                    <img width={11} height={11} src="img/btn-plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;