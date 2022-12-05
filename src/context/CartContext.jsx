import React, {useState, useContext} from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    // Función para agregar al carrito
    const addProduct = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
            setCart([...cart, {...item, quantity}]);
        }
    }

    console.log('carrito: ', cart);

    // Función para precio total de los productos / Resumen de compra / Total de gasto
    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    // Función para saber el total de los productos en el CartWidget
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    // Función para limpiar el carrito
    const clearCart = () => setCart([]);

    // Función para saber si un producto esta/existe en el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    // Función para borrar el carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    // Función para borrar el carrito, una vez hecha la compra
    const removeAll = () => setCart([]);

    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
            removeAll,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;