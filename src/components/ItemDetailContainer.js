import React, {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer() {
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
    const [itemDetailContainer , setItemDetailContainer] = useState(null)
    const [itemDetailContainer1 , setItemDetailContainer1] = useState(null)


    useEffect(() => {
        getItems()
    },[])

    const fetchURL = () => fetch('https://mocki.io/v1/27a345e6-adb9-4962-87df-dc2b5ab8f531');

    const getItemsPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>  
                resolve(products)
            ,2000);
        })
    }
    
    const getItems = () =>{
        fetchURL().then(res => res.json())   
        .then(resp => 
            setItemDetailContainer(resp),
            console.log(itemDetailContainer)
            ) 
        
        getItemsPromise().then(res => 
            setItemDetailContainer1(res),
            console.log(itemDetailContainer1)
        )
        }
    
    
        return(<> ItemDetailConteiner
        {console.log(itemDetailContainer)}
                {itemDetailContainer
                ?
                    <ItemDetail item={itemDetailContainer[0]}/>
                : <span>Cargando productos...</span>}
            </>)
}

    
        
