
import styles from './Card.module.scss'
import React from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

function Card({id,title,imageUrl,price,onPlus,favorited = false,loading = false,onAddToFavorite}){
    const [isFavorite,setIsFavorite] = React.useState(favorited);
    const {isItemAdded} = React.useContext(AppContext);

    const onClickPlus = () => {
        onPlus({id,title,price,imageUrl});
    };
    const onClickFavorite = () => {
        onAddToFavorite({id,title,price,imageUrl});
        setIsFavorite(!isFavorite);
    };
    return (
        <div className={styles.card}>
            {
                loading ? 
                <ContentLoader 
                    speed={2}
                    width={200}
                    height={265}
                    viewBox="0 0 180 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="160" height="155" /> 
                    <rect x="0" y="170" rx="5" ry="5" width="160" height="15" /> 
                    <rect x="0" y="190" rx="5" ry="5" width="110" height="15" /> 
                    <rect x="0" y="220" rx="5" ry="5" width="90" height="25" /> 
                    <rect x="128" y="213" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> 
                :
                <>
                    {
                        onAddToFavorite &&
                        <div onClick={onClickFavorite} className={styles.favorite}>
                            <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="liked"/>
                        </div>
                    }
                    <img width={133} height={122} src={imageUrl} alt="Sneakers" />

                    <h5>{title}</h5>
                    
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена: </span>
                            <b>{price}</b>
                        </div>
                        {
                            onPlus &&
                            <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="Plus" />
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default Card;