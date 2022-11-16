import './item.css';
import { Link } from "react-router-dom";

import React from 'react';

const Item = ({info}) =>{
    return (
        // <div className='film'>
        // <img src={info.image} alt='' />
        // <Link to={`/detalle/${info.id}`} >
        //     {/* <img src={info.image} alt='' /> */}
        //     <p>{info.title}</p>      
        // </Link>
        // </div>
        
        <div className='container_item'>
            <div className="card">
                <figure>
                    <img src={info.image} alt='' />
                </figure>
                <div className="contenido_item">
                    <h3>{info.title}</h3>
                </div>
                <div className="contenido_item">
                    <Link to={`/detalle/${info.id}`} >
                    <p>Leer más</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;