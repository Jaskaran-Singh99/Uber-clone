import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useContext, useEffect } from "react";
import {CaptainDataContext} from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";

const CaptainHome = () => {

  const {socket} = useContext(SocketContext)
  const {captain} = useContext(CaptainDataContext)
  
  useEffect(() => {
    if (captain?._id && socket) {
      socket.emit('join', {
        userId: captain._id,
        userType: 'captain',
      });

      // Using coords to get the live location of captain because we cannot directly get the live location of captain on browser
      // also I used "PORTS" functionality of vs code to access the location because I ton of browser do not allow to get the location
      const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
          }
        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()
        }
  }, [captain, socket]);

  
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
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
      <div className="h-3/5">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img>
      </div>
     <CaptainDetails captain={captain}></CaptainDetails>
     <RidePopUp  setConfirmRidePopUp={setConfirmRidePopUp}></RidePopUp>
     <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} confirmRidePopUp={confirmRidePopUp}></ConfirmRidePopUp>
    
    </div>
  );
};

export default CaptainHome;
