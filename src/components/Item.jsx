import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="card">
        <img src={product.img} className="card-img" alt={product.name}/>
        <div className="card-body">
            <p className="card-title">{product.name}</p>
            <p className='card-description'>{product.description}</p>
            <p className="card-price">S/. {product.price}</p>  
        </div>
        <div className='card-footer'>
        <Link to={`/item/${product.id}`} className="card-button">
          Ver más
        </Link>
        </div>
    </div>
  )
}

export default Item