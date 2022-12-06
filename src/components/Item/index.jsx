import './item.css';
import { Link } from "react-router-dom";

import React, {useContext} from 'react';

const Item = ({info}) =>{

    return (                
        <div className='container_item'>
            <div className="card">
                <figure>
                    <img src={info.image} alt='' />
                </figure>
                <div className="contenido_item">
                    <h3>{info.title}</h3>
                    <p>Stock disponible: {info.stock} unidades.</p>
                </div>
                <div className="contenido_item">
                    <Link to={`/detalle/${info.id}`} >
                        <button className="bi bi-plus-square-fill"> Leer más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;