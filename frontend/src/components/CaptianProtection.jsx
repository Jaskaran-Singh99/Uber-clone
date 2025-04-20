import React, { useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const CaptainProtection = ({children}) => {
    const {captain ,setCaptain} = useContext(CaptainDataContext)
    const token = localStorage.getItem('token')
    console.log(token)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }
    }, [])
    

  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtection