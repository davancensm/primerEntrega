import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [ cart, setCart ] = useState([]);

    const agregarItem = (itemAgregado) => {
        const existeEnCarrito = cart.find((x) => x.id === itemAgregado.id);
        if (existeEnCarrito){
            setCart(
                cart.map((producto) => 
                    producto.id === itemAgregado.id 
                    ? {...existeEnCarrito, cantidad: existeEnCarrito.cantidad + itemAgregado.cantidad}
                    : producto)
                );
            } else {
                setCart([...cart, itemAgregado]);
                }
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (item) => {
        const itemAEliminar = cart.indexOf((x) => x.id === item.id);
        setCart(cart.filter((x) => x.id !== item.id));
    }

    const removeOneItem = (item) => {
        const existeEnCarrito = cart.find((x) => x.id === item.id);
        if (existeEnCarrito){
            setCart(
                cart.map((producto) => 
                    producto.id === item.id 
                    ? {...existeEnCarrito, cantidad: existeEnCarrito.cantidad - 1}
                    : producto)
                );
            } else {
                setCart([...cart, item]);
                }      
    }

    const addOneItem = (item) => {
        const existeEnCarrito = cart.find((x) => x.id === item.id);
        if (existeEnCarrito){
            setCart(
                cart.map((producto) => 
                    producto.id === item.id 
                    ? {...existeEnCarrito, cantidad: existeEnCarrito.cantidad + 1}
                    : producto)
                );
            } else {
                setCart([...cart, item]);
                }      
    }

    return(
        <CartContext.Provider value={[cart, setCart, agregarItem, clear, removeItem, removeOneItem, addOneItem]}>
            {props.children}
        </CartContext.Provider>)
    }