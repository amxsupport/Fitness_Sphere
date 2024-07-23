import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { workouts } from "../../workoutsData";

import Leg from "../../assets/exercise/leg.png";
import Chest from "../../assets/exercise/chest.png";
import Muscle from "../../assets/exercise/muscle.png";
import Heart from "../../assets/exercise/heart-beat.png";

import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiWeightScale } from "react-icons/gi";
import { FaWalking } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MExercise = () => {
    const [update, setUpdate] = useState(1);
    const navigate = useNavigate();
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
        });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.addEventListener("resize", setDimension);
        if (screenSize.dynamicWidth > 575) {
            navigate("/exercise/pick-a-workout");
        }
        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [screenSize]);
    return (
        <section className="text-gray-600">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-bold tracking-wide">
                    FitSphere Training
                </h2>
                <p className="text-xl font-semibold">Pick a workout</p>
            </div>

            <Carousel>
                <div className="md:w-full bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500 m-2 p-2 hover:text-red-500">
                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                        <div className="rounded-full bg-[#c759ff] p-4">
                            <img
                                src={Chest}
                                alt="Legs, Triceps, Calves"
                                className="h-10 w-10"
                            />
                        </div>
                        <h3 className="my-2 text-black text-md font-bold tracking-widest title-font mb-1 uppercase pt-4">
                            Chest, Abs, Back
                        </h3>
                        <p className="flex justify-center">
                            This workout focuses on strengthening and toning
                            your chest, abdominal and back muscles, giving you a
                            well rounded and defined physique.
                        </p>
                        <button
                            className="min-w-[40px] text-white bg-[#c759ff] hover:scale-105 ease-in-out duration-300 p-2 m-4 rounded-lg shadow-md shadow-violet-700"
                            onClick={() => {
                                navigate("/exercise/chest-abs-back");
                            }}
                        >
                            Start
                        </button>
                    </div>
                </div>

                <div className="md:w-full bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500 m-2 p-2 hover:text-red-500">
                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                        <div className="rounded-full bg-[#c759ff] p-4">
                            <img
                                src={Leg}
                                alt="Legs, Triceps, Calves"
                                className="h-10 w-10"
                            />
                        </div>
                        <h3 className="my-2 text-black text-md font-bold tracking-widest title-font mb-1 uppercase pt-4">
                            Legs, Triceps, Calves
                        </h3>
                        <p className="flex justify-center">
                            This routine is designed to challenge and tone your
                            lower body, upper arms and lower legs.
                        </p>
                        <button
                            className="min-w-[40px] text-white bg-[#c759ff] hover:scale-105 ease-in-out duration-300 p-2 m-4 rounded-lg shadow-md shadow-violet-700"
                            onClick={() => {
                                navigate("/exercise/legs-triceps-calves");
                            }}
                        >
                            Start
                        </button>
                    </div>
                </div>

                <div className="md:w-full bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500 m-2 p-2 hover:text-red-500">
                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                        <div className="rounded-full bg-[#c759ff] p-4">
                            <img
                                src={Muscle}
                                alt="Shoulders, Biceps, Forearms"
                                className="h-10 w-10"
                            />
                        </div>
                        <h3 className="my-2 text-black text-md font-bold tracking-widest title-font mb-1 uppercase pt-4">
                            Shoulders, Biceps, Forearms
                        </h3>
                        <p className="flex justify-center">
                            This workout is designed to strengthen and tone the
                            arm muscles, giving you a well rounded upper body
                            workout.
                        </p>
                        <button
                            className="min-w-[40px] text-white bg-[#c759ff] hover:scale-105 ease-in-out duration-300 p-2 m-4 rounded-lg shadow-md shadow-violet-700"
                            onClick={() => {
                                navigate("/exercise/shoulders-biceps-forearms");
                            }}
                        >
                            Start
                        </button>
                    </div>
                </div>

                <div className="md:w-full bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500 m-2 p-2 hover:text-red-500">
                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                        <div className="rounded-full bg-[#c759ff] p-4">
                            <img
                                src={Heart}
                                alt="Cardio"
                                className="h-10 w-10"
                            />
                        </div>
                        <h3 className="my-2 text-black text-md font-bold tracking-widest title-font mb-1 uppercase pt-4">
                            Cardio
                        </h3>
                        <p className="flex justify-center">
                            This workout is designed to strengthen and tone the
                            arm muscles, giving you a well rounded upper body
                            workout.
                        </p>
                        <button
                            className="min-w-[40px] text-white bg-[#c759ff] hover:scale-105 ease-in-out duration-300 p-2 m-4 rounded-lg shadow-md shadow-violet-700"
                            onClick={() => {
                                navigate("/exercise/cardio");
                            }}
                        >
                            Start
                        </button>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default MExercise;
