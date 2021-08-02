import React, { useState, useContext } from 'react';
import ItemCount from "./ItemCount"
import { makeStyles, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { CartContext } from '../components/CartContext';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxWidth: 250,
      margin: '15px',
    },

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



export default function Item({item}){

    const [cart, setCart, agregarItem, clear, removeItem, removeOneItem, addOneItem] = useContext(CartContext);
    const [visible, setVisible] = useState(true);
    const classes = useStyles();
    
    const onAdd = (count) => {
      setVisible(!visible);
      const added = {id: item.id, cantidad: count, precio: item.precio };
      agregarItem(added);
    }

    return(
    <Card className={classes.root} key={item.id}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
            <Link to={`../item/${item.nombre}`} style={{ textDecoration: 'none' }}>{item.nombre}</Link>
        </Typography>
        <CardMedia
          component="img"
          alt={item.nombre}
          height="140"
          src= {item.imagen}
          title="Contemplative Reptile"
        />
        <Typography variant="body2" component="p">
          <br />
          {item.descripcion}
        </Typography>
        <Typography variant="h6" component="p">
          <br />
          Precio: ${item.precio}
        </Typography>
      </CardContent>
      <CardActions>
      {visible
      ?
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
      :
      <Link to={`./cart`} variant="h2"><Button>Finalizar Compra</Button></Link>
      }    
      </CardActions>
    </Card>
  );
}