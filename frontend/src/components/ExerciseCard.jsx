import React, {useState} from 'react';

const ExerciseCard = ({exercise, index}) => {

  return (
    <div className="flex flex-col w-full m-4 p-4 md:max-w-[640px] bg-gray-200 shadow-md rounde-md gap-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-auto items-center text-center py-4 px-8 gap-4">

        <div className="p-2 shadow-md rounded-md aspect-square w-full">
          <img src={exercise.link} alt={exercise.name} className="" />
        </div>
        
        <div className="flex flex-col justify-center rounded-full bg-[#c759ff] aspect-square w-64 p-2 mx-4 border-8 shadow-md border-white border-solid">
          {exercise.sets!=0?<><div>
            <p className="text-lg tracking-wide text-white">{"Sets: "}{exercise.sets}</p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-white">{"Reps: "}{exercise.reps}</p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-white">{"Rest: "}{exercise.rest}</p>
          </div></>:<p className="text-3xl tracking-wide text-white">{"10 - 30 minute session"}</p>}
        </div>
        
      </div>
      <div className="rounded-lg p-4 bg-[#c759ff]">
        <p className="text-2xl font-bold tracking-wider text-white">{exercise.name}</p>
        {exercise.steps && exercise.steps[0] != "" && exercise.steps.map((step, id) => {
          return (
            <div key={id}>
            <p className="text-md tracking-wide text-white">{id + 1}{". "}{step}</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExerciseCard;