import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../content/CartContext'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart,cart} = useContext(CartContext)
    const onAdd = (cantidad) =>{
      Toastify({
        text: "Producto Agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right,rgb(29, 29, 28),rgb(58, 89, 226))",
        }
      }).showToast();
      setCompra(true)
      addToCart(producto,cantidad)
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
            
            {compra 
            ? <div className='shoppingActions'>
                <Link className='btnContinueShopping' to='/'>Seguir comprando</Link>
                <Link className='btnGoToCart' to='/cart'>Ir al carrito</Link>
            </div> 
            :<ItemCount stock={producto.stock} onAdd={onAdd}/>
            }
          </div>
        </div>
    </div>
  )
}

export default ItemDetail
