import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemList from "./ItemList";
import {Button} from '@material-ui/core';




export default function ItemListContainer() {
    const {categoryId} = useParams();

    return(
                <>Filtros:
                <Button><Link to="../category/3x3" style={{ textDecoration: 'none' }}>3x3</Link></Button>
                <Button><Link to="../category/4x4" style={{ textDecoration: 'none' }}>4x4</Link></Button>
                <ItemList filter={categoryId}/>
                </>
            )        
    }
