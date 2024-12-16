import React from "react"
import { useCart } from "../content/CartContext"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
const CartView = () => {
    const {cart} = useCart()
    return (
        <div className="containerCarrito">
            {!cart.length
            ?<EmptyCart /> 
            :<div className="containerProductos">
                <CartList />
            </div> }
        </div>
    )
}

export default CartView