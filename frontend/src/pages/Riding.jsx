import React, { useContext } from "react";
import {motion} from 'framer-motion'
import {Link, useLocation} from 'react-router-dom'
import {SocketContext} from '../context/SocketContext'
import { useNavigate } from "react-router-dom";

const Riding = () => {
  const location = useLocation()
  const {ride } = location.state || {}  // get ride data
  const {socket} = useContext(SocketContext)
  const navigate = useNavigate()

  socket.on('ride-ended', ()=>{
    navigate('/home')
  })
  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img>
      </div>
      <div>
        <motion.div
        //   initial={{ height: "0%" }}
        //   animate={{ height:  ? "75%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="z-10  h-1/2   bg-white px-4  w-full  "
        >
          <div className="flex items-center justify-between mt-6 mb-6">
            <img
              className="h-24"
              src="https://thumbs.dreamstime.com/b/taxi-driver-man-car-cab-vector-illustration-flat-style-taxi-driver-man-car-cab-vector-illustration-114972324.jpg"
            ></img>
            <div>
              <h4 className="text-lg font-medium ">{ride?.captain.fullname.firstname}</h4>
              <h3 className="text-xl font-semibold -mb-1 -mt-1">{ride?.captain.vehicle.plate}</h3>
              <p className="text-gray-400 text-sm">Honda Civic, Corolla</p>
            </div>
          </div>

          <div className="w-full ml-4">
            <div className="flex items-center gap-5  mb-4">
              <i className="ri-map-pin-2-fill text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">L6X/4L3</h3>
                <p className="text-gray-600 text-sm">
                {ride?.pickup}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5  mb-4">
              <i className="ri-map-pin-user-fill text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">Third Wave Coffee</h3>
                <p className="text-gray-600 text-sm">
                  {ride?.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mb-4">
              <i className="ri-currency-line text-xl"></i>
              <div>
                <h3 className="text-lg font-medium">{ride?.fare}</h3>
                <p className="text-gray-600 text-sm">Cash</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-green-700 p-2 rounded-lg text-white font-semibold text-lg mt-5">Make a Payment</button>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Riding;
