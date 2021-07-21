import React from 'react';

export default function ItemDetail(item) {
    return(
    <>
        {item.item.nombre}
        {item.item.precio}
        {item.item.descripcion}
        <img alt="" scr={item.item.imagen}></img>
</>)
}