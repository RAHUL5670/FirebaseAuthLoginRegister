import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Componets/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './Pages/registration/Login'
import Signup from './Pages/registration/Signup'
import { ProtectedeRoute } from './protectRoute/ProtectedRoute'
function App() {


  return (
    <>
     <div className='App'>
       <Provider store={store}>
       <BrowserRouter>
           <Navbar></Navbar>
          <Routes>

            {/* here we use protect home page only show authticated user   */}
            <Route path='/' element={ <ProtectedeRoute><Home></Home> </ProtectedeRoute>}>
           
            </Route>

            
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Signup></Signup>}></Route>
          </Routes>
          </BrowserRouter>
       </Provider>
     </div>
       
    </>
  )
}

export default App
