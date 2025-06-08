import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForADriver from "../components/LookingForADriver";
import WaitingForADriver from "../components/WaitingForADriver";

const home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [lookingForADriver, setLookingForADriver] = useState(false)
  const [waitingForADriver, setWaitingForADriver] = useState(false)

  const submitHandler = (e) => {
    e.target.preventDefault();
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      ></img>
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img>
      </div>
      <div className="absolute  h-screen top-0 w-full flex flex-col justify-end rounded-lg">
        <div className="h-[30%] p-5 bg-white relative">
          <h3 className="text-2xl" onClick={() => {setIsPanelOpen(false) , setVehiclePanel(false), setConfirmRidePanel(false) ,setLookingForADriver(false) , setWaitingForADriver(false)}}>
            <i className="ri-arrow-down-wide-line absolute top-6 right-5"></i>
          </h3>
          <h4 className="font-semibold text-3xl ">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* <div className="line absolute w-1 h-16 top-[45%] bg-black left-10"></div> */}
            <input
              value={pickup}
              onClick={() => setIsPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-3 mt-4"
              placeholder="Add a pickup location"
              type="text"
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              placeholder="Enter a destination"
              type="text"
            />
            {/* <button type="submit"></button> */}
          </form>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isPanelOpen ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[70%] bg-white "
        >
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
          ></LocationSearchPanel>
        </motion.div>
      </div> 
      <VehiclePanel vehiclePanel={vehiclePanel} setConfirmRidePanel={setConfirmRidePanel}></VehiclePanel>
      <ConfirmRide confirmRidePanel={confirmRidePanel} setLookingForADriver={setLookingForADriver}></ConfirmRide>
      <LookingForADriver lookingForADriver={lookingForADriver} setWaitingForADriver={setWaitingForADriver}></LookingForADriver>
      <WaitingForADriver waitingForADriver={waitingForADriver}></WaitingForADriver>
    </div>
  );
};

export default home;
