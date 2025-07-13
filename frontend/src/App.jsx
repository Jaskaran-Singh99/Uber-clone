import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import CaptainLogin from '../src/pages/CaptainLogin.jsx'
import CaptainSignup from '../src/pages/CaptainSignup'
import UserLogin from '../src/pages/UserLogin'
import UserSignup from '../src/pages/UserSignup'
import UserProtection from './components/UserProtection'
import CaptainProtection from './components/CaptianProtection'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import UserLogout from './pages/UserLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Start></Start>} ></Route>
      <Route path='/home' element={<UserProtection><Home></Home></UserProtection>} ></Route>
      <Route path='/captain-riding' element={<CaptainRiding/>}></Route>
      <Route path='/riding' element={<Riding></Riding>}></Route>
      <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
      <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}> </Route>
      <Route path='/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
      <Route path='/captain-home' element={<CaptainProtection><CaptainHome></CaptainHome></CaptainProtection>}></Route>
      <Route path='/logout' element={<UserProtection><UserLogout></UserLogout></UserProtection>}></Route>
      <Route path='/captain-logout' element={<CaptainProtection><CaptainLogout></CaptainLogout></CaptainProtection>}></Route>
    

    </Routes>
  )
}

export default App
