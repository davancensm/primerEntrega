import React, {useContext} from 'react';
import { CartContext } from '../components/CartContext';

export default function CartWidget(){
    const [cart] = useContext(CartContext);

    return(
        <div>
        {cart.length >= 1
        ?
        <>
        <img style= {{margin: 'right',width: '50px'}} src="https://www.pngrepo.com/download/45922/shopping-cart.png" alt="" />
        <spam>({cart.length})</spam>
        </>
        :
        <>
        </>
        }
        </div>)
    
}