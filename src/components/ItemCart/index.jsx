import React from "react";
import { useCartContext } from "../../context/CartContext";
import'./ItemCart.css';

const ItemCart = ({product}) =>{

    const {removeProduct} = useCartContext();

    return(
        <div className="itemCart">
            <img src= {product.image} alt= {product.title} />
            <div className="cardCarrito">
                <div className="contenido_item">
                    <p>Título: {product.title}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: ₡ {product.price}</p>
                    <p>Subtotal: ₡ {product.quantity * product.price}</p>
                    <div className="botonEliminarProductoCompra">
                        <button onClick= {() => removeProduct(product.id)} className= "bi bi-trash3-fill"> Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className='container_item'>
        //     <div className="card">
        //         <figure>
        //             <img src= {product.image} alt= {product.title} />
        //         </figure>
        //         <div className="contenido_item">
        //             <h3>Título: {product.title}</h3>
        //             <p>Cantidad: {product.quantity}</p>
        //             <p>Precio: ₡ {product.price}</p>
        //             <p>Subtotal: ₡ {product.quantity * product.price}</p>
        //         </div>
        //         <div className="contenido_item">
        //             <div className="botonEliminarProductoCompra">
        //                 <button onClick= {() => removeProduct(product.id)}>Eliminar</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ItemCart;