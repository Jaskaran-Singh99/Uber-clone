import React, { useContext, useState } from "react";
import {UserDataContext} from '../context/UserContext'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const userSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [firstname, setFirstname] = useState("")
  const [lastname ,setLastname]= useState("")


  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email, 
      password: password,
        fullname:{
          firstname:firstname,
          lastname:lastname
        } 
      }
  
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201){
      const data = response.data
      setUser(user.data)
      localStorage.setItem('token', data.token)
      navigate('/home')

    }
    

    setEmail("");
    setPassword("");
    setFirstname("")
    setLastname("")
   

   
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <form onSubmit={(e) => submitHandler(e)}>
      <img className='w-20 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'></img>
        <h3 className="text-xl mb-2 font-medium">What's your Name</h3>
        <div className="flex gap-4 mb-5">
          <input
            placeholder="First Name"
            value={firstname}
            onChange={(e)=>{setFirstname(e.target.value)}}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3"
          ></input>
          <input
            placeholder="Last Name"
            value={lastname}
            onChange={(e)=>{setLastname(e.target.value)}}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3"
          ></input>
        </div>
        <h3 className="text-xl mb-5 font-medium">What's your email</h3>
        <input
          required
          type="email"
          value={email}
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border text-xl placeholder:text-base mb-7"
        ></input>
        <h3 className="text-xl mb-5 font-medium">Enter Password</h3>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border text-xl placeholder:text-base mb-7"
        ></input>
        <button
          type="submit"
          className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full  text-xl placeholder:text-base mb-2"
        >
          Register
        </button>
         

        <p className="text-center">
          Already as User?{" "}
          <Link to="/login" className="text-blue-600 ">
            Register
          </Link>
        </p>
      </form>
      <div>
        <p className="text-[10px] leading-tight text-grey">*By procceding you concent to get calls, Whatsapp or SMS messages including automated messages from Uber and its affiliates</p>
      </div>
    </div>
  );
};

export default userSignup;
