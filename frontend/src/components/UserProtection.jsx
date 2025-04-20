import React from 'react'
// import { useContext } from 'react'
// import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserProtection = ({children}) => {
    const token = localStorage.getItem('token')
    console.log(token)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    }, [])
    

  return (
    <>
    {children}
    </>
  )
}

export default UserProtection