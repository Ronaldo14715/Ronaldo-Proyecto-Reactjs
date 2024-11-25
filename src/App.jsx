import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos'/>}/>
          <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
  )
}

export default App
