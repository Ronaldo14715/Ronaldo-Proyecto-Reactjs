import { useCart } from "../content/CartContext"

const CartWidget = () => {
    const {cartQuantity} = useCart()
    return(
        <div className="cartWidgetContainer">
            <img src="../src/assets/img/cart.webp" alt="cart" className="cart-image"/>
            { cartQuantity() > 0 && <span>{cartQuantity()}</span>}
        </div>
    )

}

export default CartWidget