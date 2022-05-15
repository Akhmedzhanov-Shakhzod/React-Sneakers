import React from "react";
import axios from "axios";
import AppContext from "../../context";

import Info from "../Info";
import { UseCart } from "../../hooks/useCart";

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function Drawer({onRemoveItem,opened}) {
    const {cartItems,setCartItems,setCartOpened} = React.useContext(AppContext);
    const [isOrderComplete,setIsOrderComplete] = React.useState(false);
    const [orderId,setOrderId] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const {totalPrice} = UseCart();

    const onClickOrder = async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.post('https://627b904fa01c46a853209bf5.mockapi.io/Orders', {
            items: cartItems,
          });
          setOrderId(data.id);//setOrderId
          setIsOrderComplete(true);//setIsOrderComplete
          setCartItems([]);
    
          for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await     axios.delete(`https://627b904fa01c46a853209bf5.mockapi.io/Cart/${item.id}`);
            await delay(1000);
          }
        } catch (error) {
          alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
      };
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img onClick={() => setCartOpened(false)} className={`${styles.removeBtn} cu-p`} src="img/btn-remove.svg" alt="Close" />
                </h2>

                {
                    cartItems.length > 0 ? 
                    <>
                        <div className={styles.cartItems}>
                            {cartItems.map(obj => (
                                <div className={`${styles.cartItem} d-flex align-center mb-20`} key = {obj.id}>
                                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} className={styles.cartImg}></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemoveItem(obj.id)} className={styles.removeBtn} src="img/btn-remove.svg" alt="Remove" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.cartTotalBlock}>
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>

                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{(totalPrice / 100 * 5).toFixed(2)} руб.</b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
                        </div> 
                    </>
                    :<>
                    {
                        isOrderComplete ?
                        <Info
                        imageUrl = "/img/comlete-order.png"
                        title = "Заказ оформлен!"
                        description = {`Ваш заказ # ${orderId} скоро будет передан курьерской доставке`}
                        />
                        :                        
                        <Info 
                        imageUrl = "/img/empty-cart.jpg"
                        title = 'Корзина пустая'
                        description = 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                        />
                    }
                    </>
                }
            </div>
        </div>
    );
}


export default Drawer;