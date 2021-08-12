import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from '../components/CartContext';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import { getFirestore, getFirebase } from '../firebase';

function Cart() {
  const [cart, setCart, agregarItem, clear, removeItem, removeOneItem, addOneItem] = useContext(CartContext);
  const totalPrice = cart.reduce(( acumulado, agregar ) => acumulado + agregar.cantidad * agregar.precio , 0)

  useEffect(() => {
    
  },[])
  const db = getFirestore();
  const orders = db.collection("orders")
  const firebase = getFirebase();
  
  const buy = (e) => {
    e.preventDefault();


  const buyer = {      
    name : e.target[0].value,
    lastname : e.target[1].value,
    email : e.target[2].value,
    emailVerf : e.target[3].value,
    phone : e.target[4].value,
  }

  if(buyer.email === buyer.emailVerf){
  const compraTotal = cart.reduce((acum,item) => acum + (item.precio * item.cantidad) , 0)

  const newOrder = {
    buyer,
    items : cart,
    compraTotal,
    // date: firebase.firestore.Timestamp.fromDate(new Date())
  }

  orders.add(newOrder).then(({id}) => {
    console.log("Se ha generado su orden con el siguiente ID:",id);
  })
  }else{
    console.log("Las direcciones de mail no concuerdan")
  }}

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
        <form onSubmit={buy}>
        <label>
          Nombre:
          <input type="text"/>
        </label>
        <label>
          Apellido:
          <input type="text" />
        </label>
        <label>
          E-Mail:
          <input type="text" />
        </label>
        <label>
          Repetir E-Mail:
          <input type="text" />
        </label>
        <label>
          Teléfono:
          <input type="text"/>
          <input type="submit" value="Submit" />
        </label>
        </form>
        <Button onClick={() => {return clear()}}>Limpiar Carrito</Button>
    </div>
  );
}

export default Cart;