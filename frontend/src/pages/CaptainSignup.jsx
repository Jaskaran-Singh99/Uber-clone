import React, { useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CaptainSignup = () => {
   const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

 

  const submitHandler = async(e) => {
    e.preventDefault();
    const newCaptain = {
      email: email,
      password: password,
      fullname: { firstname: firstname, lastname: lastname },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain) 

      localStorage.setItem('captain', JSON.stringify(data.captain));
      localStorage.setItem('token', data.token)
    navigate('/captain-home')
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleType("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
      
  };
  return (
    
    <div className="p-7 flex flex-col justify-between h-screen">

      <form onSubmit={(e) => submitHandler(e)}>
        <img
          className="w-20 mb-3"
          src="https://pngimg.com/uploads/uber/uber_PNG24.png"
        ></img>
        <h3 className="text-xl mb-2 font-medium">What's your Name</h3>
        <div className="flex gap-4 mb-5">
          <input
            placeholder="First Name"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3"
          ></input>
          <input
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
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
        <h3 className="text-xl mb-5 font-medium">Vehicle Information</h3>
        <div className="flex gap-4 mb-4">
          <input
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3"
          ></input>
          <input
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            type="number"
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3 "
          ></input>
        </div>
        <div className="flex gap-4">
          <input
            placeholder="Plate Number"
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value);
            }}
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-xl placeholder:text-base mb-3"
          ></input>
          <select
            required
            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Moto</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full  text-xl placeholder:text-base mb-2 mt-4"
        >
          Register
        </button>

        <p className="text-center">
          Already a Captain?{" "}
          <Link to="/captain-login" className="text-blue-600 ">
            login
          </Link>
        </p>
      </form>
      <div>
        <p className="text-[10px] leading-tight text-grey">
          *By procceding you concent to get calls, Whatsapp or SMS messages
          including automated messages from Uber and its affiliates
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
