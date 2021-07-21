import React from 'react';
import ItemCount from "../components/ItemDetailContainer"

function ProductDetail(product) {
  return (
    <div>
        <ItemCount stock={5} initial={1} onAdd={() => console.log('agregado')}/>
    </div>
  );
}

export default ProductDetail;