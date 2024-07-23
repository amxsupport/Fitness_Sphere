import React, { useState, useEffect } from 'react';
import SafetyGuide from './SafetyGuide';
import { Link } from "react-router-dom";
import { AiFillRobot } from 'react-icons/ai';

const ExerciseHome = () => {
  // const [injury, setInjury] = useState("");
  // const submitHandler = () => {
  //   // function for injury chat handler
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Link to="/chat/injury"><button className="fixed bottom-20 right-6 z-50 border-none outline-none bg-[#c759ff] text-white cursor-pointer p-4 rounded animate-bounce hover:scale-105 hover:bg-violet-600" title="Chat with ExerciseBot"><AiFillRobot /></button></Link >
      <div className="flex flex-col justify-center items-center gap-4 p-4">

        <SafetyGuide />
        <p className="text-red-500">*We recommend reading the safety guide before starting any exercise to prevent injuries.</p>
        <div>
          <Link to="/exercise/stretching">
            <button
              className="bg-[#c759ff] text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
              type="button"
            >
              Start Exercising
            </button>
          </Link>
        </div>
        <hr className='border border-gray-100 w-screen my-4' />

        { /* 
      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-72 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-zinc-600 text-md font-bold mb-2"
              htmlFor="grid-password"
            >
              Enter any earlier injury
            </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-md shadow-md focus:outline-none focus:shadow-violet-400 w-full ease-linear transition-all duration-150"
              value={injury}
              onChange={e => setInjury(e.target.value)}
            />
          </div>
        </div>
        
        <button
            className="bg-[#c759ff] text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
            type="button"
          onClick={submitHandler}
          >
            Submit
          </button>

        <p className="font-normal text-black text-lg">Response from openai!</p>
      </div>
      */}

      </div >
    </>
  )
}

export default ExerciseHome;