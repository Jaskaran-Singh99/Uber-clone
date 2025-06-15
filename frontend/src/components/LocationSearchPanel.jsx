import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }  
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };
  return (
  
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem.description)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem.description}</h4>
        </div>
      ))}
    </div>
  );
};

 // <div>
    //   {locationArray.map((i, index) => {
    //     return(
    //         <div key={index} onClick={()=>setVehiclePanel(true)} className="flex items-center justify-center p-3 mb-4 mr-2 ml-2 border-2 rounded-lg active:border-black border-gray-100 ">
    //       <h3 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded mr-3">
    //         <i className="ri-map-pin-fill text-xl"></i>
    //       </h3>
    //       <h4 className="font-medium">{i} </h4>
    //     </div>
    //     )
    //   })}
    // </div>

export default LocationSearchPanel;
