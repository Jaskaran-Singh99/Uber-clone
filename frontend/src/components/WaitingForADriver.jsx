import React from 'react'
import {motion} from 'framer-motion'
const WaitingForADriver = (props) => {

  return (
    <motion.div
    initial={{ height: "0%" }}
    animate={{ height: props.waitingForDriver ? "75%" : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="z-10 fixed bottom-0 bg-white px-4  w-full h-[80%] "
  >
    <h2 className="font-semibold text-2xl mb-4 text-center mt-4">
      Confirm OTP
    </h2>
    <div  className='flex flex-col justify-between items-center mb-5'>
        <img className="h-28  justify-center" src="https://thumbs.dreamstime.com/b/taxi-driver-man-car-cab-vector-illustration-flat-style-taxi-driver-man-car-cab-vector-illustration-114972324.jpg"></img>
        {/* <div>
            <h4 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h4>
            <h3 className='text-xl font-semibold -mb-1 -mt-1' >{props.ride?.captain.vehicle.plate}</h3>
            <p className='text-gray-400 text-sm'>Honda Civic, Corolla</p>
               <h3 className='text-xl font-semibold -mb-1 -mt-1' >{props.ride?.otp}</h3>
        </div> */}
    </div>
      <div>
        <h3 className="italic text-3xl text-center">"{props.ride?.otp}"</h3>
        <h2 className='text-lg my-3 font-thin text-center text-gray-600'>*Share OTP with the driver to begin your ride</h2>
        
      </div>

    <div className="w-full ml-4">
      <div className="flex items-center gap-5  mb-4">
        <i class="ri-user-shared-line text-2xl"></i>
        <div> 
          <h3 className="text-lg font-medium capitalize">{props.ride?.captain.fullname.firstname}</h3>
          <p className="text-gray-600 text-sm">
             Driver's Name
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5  mb-4">
        <i class="ri-parking-box-line text-2xl"></i>
        <div>
          <h3 className="text-lg font-medium">{props.ride?.captain.vehicle.plate}</h3>
          <p className="text-gray-600 text-sm">
              Plate no.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 mb-4">
        <i className="ri-currency-line text-2xl"></i>
        <div>
          <h3 className="text-lg font-medium"> {props.ride?.fare}$</h3>
          <p className="text-gray-600 text-sm">Cash</p>
        </div>
      </div>
    </div>
  
  </motion.div>
  )
}

export default WaitingForADriver