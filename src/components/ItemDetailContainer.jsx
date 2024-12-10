
import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto]=useState({})
    const { id } = useParams()
    useEffect(()=>{
      setLoading(true)
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(() => setLoading(false))
    },[])

  return (
    <div className='containerMainDetail'>
      {loading ? <Loader /> :  <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
