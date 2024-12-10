
import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)
    
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const restar = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }

    const onAddHandler = ()=>{
        onAdd(count)
    }
  return (
    <div className='detailBodyControles'>
        <div className='detailBodyStock'>
            <button className='btnRestar' onClick={restar} >-</button>
            <span >{count}</span>
            <button className='btnSumar'  onClick={sumar}>+</button>
        </div>
        <div className='detailBodyComprar'>
            <button className='btnComprar' onClick={onAddHandler} disabled={stock === 0 || count === 0}>Comprar</button>
        </div>
        
        
    </div>
    
  )
}

export default ItemCount
