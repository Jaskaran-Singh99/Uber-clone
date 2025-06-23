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
//  useEffect(() => {
//         if (!token) {
//             navigate('/captain-login')
//         }

//         axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }).then(response => {
//             if (response.status === 200) {
//                 setCaptain(response.data.captain)
//                 setIsLoading(false)
//             }
//         })
//             .catch(err => {

//                 localStorage.removeItem('token')
//                 navigate('/captain-login')
//             })
//     }, [ token ])

    

  return (
    <>
    {children}
    </>
  )
}
// const CaptainProtection = ({children}) => {

//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()
//     const { captain, setCaptain } = useContext(CaptainDataContext)
//     const [ isLoading, setIsLoading ] = useState(true)




   
    

//     if (isLoading) {
//         return (
//             <div>Loading...</div>
//         )
//     }



//     return (
//         <>
//             {children}
//         </>
//     )
// }


export default CaptainProtection