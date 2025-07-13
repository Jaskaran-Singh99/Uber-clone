import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {}; // get ride data
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <LiveTracking></LiveTracking>
      </div>
      <div>
        <motion.div
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="z-10  h-1/2   bg-white px-4  w-full  "
        >
          <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
            Reached your Destination?
          </h2>
          <div className="flex flex-col justify-between items-center mb-5">
            <img
              className="h-44  justify-center"
              src="https://thumbs.dreamstime.com/b/taxi-driver-man-car-cab-vector-illustration-flat-style-taxi-driver-man-car-cab-vector-illustration-114972324.jpg"
            ></img>
            <button className="w-full bg-green-700 p-2 rounded-lg text-white font-semibold text-lg mt-5">
              Make a Payment
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Riding;
