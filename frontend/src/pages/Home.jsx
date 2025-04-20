import React, { useState } from "react";
import { motion } from "framer-motion";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const submitHandler = (e) => {
    e.target.preventDefault();
    console.log(pickup, destination);
  };
  return (
    <div className="h-screen relative">
      <img
        className="w-20 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      ></img>
      <div>
        <img
          className="h-screen w-screen object-cover"
          src="https://staticmapmaker.com/img/google-placeholder.png"
        ></img>
      </div>
      <div className="absolute  h-screen top-0 w-full flex flex-col justify-end rounded-lg">
        <div className="h-[30%] p-5 bg-white relative">
          <h3 className="text-2xl" onClick={()=>setIsPanelOpen(false)}><i className="ri-arrow-down-wide-line absolute top-6 right-5"></i></h3>
          <h4 className="font-semibold text-3xl ">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* <div className="line absolute w-1 h-16 top-[45%] bg-black left-10"></div> */}
            <input
              value={pickup}
              onClick={()=>setIsPanelOpen(true)}
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
            <button type="submit"></button>
          </form>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isPanelOpen ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[70%] bg-white "
        >
          <LocationSearchPanel></LocationSearchPanel>
        </motion.div>

      </div>
    </div>
  );
};

export default home;
