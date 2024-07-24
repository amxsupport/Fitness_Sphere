import React, { useState, useEffect } from "react";

import ExerciseCard from "../../components/ExerciseCard";
import { workouts } from "../../workoutsData";
import { Link, useNavigate } from "react-router-dom";\
import { useSearchParams } from "react-router-dom";

const Stretching = () => {
    let [searchParams] = useSearchParams();
    const nextPage = searchParams.get("nextPage");
    
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const exercises = workouts.stretching;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(
            currentIndex + 1 >= exercises.length
                ? currentIndex
                : currentIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1 < 0 ? currentIndex : currentIndex - 1);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold tracking-wide">
                    FitSphere Training
                </h2>
                <p className="text-xl font-semibold">
                    Lets start with some stretching exercises.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <ExerciseCard
                    exercise={exercises[currentIndex]}
                    index={currentIndex}
                />
                <div className="max-w-[640px] flex flex-row justify-between gap-20 m-2 p-2">
                    <button
                        className="bg-violet-500 text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-violet-500 text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
                <div className="mb-4">
                    {currentIndex >= exercises.length - 1 ? (
                        <Link to={`/exercise/${nextPage}`}>
                            <button
                                className="bg-violet-500 text-white active:bg-violet-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Start a Workout
                            </button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Stretching;
