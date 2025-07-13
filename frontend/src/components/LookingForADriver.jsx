import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'

const LookingForADriver = ({lookingForADriver, setWaitingForDriver, pickup, destination, fare, vehicleType}) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: lookingForADriver ? "75%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-10 fixed bottom-0 bg-white px-4  w-full h-[70%] "
    >
      <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
        Looking for a Driver
      </h2>
      <div className="flex flex-col justify-between items-center mb-5 ">
        <img
          className="h-32"
          src="https://img.freepik.com/premium-vector/yellow-taxi-car-man-shirt-tie-taxi-driver-is-carrying-passenger-his-grandfather-front-view_531064-1749.jpg"
        ></img>
      </div>
      <div className="w-full ml-4">
        <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-2-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">L6X/4L3</h3>
            <p className="text-gray-600 text-sm">
              {pickup}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5  mb-4">
          <i className="ri-map-pin-user-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">Third Wave Coffee</h3>
            <p className="text-gray-600 text-sm">
              {destination}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-4">
          <i className="ri-currency-line text-xl"></i>
          <div>
            <h3 className="text-lg font-medium">{fare[vehicleType]}$</h3>
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div>
        <button onClick={()=>setWaitingForDriver(true)}>click me</button>
      </div>
    
    </motion.div>
  );
};

export default LookingForADriver;
