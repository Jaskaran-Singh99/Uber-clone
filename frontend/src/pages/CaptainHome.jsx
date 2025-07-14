import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CaptainDetails from "../components/CaptainDetails";
import axios from "axios";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";
import LiveTracking from '../components/LiveTracking'

const CaptainHome = () => {
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const [ridePopUp, setRidePopUp] = useState(false);
  const [ride, setRide] = useState(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);
  console.log(captain);
  useEffect(() => {
    if (captain?._id && socket) {
      socket.emit("join", {
        userId: captain._id,
        userType: "captain",
      });

      // Using coords to get the live location of captain because we cannot directly get the live location of captain on browser
      // also I used "PORTS" functionality of vs code to access the location because most  of the  browsers do not allow to get the location

      const updateLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            socket.emit("update-location-captain", {
              userId: captain._id,
              location: {
                ltd: position.coords.latitude,
                lng: position.coords.longitude,
              },
            });
          });
        }
      };
      const locationInterval = setInterval(updateLocation, 10000);
      updateLocation();
    }
  }, []);

  // socket.on('new-ride', (data)=>{
  //   console.log(data)
  //   setRide(data)
  //   setRidePopUp(true)
  // })
  useEffect(() => {
    if (!socket) return;

    const handleNewRide = (data) => {
      console.log("📦 New ride received:", data);
      setRide(data);
      setRidePopUp(true);
    };

    socket.on("new-ride", handleNewRide);

    // Cleanup to avoid duplicate listeners
    return () => {
      socket.off("new-ride", handleNewRide);
    };
  }, [socket]);

  const confirmRide = async () => {
    if (!ride || !ride._id) {
      console.log("No ride to confirm");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

            rideId: ride._id,
            captainId: captain._id,


        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      setRidePopUp(false);
      setConfirmRidePopUp(true);
    } catch (err) {
      console.log(err); 
    }
  };

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
      <div className="h-2/5">
        {/* <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img> */}
        <LiveTracking></LiveTracking>
      </div>
      <CaptainDetails captain={captain}></CaptainDetails>
      <RidePopUp
        confirmRide={confirmRide}
        ridePopUp={ridePopUp}
        setRidePopUp={setRidePopUp}
        ride={ride}
        setConfirmRidePopUp={setConfirmRidePopUp}
      ></RidePopUp>
      <ConfirmRidePopUp
        setConfirmRidePopUp={setConfirmRidePopUp}
        confirmRidePopUp={confirmRidePopUp}
        setRidePopUp={setRidePopUp}
        ride={ride}
      ></ConfirmRidePopUp>
    </div>
  );
};

export default CaptainHome;
