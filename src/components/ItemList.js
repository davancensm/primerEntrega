import React, {useState, useEffect} from 'react';
import { getFirestore } from '../firebase';
import Item from "./Item";

export default function ItemList({filter}){
    const [misItems, setMisItems] = useState([]);
    const [loading, setLoading] = useState(false);



    const db = getFirestore();

    
    let itemCollection = db.collection("items");
    let newItemCollection;
    if (filter != undefined){
        newItemCollection = itemCollection.where('categoria','==', filter);
    }else{
        newItemCollection = itemCollection;
    }
    console.log(filter);

    newItemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('No results')
        }else {
            setMisItems(querySnapshot.docs.map(doc => doc.data()));
        }
    })
    
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