import React from 'react';
import ItemCount from "./ItemCount"
import { makeStyles } from '@material-ui/core/styles';
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
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Item({item}){

    const classes = useStyles();

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
      <ItemCount stock={item.stock} initial={1} onAdd={() => console.log('agregado')}/>
      </CardActions>
    </Card>
  );
}