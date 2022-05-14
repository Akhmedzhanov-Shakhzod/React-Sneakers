
import styles from './Card.module.scss'
import React from 'react'

function Card({id,title,imageUrl,price,onFavorite,onPlus,favorited = false}){
    const [isAdded,setIsAdded] = React.useState(false);
    const [isFavorite,setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({title,price,imageUrl});
        setIsAdded(!isAdded);
    };
    const onClickFavorite = () => {
        onFavorite({id,title,price,imageUrl});
        setIsFavorite(!isFavorite);
    };
    
    return (
        <div className={styles.card}>
            <div onClick={onClickFavorite} className={styles.favorite}>
                <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="liked"/>
            </div>
            <img width={133} height={122} src={imageUrl} alt="Sneakers" />

            <h5>{title}</h5>
            
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;