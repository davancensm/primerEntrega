import React, {useState} from 'react';
import {IconButton,Card} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function ItemCount({stock: initialStock, onAdd, initial}){
    const [count, setCount] = useState(initial);
    const [stock, setStock] = useState(initialStock);

    const addCount = () => {
        if(stock >= 1 && count < initialStock){
            setCount(count + 1)
            setStock(stock - 1)
        }
    }
    const subsCount = () => {
        if(count > 0){
            setCount(count - 1);
            setStock(stock + 1);
        }
    }   
    
    return(
    <Card>
        <IconButton aria-label="Add" size="small">
            <ArrowUpwardIcon onClick={addCount}>+</ArrowUpwardIcon>
        </IconButton>
        {count}
        <IconButton aria-label="Delete" size="small">
            <ArrowDownwardIcon onClick={subsCount}>-</ArrowDownwardIcon>
        </IconButton>
        <IconButton color="primary" onClick={() => {return onAdd(count)}} aria-label="Agregar al carrito.">
            <AddShoppingCartIcon />
        </IconButton>
    </Card>)
}

export default ItemCount;