import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const WorkoutCard = ({ name, description, url, icon }) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="w-full bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500 m-2 p-2 hover:text-red-500">
            <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                <div className="rounded-full bg-violet-500 p-4">
                    <img src={icon} alt={name} className="h-10 w-10" />
                </div>
                <h3 className="my-2 text-black text-md font-bold tracking-widest title-font mb-1 uppercase pt-4">
                    {name}
                </h3>
                <p className="flex justify-center">{description}</p>
                <button
                    className="min-w-[40px] text-white bg-violet-500 hover:scale-105 ease-in-out duration-300 p-2 m-4 rounded-lg shadow-md shadow-violet-700"
                    onClick={() => {
                        // add the nextPage prop as a variable to the navigate
                        navigate(`/exercise/stretching?nextPage=${url}`);
                    }}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default WorkoutCard;
