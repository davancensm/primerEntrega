import React, {useState, useEffect} from 'react';
import Item from "./Item";

export default function ItemList(){
    const [misItems, setMisItems] = useState(null);

useEffect(() => {
    getItems();
    }, [])

    const fetchURL = () => fetch('https://mocki.io/v1/6632fa0e-f6d4-45ab-a5bd-35d681979dfa');

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