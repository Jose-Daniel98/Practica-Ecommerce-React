import './itemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";

import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="container_itemDetail">
        <div className="detail_itemDetail">
            <img className="detail_image" src={data.image} alt="" /> 
            <div className="content_itemDetail">
                <h1>{data.title}</h1>
                <p className='tituloItemDetail'>Precio: ₡ {data.price}</p>
                <p className='descripcionItemDetail'>Descripción: {data.description}</p>
                {
                    goToCart
                    ? <div className='botonItemDetail'>
                    <Link to={`/cart`} >
                        <button className="bi bi-bag"> Ir al carrito</button>
                    </Link>
                </div>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;
