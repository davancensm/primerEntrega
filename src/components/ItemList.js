import React, {useState, useEffect} from 'react';
import Item from "./Item";

export default function ItemList(){
    const [misItems, setMisItems] = useState(null);

useEffect(() => {
    getItems();
    }, [])

    const fetchURL = () => fetch('https://mocki.io/v1/27a345e6-adb9-4962-87df-dc2b5ab8f531');

    const getItems = () =>{
        fetchURL().then(res => res.json())   
        .then(resp => setMisItems(resp))
        } 
    
    return(
        <div style={{ display: 'flex' }}>        
        {misItems
        ?
            misItems.map(producto => {
                return <Item item={producto}/>
            } )
        : <span>Cargando Listado de productos...</span>
        }
        </div>
    )
}