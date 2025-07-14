import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const ConfirmRidePopUp = ({ confirmRidePopUp, setConfirmRidePopUp, ride }) => {

  const navigate = useNavigate()
  const [otp, setOtp] = useState('')


   const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            setConfirmRidePopUp(false)
            // setRidePopup(false) using the state to pass the data to the other page 
            navigate('/captain-riding', { state: { ride: ride } }) 
        }


    }

  return (
    <motion.div
      initial={{ height: "30%" }}
      animate={{ height: confirmRidePopUp ? "100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-10 fixed bottom-0 bg-white px-4  w-full h-[80%] "
    >
      <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
        Enter OTP to confirm!
      </h2>
      <i
        className="ri-arrow-down-wide-line absolute top-6 right-5 text-xl"
        onClick={() => setConfirmRidePopUp(false)}
      ></i>

      <div>
        <div className="flex items-center mb-4 justify-between bg-slate-400 p-4 rounded-lg">
          <img
            className="h-14 rounded-full"
            src="https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <h2 className="font-medium text-lg">{ride?.user.fullname.firstname}</h2>
          <h5 className="font-bold">3.5km</h5>
        </div>
      </div>

      <div className="w-full">
        {/* <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-2-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">L6X/4L3</h3>
            <p className="text-gray-600 text-sm">
              {ride?.pickup}
            </p>
          </div>
        </div> */}
         <div className="flex items-center gap-5  mb-4">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">Pickup Location</h3>
                <p className="text-gray-600 text-sm">{ride?.pickup}</p>
            </div>
        </div>
        {/* <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-user-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">Third Wave Coffee</h3>
            <p className="text-gray-600 text-sm">
              {ride?.destination}
            </p>
          </div>
        </div> */}
         <div className="flex items-center gap-5  mb-4">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">Destination</h3>
                <p className="text-gray-600 text-sm">{ride?.destination}</p>
            </div>
        </div>
        {/* <div className="flex items-center gap-5 mb-4">
          <i className="ri-currency-line text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.fare}$</h3> 
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div> */}
          <div className="flex items-center gap-5 mb-4">
            <i className="ri-currency-line text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">{ride?.fare}$</h3>
                <p className="text-gray-600 text-sm">Price</p>
            </div>
        </div>
        <form onSubmit={submitHandler}>
          <input
            placeholder="Enter OTP"
            type="text"
            className="p-5 w-full border bg-[#eee] rounded-lg text-lg mt-10"
            onChange={(e)=>setOtp(e.target.value)}
            value={otp}
          ></input>
          {/* <Link
            className="w-full bg-green-600 p-2 rounded-lg text-white font-semibold text-lg mt-5 block text-center"
            to={"/captain-riding"}
          >
            Confirm
          </Link> */}
          <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
          <button
            className="w-full bg-red-600 p-2 rounded-lg font-semibold text-lg mt-2 text-white font-mono"
            onClick={() => setConfirmRidePopUp(false)}
          >
            Cancel
          </button>
        </form>
      </div>
       {/* <div className="w-full ml-4">
         <div className="flex items-center gap-5 mb-4">
           <i class="ri-subway-fill text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">Vehicle Type</h3>
                <p className="text-gray-600 text-sm capitalize">{vehicleType}</p>
            </div>
        </div> 

        <div className="flex items-center gap-5  mb-4">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">Pickup Location</h3>
                <p className="text-gray-600 text-sm">{pickup}</p>
            </div>
        </div>
        <div className="flex items-center gap-5  mb-4">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">Destination</h3>
                <p className="text-gray-600 text-sm">{destination}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 mb-4">
            <i className="ri-currency-line text-2xl"></i>
            <div>
                <h3 className="text-lg font-medium">{fare[vehicleType]}$</h3>
                <p className="text-gray-600 text-sm">Price</p>
            </div>
        </div>
        
      </div> */}
    </motion.div>
  );
};

export default ConfirmRidePopUp;
