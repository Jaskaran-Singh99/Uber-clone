import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForADriver from "../components/LookingForADriver";
import WaitingForADriver from "../components/WaitingForADriver";
import {useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import {UserDataContext} from "../context/UserContext";
import axios from 'axios'
import LiveTracking from "../components/LiveTracking";


const home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [lookingForADriver, setLookingForADriver] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [vehicleType, setVehicleType]= useState(null)
  const [fare, setFare] = useState([])
  const [ride , setRide] = useState(null)
   const [ vehicleFound, setVehicleFound ] = useState(false)
   const navigate = useNavigate()
  
  
 
      
   const { socket } = useContext(SocketContext)
    const {user} = useContext(UserDataContext)
     useEffect(() => {
      console.log(user)
        socket.emit("join", { userType: "user", userId: user._id })
    }, [  ])

    socket.on('ride-confirmed', ride => {


        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })
    socket.on('ride-started', ride => {
        console.log("ride")
        setWaitingForDriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })

       const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch(err) {
            console.log(err)
        }
    }

      const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch(err){
            throw new Error(err)
        }
    }


  const submitHandler = (e) => {
    e.target.preventDefault();
  };


   async function findTrip() {
        setVehiclePanel(true)
        setIsPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/getfare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)
        console.log(response.data)


    }

  async function createRide() {
       try{
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response)
       }
       catch(err){
        console.log(err)
       }

    }

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      ></img>
      <div>
        {/* <img
          className="h-screen w-screen object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        ></img> */}
        <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <LiveTracking />
            </div>
      </div>
      <div className="absolute  h-screen top-0 w-full flex flex-col justify-end rounded-lg">
        <div className="h-[35%] p-5 bg-white relative">
          <h3 className="text-2xl" onClick={() => {setIsPanelOpen(false) , setVehiclePanel(false), setConfirmRidePanel(false) ,setLookingForADriver(false) , setWaitingForDriver(false)}}>
            <i className="ri-arrow-down-wide-line absolute top-6 right-5"></i>
          </h3>
          <h4 className="font-semibold text-3xl ">Find Trip</h4>
         
          <form onSubmit={(e) => submitHandler(e)}>
          
            {/* <div className="line absolute w-1 h-16 top-[45%] bg-black left-10"></div> */}
            <input
              value={pickup}
              
              onClick={() =>{  setIsPanelOpen(true) 
                setActiveField('pickup')}}
              onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-3 mt-4"
              placeholder="Add a pickup location"
              type="text"
            />
            <input
              value={destination}
              onClick={()=>setActiveField('destination')}
              // onChange={(e) => setDestination(e.target.value)}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              placeholder="Enter a destination"
              type="text"
            />
            {/* <button type="submit"></button> */}
          </form>
             <button onClick={()=>{findTrip()
              createRide()
             }} className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full">Find Trip</button>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isPanelOpen ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[70%] bg-white "
        >
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}

          ></LocationSearchPanel>
        </motion.div>
      </div> 
      <VehiclePanel setVehicleType={setVehicleType} createRide={createRide} fare={fare} vehiclePanel={vehiclePanel} setConfirmRidePanel={setConfirmRidePanel}></VehiclePanel>
      <ConfirmRide fare={fare} vehicleType={vehicleType} pickup={pickup} destination={destination} createRide={createRide} setConfirmRidePanel={setConfirmRidePanel} confirmRidePanel={confirmRidePanel} setLookingForADriver={setLookingForADriver}></ConfirmRide>
      <LookingForADriver waitingForDriver={waitingForDriver} fare={fare} vehicleType={vehicleType} pickup={pickup} destination={destination} lookingForADriver={lookingForADriver} setWaitingForDriver={setWaitingForDriver}></LookingForADriver>
      <WaitingForADriver 
      ride={ride}
      waitingForDriver={waitingForDriver}
        setVehicleFound={setVehicleFound}
        setWaitingForDriver={setWaitingForDriver}
        setRide={setRide}
      ></WaitingForADriver>
    </div>
  );
};

export default home;
