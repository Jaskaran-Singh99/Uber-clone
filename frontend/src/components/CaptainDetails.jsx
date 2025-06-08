import React from 'react'

const CaptainDetails = () => {
  return (
    <div className="h-2/5 p-5">
    <div className="flex items-center justify-between gap-3 m-3 ">
      <div className="flex items-center justify-start">
        <img
          className="h-12 w-12 rounded-full object-cover mr-3"
          src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          alt=""
        ></img>
        <h4 className="text-xl font-medium">Harsh Patel</h4>
      </div>
      <div className="">
        <h4 className="text-3xl font-semibold">20$</h4>
        <p className="font-medium text-xs text-gray-600">Earned</p>
      </div>
    </div>
    <div className="flex justify-center gap-5 items-start mt-4 pt-2 pb-2 rounded-xl bg-gray-100">
      <div className="text-center ">
        <i className="ri-timer-2-line  text-3xl font-medium"></i>
        <h5 className="text-xl font-medium mt-2">10.5</h5>
        <p className="text-lg font-thin text-gray-600">Hours online</p>
      </div>
      <div className="text-center">
        <i className="ri-speed-up-fill text-3xl font-medium"></i>
        <h5 className="text-xl font-medium mt-2">10.5</h5>
        <p className="text-lg font-thin text-gray-600">Hours online</p>
      </div>
      <div className="text-center">
        <i className="ri-booklet-line text-3xl font-medium"></i>
        <h5 className="text-xl font-medium mt-2">10.5</h5>
        <p className="text-lg font-thin text-gray-600">Hours online</p>
      </div>
    </div>
  </div>
  )
}

export default CaptainDetails