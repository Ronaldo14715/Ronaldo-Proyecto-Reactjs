import React from 'react'
import { useCart } from '../content/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
  return ( 
    <div>
        <img src={prod.img} alt={prod.name}></img>
        <span>{prod.name}</span>
        <span>{prod.cantidad}</span>
        <span>{prod.price}</span>
        <span>Precio Final{prod.cantidad * prod.price}</span>
        <button onClick={()=> removeItem(prod.id)}>x</button>
    </div>
  )
}

export default CartItem