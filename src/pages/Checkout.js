import React from 'react';
import ItemCount from "../components/ItemCount"


function Checkout() {
  return (
    <div>
        <ItemCount stock={5} initial={1} onAdd={() => console.log('agregado')}/>
    </div>
  );
}

export default Checkout;