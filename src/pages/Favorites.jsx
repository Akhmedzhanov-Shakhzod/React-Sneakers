
import Card from '../components/Card';


function Favorites({items,onRemoveFavorite}){
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>
            <div className='d-flex flex-wrap'>
            {items
            .map((item) => 
                <Card 
                key = {item.id}
                id = {item.id}
                title = {item.title}
                price = {item.price}
                imageUrl={item.imageUrl}
                favorited = {true}
                onFavorite = {onRemoveFavorite}
                />
                )}
            </div>
        </div>
    );
}

export default Favorites;
