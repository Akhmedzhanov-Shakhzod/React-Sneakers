
function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt=""/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>  
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="img/cart.png" alt=""/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.png" alt=""/>
          </li>
        </ul>  
      </header>  

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input placeholder="Поиск ..."/>
          </div>
        </div>
    
        <div className="d-flex mb-50">
          <div className="card">
            <div className="favorite">
              <img src="img/heart-unliked.svg" alt="liked"/>
            </div>
            <img width={133} height={122} src="img/sneakers/1.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/btn-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/2.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/3.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/4.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex mb-50">
          <div className="card">
            <img width={133} height={122} src="img/sneakers/5.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/6.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/7.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/8.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex mb-50">
          <div className="card">
            <img width={133} height={122} src="img/sneakers/9.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/10.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/11.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={122} src="img/sneakers/12.jpg" alt="sneakers" />
            <h5>
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="buttom">
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
