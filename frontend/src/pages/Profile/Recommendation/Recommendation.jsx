ximport React, { useEffect, useState } from "react";
import Select from "react-select";
import TypewriterText from "../../components/TypewriterText";
import { data, explanation } from "../../sampleResponse";
import WorkoutCard from "./WorkoutCard";

import Leg from "../../assets/exercise/leg.png";
import Chest from "../../assets/exercise/chest.png";
import Muscle from "../../assets/exercise/muscle.png";
import Heart from "../../assets/exercise/heart-beat.png";

console.log(data);

const MealComponent = ({
    breakfast,
    lunch,
    dinner,
    day,
    image1,
    image2,
    image3,
}) => {
    return (
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32 text-center">
                    <h3 className="mb-12 text-center text-2xl font-semibold">
                        Your Recommendations for Today (Day {day})
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-3">
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={
                                                "data:image/png;base64," +
                                                image1
                                            }
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold text-white">
                                        {breakfast.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p
                                        // href={breakfast.link}
                                        className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-yellow-400 m-0"
                                    >
                                        Breakfast
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={
                                                "data:image/png;base64," +
                                                image2
                                            }
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold text-white">
                                        {lunch.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-red-500 m-0">
                                        Lunch
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src={
                                                "data:image/png;base64," +
                                                image3
                                            }
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold text-white">
                                        {dinner.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-green-500 m-0">
                                        Dinner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    );
};


