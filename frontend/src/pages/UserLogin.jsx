import React, { useState } from "react";
import { Link } from "react-router-dom";

const userLogin = () => {
  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData]= useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setUserData({email:email, password:password})
    console.log(userData)
    
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <form  onSubmit={(e)=>submitHandler(e)}>
      <img className='w-20 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'></img>
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

        <p className="text-center">New Here?  <Link to='/signup' className="text-blue-600 ">Create new account</Link></p>
       
      </form>
      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex flex-center justify-center text-white font-semibold rounded px-4 py-2 w-full  text-xl placeholder:text-base mb-7">Sign in as captain</Link>
      </div>
    </div>
  );
};

export default userLogin;
