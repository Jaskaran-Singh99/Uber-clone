import React, { useState } from "react";
import { motion } from "framer-motion";
// import ConfirmRidePopUp from "./ConfirmRidePopUp";

const RidePopUp = ({confirmRide, ridePopUp, setRidePopUp, setConfirmRidePopUp, ride}) => {
  
  return (
    <motion.div
      initial={{ height: "30%" }}
      animate={{ height: ridePopUp ? "75%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-10 fixed bottom-0 bg-white px-4  w-full h-[70%] "
    >
      <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
        New Ride Found!
      </h2>
      <i
        className="ri-arrow-down-wide-line absolute top-6 right-5 text-xl"
        onClick={() => setRidePopUp(false)}
      ></i>

      <div>
        <div className="flex items-center mb-4 justify-between bg-slate-400 p-4 rounded-lg">
        <img className="h-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8Wu_1D29aOedgGsXeNh3dagpO76RBTTo3g&s"></img>
        <h2 className="font-medium text-lg">{ride?.user.fullname.firstname + " "+ride?.user.fullname.lastname}</h2>
        <h5 className="font-bold">3.5km</h5>
        </div>
     
      </div>
     

      <div className="w-full">
        <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-2-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">Location</h3>
            <p className="text-gray-600 text-sm">
              {ride?.pickup}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-user-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">Destination</h3>
            <p className="text-gray-600 text-sm">
              {ride?.destination}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-4">
          <i className="ri-currency-line text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.fare}$</h3>
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div>
        <button className="w-full bg-green-600 p-2 rounded-lg text-white font-semibold text-lg mt-5" onClick={() =>{confirmRide() ,setRidePopUp(false), setConfirmRidePopUp(true)} }>
          Accept
        </button>
        <button className="w-full bg-gray-300 p-2 rounded-lg font-semibold text-lg mt-2" onClick={() => setRidePopUp(false)}>
          Ignore
        </button>
      </div>
    </motion.div>
  );
};

export default RidePopUp;
