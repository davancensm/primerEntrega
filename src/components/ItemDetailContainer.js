import React, {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getFirestore } from '../firebase';

export default function ItemDetailContainer() {

    const { id } = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading ] =useState(false);

 
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        console.log(id)
        const item = itemCollection.where('nombre', '==', id)
        console.log(item)
        item.get().then((querySnapshot) => {
            console.log(querySnapshot)
        if(querySnapshot.size === 0){
            console.log('No results')
        }else {
                setItems(querySnapshot.docs.map(doc => doc.data()))
            }
        }).finally(() => {setLoading(false);})
    }, []);

        // itemCollection.get().then((querySnapshot) => {
        //     if(querySnapshot.size === 0){
        //         console.log('No results')
        //     }else {
        //         setItems(querySnapshot.docs.where(doc => doc.data()))
        //     }
        // }).finally(() => {setLoading(false);})
        // }, [])
        
    return( 
        <div style={{ display: 'flex' }}>        
        {console.log(items)}
        {items
        ?
            <Item item={items[0]}/>
            
        : <span>Cargando el producto...</span>
        }
        </div>
        )
}

        
