import React from 'react';
import ItemList from "./ItemList";

export default class ItemListContainer extends React.Component {
    
        state = {
            greeting : "Lista de productos"
        }
        render(){
            return(
                <>
                <div><h1>{this.state.greeting}</h1></div>
                <ItemList/>
                </>
            )
        }

        
    }
