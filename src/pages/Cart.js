import React, {useContext} from 'react';
import { CartContext } from '../components/CartContext';
import { makeStyles, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

function Cart() {
  const [cart , setCart, agregarItem, clear, removeItem, removeOneItem, addOneItem] = useContext(CartContext);
  const totalPrice = cart.reduce(( acumulado, agregar ) => acumulado + agregar.cantidad * agregar.precio , 0)

  return (
    <div>
        {
        cart.length !== 0
        ? cart.map(item => {
          return (
          <>
          <span>ID del Item Agregado: {item.id}     </span><span>Cantidad Agregada:   {item.cantidad}     </span> <span>Precio Unitario:   {item.precio}   </span> <Button onClick={() => {addOneItem(item)}}>+     </Button> <Button onClick={() => {removeOneItem(item)}}>-     </Button>
          <Button onClick={() => {removeItem(item)}}>Eliminar item</Button>
          <br/>
          </>)})
        :
        <>
        <span>Carrito Vacío</span>
        <Link to={`./`} variant="h2"><Button>Ir a Catálogo</Button></Link>
        <br/>
        </>
        }
        <span>Total de la compra: ${totalPrice.toFixed(2)}</span> 
        <br/>
        <Button onClick={() => {return clear()}}>Limpiar Carrito</Button>
    </div>
  );
}

export default Cart;