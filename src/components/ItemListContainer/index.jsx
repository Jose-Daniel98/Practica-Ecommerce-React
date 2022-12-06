import ItemList from '../ItemList';
import React, {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Title from "../Title";
import { useParams } from "react-router-dom";

export const ItemListContainer =  ({texto}) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    // Componente Loading...
    const [loading, setLoading] = useState(true);

    const getData = new Promise(resolve => {
        setTimeout(() =>{
            resolve('Datos Obtenidos')
        }, 2000);
    });

    useEffect(() =>{
        // Componente Loading...
        getData.then((data) => {
            console.log(data);
            setLoading(false);
        });
        
        // 1- Traer el servicio de firestore
        const querydb = getFirestore();
        // 2- Crear un puntero al dato que queremos traer
        const queryCollection = collection(querydb, 'products');
        // 3- Traer el dato con una promesa
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData( res.docs.map(product => ({id: product.id, ...product.data()}))) )
        }else{
            getDocs(queryCollection)
                .then(res => setData( res.docs.map(product => ({id: product.id, ...product.data()}))) )
        }
    }, [categoriaId])

    

    return (
        <>
        <Title greeting={texto}/>

        {/* Componente Loading... */}
        <div>
            {
                loading ? (
                    <div className="p-5 d-flex justify-content-center">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="sr-only"></span>
                        </div>
                            <span className="m-1">Cargando...</span>
                    </div>
                    ) : (
                        <ItemList data={data}/>
                    )
            }
        </div>
        </>
    );
}

export default ItemListContainer;