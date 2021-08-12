import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemList from "./ItemList";
import {Button} from '@material-ui/core';




export default function ItemListContainer() {
    const {categoryId} = useParams('');

    return(
           <ItemList filter={categoryId}/>
        )        
    }
