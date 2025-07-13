import React, { useContext } from "react";
// import {CaptainDataContext} from '../context/CaptainContext'
import { useEffect } from "react";

const CaptainDetails = ({ captain }) => {
  // const {captain} = useContext(CaptainDataContext)

  return (
    <div className="h-2/5 p-5">
      <div className="flex  justify-evenly gap-3 m-3 ">
        <div className="flex items-center justify-evenly">
          <img
            className="h-14 w-14 rounded-full object-cover mr-3"
            src="https://images.unsplash.com/photo-1750535135659-7a0c8878a8fe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          ></img>

          <h4 className="text-xl font-medium capitalize ml-10">
            {captain?.fullname?.firstname + " " + captain?.fullname?.lastname}
          </h4>
        </div>
        {/* <div className="">
        <h4 className="text-3xl font-semibold">20$</h4>
        <p className="font-medium text-xs text-gray-600">Earned</p>
      </div> */}
      </div>
      {/* <h2 className='text-xl align-middle text-center '>Vehicle Details  <i class="ri-arrow-down-line"></i></h2> */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight mb-4 text-center">
        Vehicle Details <i class="ri-arrow-down-line"></i>
      </h2>

      <div className="flex justify-around gap-5 items-start mt-4 pt-2 pb-2 rounded-xl bg-gray-100">
        <div className="text-center ">
          {/* <i className="ri-timer-2-line  text-3xl font-medium"></i> */}
          <i class="ri-paint-brush-fill text-3xl font-medium"></i>
          <h5 className="text-xl font-medium mt-2 capitalize">
            {captain?.vehicle.color}
          </h5>
          <p className="text-lg font-thin text-gray-600">Color</p>
        </div>
        <div className="text-center">
          {/* <i className="ri-speed-up-fill text-3xl font-medium"></i> */}
          <i class="ri-group-line text-3xl font-medium"></i>
          <h5 className="text-xl font-medium mt-2">
            {captain?.vehicle.capacity}
          </h5>
          <p className="text-lg font-thin text-gray-600">Capacity</p>
        </div>
        <div className="text-center">
          {/* <i className="ri-booklet-line text-3xl font-medium"></i> */}
          <i class="ri-car-fill  text-3xl font-medium"></i>
          <h5 className="text-xl font-medium mt-2 capitalize">
            {captain?.vehicle.vehicleType}
          </h5>
          <p className="text-lg font-thin text-gray-600">Type</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
