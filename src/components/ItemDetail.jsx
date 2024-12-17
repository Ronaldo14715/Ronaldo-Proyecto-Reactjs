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
        text: '<div style="font-family: poppins">Producto Agregado</div>',
        duration: 3000,
        newWindow: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #8D7B68, #F4EDE3)",
          color: "#2F2F2F", 
          border: "2px solid #5F4C3B",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
        },
        escapeMarkup: false
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
