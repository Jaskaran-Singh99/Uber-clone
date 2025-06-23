// import React from 'react'
// import { useContext } from 'react'
// import {UserDataContext} from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

// const UserProtection = ({children}) => {
//     const token = localStorage.getItem('token')
//     console.log(token)
//     const navigate = useNavigate()

//     useEffect(()=>{
//         if(!token){
//             navigate('/login')
//         }
//     }, [])
    

//   return (
//     <>
//     {children}
//     </>
//   )
// }

// export default UserProtection

import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtection = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
              // console.log(response.data)
                setUser(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtection