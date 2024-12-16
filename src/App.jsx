import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import FooterComponent from './components/FooterComponent'
import { CartProvider } from './content/CartContext'
import CartView from './components/CartView'
import Error from './components/Error'

function App() {

  return (
    <div className='mainContainer'>
      <CartProvider>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos'/>}/>
            <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartView />}/>
            <Route path='*' element={<Error />}/>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
