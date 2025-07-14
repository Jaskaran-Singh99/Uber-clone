import React from "react";
import { motion } from "framer-motion";

const ConfirmRide = ({ confirmRidePanel, setConfirmRidePanel, setLookingForADriver, createRide, pickup, destination, fare, vehicleType}) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: confirmRidePanel ? "75%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} 
      className="z-10 fixed bottom-0 bg-white px-4  w-full h-[80%] "
    >
      <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
        Confirm vehicle
      </h2>
      <div className="flex flex-col justify-between items-center mb-5 ">
        <img className='h-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1738948739/assets/ae/21231e-5dac-4fe1-a4cd-6ada26479415/original/business-berline.png"></img>
      </div>
      <div className="w-full ml-4">
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
        
      </div>
      <button onClick={()=>{
        setLookingForADriver(true)
        // setConfirmRidePanel(false)
        createRide()
      }} 
        className="w-full bg-green-700 p-2 rounded-lg text-white font-semibold text-lg mt-5">Confirm</button>
    </motion.div>
  );
};

export default ConfirmRide;
