// import React, { useEffect, useState } from 'react'

// const Item = () => {
//   // #0. Defino el mock
//   const products = [
//     {
//       nombre: 'Producto 1',
//       precio: '$50'
//     },
//     {
//       nombre: 'Producto 2',
//       precio: '$100'
//     }
//   ]
//   // #1. defino un estado en mi componente
//   const [misProductos, setMisProductos] = useState(null)
//   // #2. Solo debo ejecutar la promesa 1 vez al momento de renderizar el componente, necesito usar un efecto.
//   useEffect(() => {
//     setProductsPromise()
//   }, [])
//   // #3. Defino una funcion con la logica de la creacion de la promesa y el setTimeout
//   const getProducts = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => products && products.length > 0
//         ? resolve(products)
//         : reject(new Error('getProducts Error'))   
//       , 2000)        
//     })
//   }  
//   // #4. Defino una funcion con la logica del uso de la promesa
//   const setProductsPromise = () => {
//     getProducts()
//       .then(response => setMisProductos(response))
//       .catch(error => console.log(`ERROR`, 'Algo malio sal', error))
//   }
//   // #5. Hago el return del componente en jsx
//   return (
//     <ul>
//       {misProductos 
//         // #5.1 Si mi estado se actualizo y no es null, muestro productos
//         ? misProductos.map(producto => {
//           return (
//             <li>{producto.nombre} - {producto.precio}</li>
//           )
//         }) 
//         // #5.2 Si mi estado es null, muestro indicador de carga
//         : <span>Cargando productos...</span>}
//     </ul>
//   );
// }
// export default Item


import React, {useEffect, useState} from 'react';

export default function Item(){

    const products = [
        {nombre: 'Producto 1',
        precio: '$50'},
        {nombre: 'Producto 2',
        precio: '$100'}
    ]

const [misItems, setMisItems] = useState(null);

useEffect(() => {
    getItems()
    }, [])

const getItemsPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => products && products.length > 0
        ? resolve(products)
        : reject(new Error('getProducts Error')),2000);
    })
}

const getItems = () =>{
    getItemsPromise()
    .then(response => setMisItems(response))
    .catch(error => console.log('Algo malio sal', error))
}


return(
    <ul>
        {misItems
        ? misItems.map(imprimirProductos => {
            return(
            <li>{imprimirProductos.nombre} - {imprimirProductos.precio}</li>
            )
            })
        : <span>Cargando productos...</span>}
    </ul>)}
