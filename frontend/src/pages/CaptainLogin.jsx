import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
   const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData]= useState({})
  
    const submitHandler = (e)=>{
      e.preventDefault()
      setCaptainData({email:email, password:password})
      console.log(captainData)
      
      setEmail('')
      setPassword('')
    }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <form  onSubmit={(e)=>submitHandler(e)}>
      <img className='w-20 mb-3' src='https://pngimg.com/uploads/uber/uber_PNG24.png'></img>
        <h3 className="text-xl mb-2 font-medium">What's your email</h3>
        <input required 
          type="email" 
          value={email}
          placeholder="email@example.com"
          onChange={(e)=>setEmail(e.target.value)}
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border text-xl placeholder:text-base mb-7"
        ></input>
        <h3 className="text-xl mb-2 font-medium">Enter Password</h3>
        <input
          required
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border text-xl placeholder:text-base mb-7"
        ></input>
        <button type="submit" className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full  text-xl placeholder:text-base mb-2">Login</button>

        <p className="text-center">Wanna join the fleet?  <Link to='/captain-signup' className="text-blue-600 ">Register as a Captain</Link></p>
       
      </form>
      <div>
        <Link to='/login' className="bg-[#d5622d] flex flex-center justify-center text-white font-semibold rounded px-4 py-2 w-full  text-xl placeholder:text-base mb-7">Sign in as User</Link>
      </div>
    </div>
  );
}

export default CaptainLogin