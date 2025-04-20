import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogout = () => {
  
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/users/captain-logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })

    return (
        <div>Captain Logout</div>
    )
  
}

export default CaptainLogout