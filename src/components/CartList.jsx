import React from 'react'
import { useCart } from '../content/CartContext'
import CartItem from './CartItem'

const CartList = () => {
    const {cart,cartTotal, clear} = useCart()
    return (
         <div>
            {cart.map((prod)=> <CartItem key={prod.id} prod={prod} />)}
            <span>Total a Pagar: S/.{cartTotal()}</span>
            <div>
                <button onClick={clear}>Borrar Carrito</button>
                <button>Terminar Compra</button>
            </div>
        </div>
    )
}

export default CartList