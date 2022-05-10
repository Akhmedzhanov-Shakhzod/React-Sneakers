
import Header from './components/Header';
import Card from './components/Card';



function App() {
  return (
    <div className="wrapper clear">

      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img className="removeBtn cu-p" src="img/btn-remove.svg" alt="Remove" />
          </h2>

          <div className="cartItems">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} className="cartImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>1205 руб.</b>
              </div>

              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(img/sneakers/2.jpg)'}} className="cartImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>1205 руб.</b>
              </div>

              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            
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
            <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
          </div>
        </div>
      </div>

      <Header/>


      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        <Card/>

      </div>
    </div>
  );
}

export default App;
