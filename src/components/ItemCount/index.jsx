import "./itemCount.css";

import React,{useState, useEffect} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() =>{
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className= 'counter'>
            <button className="botonSumarRestar" disabled={count <= 0} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="botonSumarRestar" disabled={count >= stock} onClick={increase}>+</button>
            <div className="botonAgregarCarrito">
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                <p className="pCounter">* <span className="spanCounter">Nota:</span> Un máximo de 5 unidades *</p>                
            </div>
        </div>
    );
}

export default ItemCount;