import React from 'react'
import {motion} from 'framer-motion'
const WaitingForADriver = ({waitingForADriver}) => {
  return (
    <motion.div
    initial={{ height: "0%" }}
    animate={{ height: waitingForADriver ? "75%" : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="z-10 fixed bottom-0 bg-white px-4  w-full h-[70%] "
  >
    {/* <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
      Looking for a Driver
    </h2> */}
    <div  className='flex items-center justify-between mt-6 mb-6'>
        <img className="h-24" src="https://thumbs.dreamstime.com/b/taxi-driver-man-car-cab-vector-illustration-flat-style-taxi-driver-man-car-cab-vector-illustration-114972324.jpg"></img>
        <div>
            <h4 className='text-lg font-medium '>Jaskaran Singh</h4>
            <h3 className='text-xl font-semibold -mb-1 -mt-1' >PB404 TRC</h3>
            <p className='text-gray-400 text-sm'>Honda Civic, Corolla</p>
        </div>
    </div>

    <div className="w-full ml-4">
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
    </div>
  
  </motion.div>
  )
}

export default WaitingForADriver