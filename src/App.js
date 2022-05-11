
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://627b904fa01c46a853209bf5.mockapi.io/Items')
    .then(response => {
      return response.json();
    })
    .then(json => {
      setItems(json);
    });
  },[]);

  const onAddToCart = (obj) =>{
    setCartItems(prev => [... prev,obj]);
  };

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items = {cartItems} onClose = {() => setCartOpened(false)}/>}
      <Header
      onClickCart = {() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.map((item) => 
            <Card 
            title = {item.name}
            price = {item.price}
            imageUrl={item.imageUrl}
            onFavotive = {() => alert('Favorite')}
            onPlus = {obj => onAddToCart(obj)}
            />
            )}
        </div>

      </div>
    </div>
  );
}

export default App;
