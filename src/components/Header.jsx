import {Link} from 'react-router-dom';
import { UseCart } from '../hooks/useCart';


function Header(props){
    const {totalPrice} = UseCart();
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to ='/'>
                <div className="d-flex align-center">
                    <img width={40} height={40} src="img/logo.png" alt=""/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>  
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="img/cart.png" alt="Cart"/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li onClick={props.onClickFavorite} className="mr-20 cu-p">
                    <Link to = "/favorites">
                        <img width={18} height={18} src="img/heart.png" alt="Favorites"/>
                    </Link>
                </li>
                <li>
                    <Link to = "/orders">
                        <img width={18} height={18} src="img/user.png" alt="User"/>
                    </Link>
                </li>
            </ul>  
        </header>  
    );
}

export default Header;