import React, {useState,useEffect} from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    const {detalleId} = useParams();

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
        const queryDoc = doc(querydb, 'products', detalleId);
        // 3- Traer el dato con una promesa
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId])

    return(
        <>
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
                        <ItemDetail data={data} />
                    )
            }
        </div>
        </>
    );
}

export default ItemDetailContainer;