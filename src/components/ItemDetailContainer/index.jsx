import React, {useState,useEffect} from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore";
// import {data} from "../../data/data";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

// 1- Traer el servicio de firestore
// 2- Crear un puntero al dato que queremos traer
// 3- Traer el dato con una promesa

// const productos = [
//     {id: 1, price: "120950", image: "https://cdn.shopify.com/s/files/1/0074/2290/2323/products/Audifonos-Inalambricos-Apple-Airpods-2_2048x2048.png?v=1643882820", category: 'inalambricos', title: "Audífonos Apple Airpods 2", description: "Sin cables y sin esfuerzo. Como por arte de magia. Los AirPods te brindan una experiencia inalámbrica increíble, pues ahora te ofrecen muchas horas de audio y conversación y la posibilidad de usarlos con un estuche de carga inalámbrica. Sácalos del estuche y estarán listos para funcionar con todos tus dispositivos. Póntelos y se conectarán al instante, como por arte de magia, para brindarte un sonido rico en matices y de alta calidad."},
//     {id: 2, price: "69999", image: "https://www.tivicr.com/21275-large_default/auriculares-inal%C3%A1mbricos-marley.jpg", category: 'inalambricos', title: "Auriculares Marley", description: "Los audífonos House Of Marley combinan comodidad y acústica top del mercado, el 'Signature Sound' de Marley entrega bajos suaves y poderosos, medios definidos y altos energéticos. Todos nuestros audífonos cuentan con micrófono integrado."},
//     {id: 3, price: "1000", image: "https://www.officedepot.co.cr/medias/37058.jpg-515ftw?context=bWFzdGVyfHJvb3R8NzA4MDB8aW1hZ2UvanBlZ3xoM2IvaDc3LzEwMTM0ODM4NDQ0MDYyLzM3MDU4LmpwZ181MTVmdHd8MzQzZDNmNWY1MzQwY2I4OWZiZTg4NDc5MTQ3NWYxZDBjMWNkNWI1ZmUxODE4ODlkYzdjYTI1OTI3MzY2ZGJhYw", category: 'inalambricos', title: "Auriculares Argom Negro ARG-HS-5050onin", description: "Auriculares totalmente inalámbricos, 18 horas de autonomía de la batería, con caja cargadora y estuche protector negro ARGOMARH-HS-5050BK"},
//     {id: 4, price: "23290", image: "https://www.mundomusicalcr.com/wp-content/uploads/040101024.jpg", category: 'concable', title: "Audífonos ARCOM USB para Juegos", description: "Longitud del cable: 1.8 m (6 pies). Tipo de enchufe: USB 2.0. Pista de auriculares ajustable y micrófono telescópico. Capacidad máxima de potencia: 100mW.  Membrana: 40 mm de diámetro (auriculares) / 6 × 5 mm de diámetro (micrófono). Impedancia: 32 ohmios (auriculares) / 1K ohmios (micrófono). Respuesta de frecuencia: 20Hz-20 KHz (Auriculares) / 30Hz a 16KHz (Micrófono). Sensibilidad: 105dB S.P.L a 1KHz (Auriculares) / – 58dB ± 2dB (Micrófono)."},
//     {id: 5, price: "₡ 65999", image: "https://cdn.shopify.com/s/files/1/1161/3498/products/House-of-Marley-Audifonos-Smile-Jamaica-con-Microfono-EM-JE041-CP-2_large.jpg?v=1568947428", category: 'concable', title: "Audífonos Marley Smile Jamaica", price: "10900", description: "Ponte en movimiento con tus melodías favoritas. Los auriculares House Of Marley Smile Jamaica ofrecen una construcción sólida con madera certificada FSC® y carcasas de aluminio reciclables, una selección de colores vibrantes y un diseño aislante de ruido para mantenerlo conectado a su música. Puede confiar en la comodidad y el sonido profundo y claro para mantener su sonrisa día tras día."},
//     {id: 6, price: "12000", image: "https://http2.mlstatic.com/D_NQ_NP_848142-MCR43989593106_112020-O.webp", category: 'concable', title: "House Of Marley Positive Vibration Xl Bluetooth *itech", description: "Fabricado con materiales sostenibles, el Positive Vibration XL ofrece el 'sonido característico' de Marley con el equilibrio perfecto de graves profundos, medios claros y agudos nítidos. Disfrute de 24 horas de escucha premium con una batería de mayor duración y cómodas almohadillas de espuma viscoelástica. La tecnología de carga rápida le brinda 4 horas de reproducción en solo 10 minutos y una carga completa en 2 horas. Habla con las manos libres usando su micrófono integrado con funcionalidad remota y dóblalo cuando hayas terminado."},
// ];

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
        {/* <ItemDetail data={data} /> */}

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