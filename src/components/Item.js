import React, {useState} from 'react';
import ItemCount from "./ItemCount"
import { makeStyles, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

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
    const [visible, setVisible] = useState(true)
    const classes = useStyles();
    
    const onAdd = () => {
      setVisible(!visible);
    }

    return(
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
            <Link to={`./item/${item.descripcion}`} style={{ textDecoration: 'none' }}>{item.descripcion}</Link>
        </Typography>
        <Typography variant="body2" component="p">
          {item.nombre}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      {visible
      ?
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
      :
      <Link to={`./cart`} variant="h2"><Button>Finalizar Compra</Button></Link>
      }    
      </CardActions>
    </Card>
  );
}