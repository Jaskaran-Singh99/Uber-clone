import React from "react";
import { motion } from "framer-motion";

const VehiclePanel = ({ vehiclePanel, setConfirmRidePanel, fare, createRide, setVehicleType}) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: vehiclePanel ? "75%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-10 fixed bottom-0 bg-white px-4  w-full h-[70%] "
    >
      <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
        Choose a vehicle
      </h2>
      <div onClick={()=>{setConfirmRidePanel(true), setVehicleType('car')}} className="flex items-center justify-between border-2 active:border-black rounded-xl p-2 w-full mb-3">
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-m">
            UberGo
            <span className="ml-3">
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable compact rides
          </p>
        </div>
        <div className="font-semibold text-xl ">{fare.car}$</div>
      </div>

      <div onClick={()=>{setConfirmRidePanel(true), setVehicleType('motorcycle')}} className="flex items-center justify-between border-2 active:border-black rounded-xl p-2 w-full mb-3">
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-m">
            Moto
            <span className="ml-3">
              <i className="ri-user-3-fill"></i>2
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <div className="font-semibold text-xl ">{fare.motorcycle}$</div>
      </div>

      <div onClick={()=>{setConfirmRidePanel(true), setVehicleType('auto')}} className="flex items-center justify-between border-2 active:border-black rounded-xl p-2 w-full mb-3">
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        ></img>
        <div className="w-1/2">
          <h4 className="font-medium text-m">
            Auto
            <span className="ml-3">
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <div className="font-semibold text-xl ">{fare.auto}$</div>
      </div>
    </motion.div>
  );
};

export default VehiclePanel;
