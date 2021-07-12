import React, {useEffect, useState} from 'react';


export default function ItemDetailContainer() {
    
    const [itemDetailContainer , setItemDetailContainer] = useState({})


    useEffect(() => {
        getItems()
    },[])

    const fetchPromise = () => fetch('https://mocki.io/v1/27a345e6-adb9-4962-87df-dc2b5ab8f531');

    const getItemsPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>  
            fetchPromise()
            .then(response => response.json())
            .then(data => resolve(data))          
            ,2000);
        })
    }
    
    const getItems = () =>{
        getItemsPromise()
        .then(res => console.log(res))
        .then(response => setItemDetailContainer(response))
        }
    console.log(itemDetailContainer)

    return(<>
        <ItemDetail item=""/>
        </>
        )
}
    
        
