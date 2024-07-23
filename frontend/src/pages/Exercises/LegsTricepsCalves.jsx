import React, {useState, useEffect} from 'react';

import ExerciseCard from '../../components/ExerciseCard';
import { workouts } from '../../workoutsData';

const LegsTricepsCalves = () => {
  const exercises = workouts.legsTricepsCalves;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1 >= exercises.length ? currentIndex : currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? currentIndex : currentIndex - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <ExerciseCard exercise={exercises[currentIndex]} index={currentIndex} />
      <div className="max-w-[640px] flex flex-row justify-between gap-20 m-2 p-2">
        <button
                className="bg-[#c759ff] text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                type="button"
                onClick={handlePrevious}
              >
                Previous
        </button>
<button
                className="bg-[#c759ff] text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                type="button"
                onClick={handleNext}
              >
                Next
        </button>
        
      </div>
    </div>
  )
}

export default LegsTricepsCalves;