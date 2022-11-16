import './itemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";

import React, {useState} from "react";

export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) =>{
        setGoToCart(true);
    }

    return(
        <div className="container_itemDetail">
        <div className="detail_itemDetail">
            <img className="detail_image" src={data.image} alt="" /> 
            <div className="content_itemDetail">
                <h1>{data.title}</h1>
                <p>{data.price}</p>
                {
                    goToCart
                    ? <div className='botonItemDetail'>
                    <Link to={`/cart`} >
                        <p>Terminar Compra</p>
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
