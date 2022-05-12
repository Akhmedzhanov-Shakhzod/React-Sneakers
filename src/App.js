
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import React from 'react';
import axios from 'axios';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Items')
    .then(response => {setItems(response.data)})
  },[]);

  const onAddToCart = (obj) =>{
    setCartItems(prev => [... prev,obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items = {cartItems} onClose = {() => setCartOpened(false)}/>}
      <Header
      onClickCart = {() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Посик по запросу: ${searchValue}` : 'Все кроссовки'}</h1>

          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."/>
            {searchValue && <img onClick={() => {setSearchValue('')}} className="clearBtn" src="img/btn-remove.svg" alt="Clear" />}
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => 
            <Card 
            key = {item.imageUrl}
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
