
import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites(){
    const {favoriteItems} = React.useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>
            <div className='d-flex flex-wrap'>
            {favoriteItems
            .map((item) => 
                <Card 
                key = {item.id}
                id = {item.id}
                title = {item.title}
                price = {item.price}
                imageUrl={item.imageUrl}
                favorited = {true}
                />
                )}
            </div>
        </div>
    );
}

export default Favorites;
