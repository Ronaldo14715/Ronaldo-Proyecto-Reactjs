const CartWidget = ({counter}) => {

    return(
        <div className="cartWidgetContainer">
            <img src="../src/assets/img/cart.webp" alt="cart" className="cart-image"/>
            <span>{counter}</span>
        </div>
    )

}

export default CartWidget