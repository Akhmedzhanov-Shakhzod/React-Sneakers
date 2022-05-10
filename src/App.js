
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';



function App() {
  return (
    <div className="wrapper clear">

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
