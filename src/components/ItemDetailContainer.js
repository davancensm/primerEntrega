import React, {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

export default function ItemDetailContainer() {

    const { id } = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems();
    }, [])

    const fetchURL = () => fetch('https://mocki.io/v1/27a345e6-adb9-4962-87df-dc2b5ab8f531');

    const getItems = () => {
        fetchURL().then(res => res.json())   
        .then(result => setItems(result.find(item => item.descripcion === id)))
        .then(data => console.log(data))
        } 
        
    return( 
        <div style={{ display: 'flex' }}>        
        {items
        ?
            <Item item={items}/>
            
        : <span>Cargando el producto...</span>
        }
        </div>
        )
}

    
        
