import React, {useState, useEffect} from "react"
import { getProducts } from "../mock/data"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from "./Loader"

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res) =>{
            if(category){
                setProducts(res.filter((prod) => prod.category === category))
            }else{
                setProducts(res)
            }
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[category])
    return(
        <div className="containerMain">
            {loading ? <Loader /> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer