
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "img/sneakers/1.jpg"},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: "img/sneakers/2.jpg"},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: "img/sneakers/3.jpg"},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: "img/sneakers/4.jpg"}
];

function App() {
  return (
    <div className="wrapper clear">

      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        <div className='d-flex'>
          {arr.map((obj) => 
            <Card 
            title = {obj.name}
            price = {obj.price}
            imageUrl={obj.imageUrl}
            onClick = {() => console.log(obj)}
            />
            )}
        </div>

      </div>
    </div>
  );
}

export default App;
