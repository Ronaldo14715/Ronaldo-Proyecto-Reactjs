import React, { useContext, useState } from 'react'
import { CartContext } from '../content/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'


const CheckOut = () => {
    const [user,setUser] = useState({})
    const [validateEmail,setValidateEmail] = useState('')
    const [order, setOrder] = useState('')
    const {cart, cartTotal, clear} = useContext(CartContext)
    const userData = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert('los campos son obligatorios')
        }else if(user.email !== validateEmail){
            alert('Los mails deben ser iguales')
        }else{
            let order = {
                user: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db,"orders")
            addDoc(ventas,order)
            .then((res) => {
                cart.forEach((item) =>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc) =>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
                setOrder(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
  return (
    <div>
        {order !== '' ? <div>
            <h4>Generaste bien tu orden</h4>
            <h5>El id es : {order}</h5>
            <Link to='/'>Volver al home</Link>
        </div>
        :
        <div>
            <h4>Completa tus datos</h4>
            <form onSubmit={finalizarCompra}>
                <input type="text" name='name' placeholder='Ingrese su nombre' onChange={userData}/>
                <input type="text" name='lastname' placeholder='Ingrese su apellido' onChange={userData}/>
                <input type="text" name='address' placeholder='Ingrese su direccion' onChange={userData}/>
                <input type="email" name='email' placeholder='Ingrese su correo' onChange={userData}/>
                <input type="email" name='second-email' placeholder='Repita su correo' onChange={(e) => setValidateEmail(e.target.value)}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>}
    </div>
  )
}

export default CheckOut