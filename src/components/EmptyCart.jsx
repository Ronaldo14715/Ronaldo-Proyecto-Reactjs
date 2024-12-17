import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    
  return (
    <div className='carritoVacio'>
        <div className='carritoVacioDetail'>
          <h2>TU CARRITO ESTA VACIO</h2>
          <Link className='btnInicio' to='/' >Ir a comprar</Link>
        </div>
    </div>
  )
}

export default EmptyCart