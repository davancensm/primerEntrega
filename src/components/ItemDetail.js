import React, {useState} from 'react';

export default function ItemDetail(item) {
    const [items,setItems] = useState(item);
    return(
    <>
        <span>{items.nombre}</span>
        <span>{items.precio}</span>
        <span>{items.descripcion}</span>
        <img scr={items.imagen}></img>)
</>)
}