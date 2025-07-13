import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
    const [finishRide, setFinishRide] = useState(false)
    const location = useLocation()
    const rideData = location.state?.ride
  return (
    <div className="h-screen">
    <div className="fixed p-3 top-0 flex w-1/2">
      <img className="w-16 " src="https://pngimg.com/d/uber_PNG24.png"></img>
      <Link
        to={"/home"}
        className="fixed top-3 right-3 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-4/5">
      <img
        className=" w-full h-full object-cover"
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
      ></img>
    </div>
    <div className="h-1/5 bg-slate-500 flex justify-evenly items-center">
    <h3 className="font-bold text-lg">4 KM Away</h3>
    <button className=" bg-green-700  rounded-lg text-white font-semibold text-lg p-3 px-10" onClick={()=>setFinishRide(true)}>Confirm</button>
    </div>
    <FinishRide rideData={rideData} finishRide={finishRide} setFinishRide={setFinishRide}></FinishRide>

  
  </div>
  )
}

export default CaptainRiding