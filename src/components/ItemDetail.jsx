import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../content/CartContext'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart,cart} = useContext(CartContext)
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos`)
        setCompra(true)
        addToCart(producto,cantidad)
    }
    console.log(cart)
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
