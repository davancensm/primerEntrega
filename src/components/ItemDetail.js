import React, {useState} from 'react';

export default function ItemDetail(item) {
    return(
    <>
        {console.log(item.item)}
        {item.item.nombre}
        {item.item.precio}
        {item.item.descripcion}
        <img scr={item.item.imagen}></img>
</>)
}