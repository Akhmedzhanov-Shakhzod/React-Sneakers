
import axios from 'axios';
import React from 'react';
import Card from '../components/Card';

function Orders(){
    const [oreders,setOrders] = React.useState([[]]);
    const [isLoading,setIsloading] = React.useState(true);


    React.useEffect(() => {
        try {
            (async () => {
                const {data} = await axios.get('https://627b904fa01c46a853209bf5.mockapi.io/Orders');
                //setOrders(data.map(obj => obj.items).flat());
                setOrders(data.reduce((prev,obj) => [...prev, ...obj.items],[]));
                setIsloading(false);
            })();
        } 
        catch (error) {
            alert('Ошибка при загрузке заказов');            
        }
    },[]);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закази</h1>
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
                :oreders
                .map((item,index) => 
                    <Card 
                    key = {index}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    imageUrl={item.imageUrl}
                    />
                ) 
            }
            </div>
        </div>
    );
}

export default Orders;
