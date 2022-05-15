
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Route, Routes} from 'react-router-dom';
import AppContext from './context';
import Orders from './pages/Orders';


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [favoriteItems,setFavoriteItems] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');
  const [isLoading,setIsloading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData () {
      //setIsloading(true);
      const favoriteResponse = await axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Favorite');
      const cartResponse = await axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Cart');
      const itemsResponse = await axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Items');

      setFavoriteItems(favoriteResponse.data)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data);

      setIsloading(false);
    }

    fetchData();
  },[]);

 
  const onAddToCart = async (obj) =>{
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://627b904fa01c46a853209bf5.mockapi.io/Cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      }
      else {
        const { data } = await axios.post('https://627b904fa01c46a853209bf5.mockapi.io/Cart', obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в карзину');
    }
  };

  const onRemoveFromCart = (id) =>{
    axios.delete(`https://627b904fa01c46a853209bf5.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://627b904fa01c46a853209bf5.mockapi.io/Favorite/${obj.id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://627b904fa01c46a853209bf5.mockapi.io/Favorite', obj);
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) =>{
    return cartItems.some(obj => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{items,cartItems,isItemAdded,onAddToFavorite,onAddToCart,favoriteItems,setCartOpened,setCartItems}}>
      <div className="wrapper clear">
        <Drawer
        onRemoveItem = {onRemoveFromCart}
        opened = {cartOpened}
        />
        <Header
        onClickCart = {() => setCartOpened(true)}
        />
        <Routes>
          <Route path='/' exact element={
            <Home
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            onChangeSearchInput = {onChangeSearchInput}
            isLoading = {isLoading}
            />
          }/>
          <Route path='/favorites' exact element = {
            <Favorites/>
          }/>
          <Route path='/orders' exact element = {
            <Orders/>}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
