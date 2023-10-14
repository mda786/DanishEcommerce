import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Home from './pages/Home'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";

import { useSelector } from 'react-redux'
const App = () => {
  const user=useSelector(state=>state.user.currentUser)
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={user?<Home/>:<Login/>}/>
          <Route path='/products/:category' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={user?<Navigate to='/'/>:<Login/>}/>
          <Route path='/register' element={user?<Navigate to='/'/>:<Register/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App