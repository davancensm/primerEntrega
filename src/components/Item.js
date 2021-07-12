import React, {useEffect, useState} from 'react';

export default function Item(){

    const products = [
        {nombre: 'Producto 1',
        precio: '$50',
        descripcion: 'CocaCola',
        img: 'https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png' },
        {nombre: 'Producto 2',
        precio: '$100',
        descripcion: 'Pepsi',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/232/784/products/pepsi-cola-latas-354-ml-x-24-unidades1-d25ca25cd3cb2f7edb16006551484168-640-0.png'}
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
