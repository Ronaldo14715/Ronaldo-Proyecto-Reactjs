
import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto]=useState({})
    const { id } = useParams()

    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db,"productos")
      const docRef = doc(collectionProd,id)
      getDoc(docRef)
      .then((res)=> setProducto({id: res.id,...res.data()}))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    },[])
    /*
    useEffect(()=>{
      setLoading(true)
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(() => setLoading(false))
    },[])
    */
  return (
    <div className='containerMainDetail'>
      {loading ? <Loader /> :  <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
