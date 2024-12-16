import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    
  return (
    <div>
        <h2>TU CARRITO ESTA VACIO</h2>
        <h4>TE INVITAMOS A VER NUESTROS PRODUCTOS</h4>
        <Link to='/' >Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart