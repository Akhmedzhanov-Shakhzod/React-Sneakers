
import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';


function Home({isLoading, searchValue, setSearchValue, onChangeSearchInput}){
    const {items,onAddToCart,onAddToFavorite} = React.useContext(AppContext);

    return (
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
            {
                isLoading ? [...Array(8)]
                .map((item,index) =>
                    <Card
                    key = {index}
                    loading
                    />
                )
                :items
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item) => 
                    <Card 
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    imageUrl={item.imageUrl}
                    onPlus = {obj => onAddToCart(obj)}
                    onAddToFavorite = {obj => onAddToFavorite(obj)}
                    />
                ) 
            }
            </div>
        </div>
    );
}

export default Home;
