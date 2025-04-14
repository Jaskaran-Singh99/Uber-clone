import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen  pt-8 flex justify-between flex-col w-full bg-cover bg-[url(https://img.freepik.com/free-vector/taxi-app-concept_23-2148493693.jpg?t=st=1744314642~exp=1744318242~hmac=6282a927f3e16bd20b56fd593ed291becc1e1b5f9a7075a31375c7c91f70d1ef&w=900)]' >
        <img className='w-20 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'></img>
        <div className='bg-white py-10 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to={'/login'} className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
