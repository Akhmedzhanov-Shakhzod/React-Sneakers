import React from "react";
import AppContext from "../context";
import Info from "./Info";
import axios from "axios";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function Drawer({onRemoveItem}) {
    const {cartItems,setCartItems,setCartOpened} = React.useContext(AppContext);
    const [isOrderComplete,setIsOrderComplete] = React.useState(false);
    const [orderId,setOrderId] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

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
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img onClick={() => setCartOpened(false)} className="removeBtn cu-p" src="img/btn-remove.svg" alt="Close" />
                </h2>

                {
                    cartItems.length > 0 ? 
                    <div className="d-flex flex flex-column">
                        <div className="cartItems">
                        {cartItems.map(obj => (
                            <div className="cartItem d-flex align-center mb-20" key = {obj.id}>
                                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartImg"></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemoveItem(obj.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
                            </div>
                        ))}
                        </div>
                        <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>

                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
                        </div> 
                    </div>
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