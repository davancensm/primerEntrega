import CartWidget from './CartWidget';
import React from 'react';
import {AppBar,Toolbar,Typography,Button,makeStyles,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));


function NavBar(){
    const classes = useStyles();
    return( 
    <div className={classes.root}>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/> 
                </IconButton>
                <Button><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Button>
                <Button><Link to="../products" style={{ textDecoration: 'none' }}>Productos</Link></Button>
                <Button><Link to="../checkout" style={{ textDecoration: 'none' }}>Checkout</Link></Button>
                <Typography variant='h6' className={classes.title}>
                    <Link to="/">E-Commerce</Link>
                </Typography>
                <Button><Link to="./Cart" style={{ textDecoration: 'none' }}><CartWidget/></Link></Button>
            </Toolbar>
        </AppBar>
        </div>)
}
export default NavBar; 
