import React from 'react'
import { useCart } from '../content/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
  return ( 
      <div className='cartProducto'>
        <div className='containerImg'>
          <img className='productoImg' src={prod.img} alt={prod.name}></img>
        </div>
        <div className='containerDataProducts'>
          <p>{prod.name}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio: S/. {prod.price}.00</p>
          <p>Precio Final: S/. {prod.cantidad * prod.price}.00</p>
          <div className='containerBtnEliminar'>
            <button className='eliminarProductoCarrito' onClick={()=> removeItem(prod.id)}>X</button>
          </div>
        </div>  
      </div>
  )
}

export default CartItem