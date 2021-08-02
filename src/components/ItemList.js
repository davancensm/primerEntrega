import React, {useState, useEffect} from 'react';
import { getFirestore } from '../firebase';
import Item from "./Item";

export default function ItemList({filter}){
    const [misItems, setMisItems] = useState([]);
    const [loading, setLoading] = useState(false);


useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let itemCollection = db.collection("items");
    if(filter != undefined){
        itemCollection = itemCollection.where('categoria','==',filter)
    }

    itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('No results')
        }else {
            setMisItems(querySnapshot.docs.map(doc => doc.data()))
        }
    }).finally(() => {setLoading(false);})
    }, [])

    
    
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