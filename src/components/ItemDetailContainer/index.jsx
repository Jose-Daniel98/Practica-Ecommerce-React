import React, {useState,useEffect} from "react";
// import {data} from "../../data/data";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const films = [
    {id: 1, image: "https://cdn.shopify.com/s/files/1/0074/2290/2323/products/Audifonos-Inalambricos-Apple-Airpods-2_2048x2048.png?v=1643882820", category: 'films', title: "Audífonos Apple Airpods 2", price: "₡ 120.950"},
    {id: 2, image: "https://www.tivicr.com/21275-large_default/auriculares-inal%C3%A1mbricos-marley.jpg", category: 'films', title: "Auriculares Marley", price: "₡ 69,999"},
    {id: 3, image: "https://www.officedepot.co.cr/medias/37058.jpg-515ftw?context=bWFzdGVyfHJvb3R8NzA4MDB8aW1hZ2UvanBlZ3xoM2IvaDc3LzEwMTM0ODM4NDQ0MDYyLzM3MDU4LmpwZ181MTVmdHd8MzQzZDNmNWY1MzQwY2I4OWZiZTg4NDc5MTQ3NWYxZDBjMWNkNWI1ZmUxODE4ODlkYzdjYTI1OTI3MzY2ZGJhYw", category: 'films', title: "Auriculares Argom Negro ARG-HS-5050onin"},
    {id: 4, image: "https://www.mundomusicalcr.com/wp-content/uploads/040101024.jpg", category: 'series', title: "Audífonos ARCOM USB para Juegos", price: "₡ 23,290"},
    {id: 5, image: "https://cdn.shopify.com/s/files/1/1161/3498/products/House-of-Marley-Audifonos-Smile-Jamaica-con-Microfono-EM-JE041-CP-2_large.jpg?v=1568947428", category: 'series', title: "Audífonos Marley Smile Jamaica", price: "₡ 10,900"},
    {id: 6, image: "https://http2.mlstatic.com/D_NQ_NP_848142-MCR43989593106_112020-O.webp", category: 'series', title: "House Of Marley Positive Vibration Xl Bluetooth *itech", price: "₡ 65,999"},
];

export const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });
        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;

// const [product, setProdct] = useState();

    // const getData = new Promise((resolve, reject) =>{
    //             setTimeout(() => {
    //                 resolve(data);
    //             }, 2000);
    //         });

    //         useEffect(() =>{
    //                 getData.then((response) =>{
    //                     setProdct(response[0]);
    //                 })
    //             }, [])
            
    //             return(
    //                 <div>
    //                     {product?.image}
    //                     <h1>{product?.title}</h1>
    //                     {product?.price}
    //                 </div>
    //                 // <ItemDetail data={data} />
    //             );