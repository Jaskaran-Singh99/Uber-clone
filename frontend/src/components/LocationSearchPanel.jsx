import React from "react";

const LocationSearchPanel = ({setVehiclePanel}) => {
  const locationArray = [
    "35 Lonestart Crescent, Brampton, Ontario",
    "15 Beaverhall Road, Brampton, Ontario",
    "Queens street, Surrey, British Coloumbia",
  ];
  return (
    <div>
      {locationArray.map((i, index) => {
        return(
            <div key={index} onClick={()=>setVehiclePanel(true)} className="flex items-center justify-center p-3 mb-4 mr-2 ml-2 border-2 rounded-lg active:border-black border-gray-100 ">
          <h3 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded mr-3">
            <i className="ri-map-pin-fill text-xl"></i>
          </h3>
          <h4 className="font-medium">{i} </h4>
        </div>
        )
      })}
    </div>
  );
};

export default LocationSearchPanel;
