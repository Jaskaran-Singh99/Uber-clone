import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FinishRide = ({finishRide, setFinishRide}) => {
  return (
    <motion.div
    initial={{ height: "30%" }}
    animate={{ height: finishRide ? "70%" : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="z-10 fixed bottom-0 bg-white px-4  w-full h-[70%] "
  >
    <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
      New Ride Found!
    </h2>
    <i
      className="ri-arrow-down-wide-line absolute top-6 right-5 text-xl"
      onClick={() => setFinishRide(false)}
    ></i>

    <div>
      <div className="flex items-center mb-4 justify-between bg-slate-400 p-4 rounded-lg">
        <img
          className="h-14 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8Wu_1D29aOedgGsXeNh3dagpO76RBTTo3g&s"
        ></img>
        <h2 className="font-medium text-lg">Harshad Mehta</h2>
        <h5 className="font-bold">3.5km</h5>
      </div>
    </div>

    <div className="w-full">
      <div className="flex items-center gap-5  mb-4">
        <i className="ri-map-pin-2-fill text-xl"></i>
        <div>
          <h3 className="text-lg font-medium">L6X/4L3</h3>
          <p className="text-gray-600 text-sm">
            15 Beaverhall Road, Brampton, Ontario
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5  mb-4">
        <i className="ri-map-pin-user-fill text-xl"></i>
        <div>
          <h3 className="text-lg font-medium">Third Wave Coffee</h3>
          <p className="text-gray-600 text-sm">
            35 Lonestar Creascent, Brampton, Ontario
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 mb-4">
        <i className="ri-currency-line text-xl"></i>
        <div>
          <h3 className="text-lg font-medium">190$</h3>
          <p className="text-gray-600 text-sm">Cash</p>
        </div>
      </div>
      <form onSubmit={(e) => submitHandler(e)}>
      
        <Link
          className="w-full bg-green-600 p-2 rounded-lg text-white font-semibold text-lg mt-5 block text-center"
          to={"/captain-riding"}
        >
          Finish Ride
        </Link>
        
      </form>
    </div>
  </motion.div>
  )
}

export default FinishRide