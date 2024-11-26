
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos`)
    }
  return (
    <div className='containerProductsDetails'>
        <div className='productDetailsTitle'>
          <p>Detalle del producto: {producto.name}</p>
        </div>
        <div className='productDetailsBody'>
          <div className='detailBodyContainerImg'>
            <img className='detailBodyImg' src={producto.img} alt={producto.img}/>
            </div>
          <div className='detailBodyContainerData'>
            <div className='detailBodyDataProducto'>
              <p className='detailBodyDataDescripcion'>{producto.description}</p>
              <p className='detailBodyDataPrice'>S/.{producto.price}</p>
            </div>
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail
