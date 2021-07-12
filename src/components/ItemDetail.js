import React, {useEffect, useState} from 'react';

export default function ItemDetail({item}) {
    return(
    <>
        <span>{item.nombre}</span>
        <span>{item.precio}</span>
        <span>{item.descripcion}</span>
        <img scr={item.imagen}></img>
    </>)
}