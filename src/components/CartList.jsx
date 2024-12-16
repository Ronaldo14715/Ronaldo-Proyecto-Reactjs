import React from 'react'
import { useCart } from '../content/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
const CartList = () => {
    const {cart,cartTotal, clear} = useCart()
    return (
        <div className='listProductos'>
            <div className='cartProductoMain'>
                {cart.map((prod)=> <CartItem key={prod.id} prod={prod} />)}
            </div>
            <div className='cartAcciones'>
                <div className='btnAcciones'>
                    <div className='containerBtnAcciones'>
                        <Link className='btnTerminarCompra' to='/CheckOut'>Terminar Compra</Link>
                        <p>Total a Pagar: S/.{cartTotal()}.00</p>
                    </div>
                    <div className='containerBtnBorrarCarrito'>
                        <button className='btnBorrarCarrito' onClick={clear}>Borrar Carrito</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default CartList