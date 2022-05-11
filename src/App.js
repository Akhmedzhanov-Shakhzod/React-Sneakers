
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import React from 'react';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items,setItems] = React.useState([]);

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer onClose = {() => setCartOpened(false)}/>}
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
          {items.map((obj) => 
            <Card 
            title = {obj.name}
            price = {obj.price}
            imageUrl={obj.imageUrl}
            onClickFavotive = {() => alert('Favorite')}
            />
            )}
        </div>

      </div>
    </div>
  );
}

export default App;
