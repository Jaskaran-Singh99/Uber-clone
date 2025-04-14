import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import CaptainLogin from '../src/pages/captainLogin'
import CaptainSignup from '../src/pages/CaptainSignup'
import UserLogin from '../src/pages/UserLogin'
import UserSignup from '../src/pages/UserSignup'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
      <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}> </Route>
      <Route path='/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/signup' element={<UserSignup></UserSignup>}></Route>

    </Routes>
  )
}

export default App
