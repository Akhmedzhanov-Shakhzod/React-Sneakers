
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [favoriteItems,setFavoriteItems] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Items')
    .then(response => {setItems(response.data)});
  },[]);

  React.useEffect(() => {
    axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Cart')
    .then(response => {setCartItems(response.data)});
    
    axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Favorite')
    .then(response => {setFavoriteItems(response.data)});
  },[cartOpened]);
 
  const onAddToCart = (obj) =>{
    axios.post('https://627b904fa01c46a853209bf5.mockapi.io/Cart',obj);
  };

  const onRemoveFromCart = (id) =>{
    axios.delete(`https://627b904fa01c46a853209bf5.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onFavorite = (obj) =>{
    axios.post('https://627b904fa01c46a853209bf5.mockapi.io/Favorite',obj);
  };
  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">

      {cartOpened 
      && <Drawer
       items = {cartItems} 
       onClose = {() => setCartOpened(false)}
       onRemoveItem = {onRemoveFromCart}
       />}
      <Header
      onClickCart = {() => setCartOpened(true)}
      onClickFavorite = {() => setFavoriteItems()}
      />
      <Route path='*' exact element={<Home/>}/>
    </div>
  );
}

export default App;
