import React, {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer() {
    
    const [itemDetailContainer , setItemDetailContainer] = useState({})


    useEffect(() => {
        getItems()
    },[])

    const fetchPromise = () => fetch('https://mocki.io/v1/27a345e6-adb9-4962-87df-dc2b5ab8f531');

    const getItemsPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>  
            fetchPromise()
            .then(response => response.json())
            .then(result => console.log(result))
            .then(resp => setItemDetailContainer(resp))   
            .then(asd => console.log(itemDetailContainer))
            .then(data => resolve(data))       
            ,2000);
        })
    }
    
    const getItems = () =>{
        getItemsPromise()
        .then((data) => console.log(data))
        .then(response => setItemDetailContainer(response))
        }
    
    
        return(<>
                {itemDetailContainer
                ?
                    <ItemDetail item={itemDetailContainer[0]}/>
                : <span>Cargando productos...</span>}
            </>)
}

    
        
