import './Cart.css';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import moment from 'moment';
import swal from 'sweetalert';

const Cart = () =>{

    // Datos que se ingresan en el formulario, para completar la compra
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });

    const {cart, totalPrice, removeAll} = useCartContext();

    // Datos de usuario que realiza la compra / Objeto que se manda a base de datos
    const order = {
        buyer: {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address,
        },
        date: moment().format('DD/MM/YYYY'),
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    // Función para llenar los campos del formulario
    const hadleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value,
        });
    };

    // Función para guardar la orden de compra
    const handleClick = () =>{
        // Instancia de Firestore
        const db = getFirestore();
        // Referencia a una colección, si no existe crea la colección 
        const ordersCollection = collection(db, 'orders');
        // Promesa
        addDoc(ordersCollection, order)
        .then(({id}) => swal(`Id de la compra realizada: ${id}`))//`Id de la orden realizada: ${console.log(id)}`
        // Actualizar documento (stock)
        .then((res) =>{
            cart.forEach((product) => {
                const ordersCollection = doc(db, 'products', product.id)
                updateDoc(ordersCollection, {
                    stock: product.stock - product.quantity,
                });
            });
        })
        removeAll()
    }


    if (cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <div className="botonHacerCompra">
                    <Link to= '/' className="bi bi-arrow-left-square-fill"> Realizar compras</Link>
                </div>
            </>
        );        
    }

    return(
    <>
    <h1>Esta es la cantidad de productos en tu carrito: {cart.length}</h1>
        {
            cart.map(product => <ItemCart key= {product.id} product = {product} />)
        }

                <div className="botonHacerCompra">
                    <Link to= '/' className="bi bi-arrow-left-square-fill"> Seguir comprando</Link>
                </div>

        <p>
            Total ₡: {totalPrice()}
        </p>

        <div className='containerForm'>
            <form action='#' autoComplete='off'>
                <h2>Formulario</h2>
                <input required name='name' type="text" placeholder='Nombre' value={formValues.name} onChange= {hadleInputChange} />
                <input required name='phone' type="text" placeholder='Teléfono' value={formValues.phone} onChange= {hadleInputChange} />
                <input required name='email' type="email" placeholder='Email' value={formValues.email} onChange= {hadleInputChange} />
                <input required name='address' type="text" placeholder='Direción Exacta' value={formValues.address}  onChange= {hadleInputChange} />
            </form>
        </div>
        <div className='botonFinalizarCompra'>
            <button onClick={handleClick} className="bi bi-check-square-fill"> Confirmar compra</button>
        </div>
    </>
    )
}

export default Cart;