import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='containerError'>
        <p>ERROR 404</p>
        <Link className='errorBtnError' to='/'>Volver a Home</Link>
    </div>
  )
}

export default Error