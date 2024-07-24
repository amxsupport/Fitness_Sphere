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

const Recommendation = () => {
    const [day, setDay] = useState(1);
    const [explain, setExplain] = useState([]);
    const res =
        "1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n".split(
            /\r?\n/
        );
    const [openaiResponse, setOpenaiResponse] = useState(null);
    const [workoutData, setWorkoutData] = useState(null);

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    useEffect(() => {
        setOpenaiResponse(data[day]);
        if (openaiResponse) setWorkoutData(data[openaiResponse?.workout]);
        console.log("openaiResponse", openaiResponse);
        console.log("workoutData", workoutData);
    }, [openaiResponse]);

    console.log("workoutData hi", workoutData);

    useEffect(() => {
        const res = explanation.split(/\r?\n/);
        setExplain(res);
    }, []);

    useEffect(() => {
        setOpenaiResponse(data[day]);
        if (openaiResponse) setWorkoutData(data[openaiResponse?.workout]);
        console.log("openaiResponse", openaiResponse);
        console.log("workoutData", workoutData);
    }, [day]);

    useEffect(() => {
        // fetch the images from the backend api and store them in the state variable images using setImages and update the data. The backend provides one image in the form of a base64, add the necessary code to convert the base64 to an image and store it in the state variable images.

        if (workoutData === null) return;
        console.log("poco m4", workoutData);
        fetch(
            `https://8b6b-2402-3a80-4190-beee-98ef-b30e-7fb3-6cb4.ngrok-free.app/crawl-images?query=${workoutData?.breakfast?.name}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({
                //     query: workoutData?.breakfast?.name,
                // }),
            }
        )
            .then((res) => res.json())
            .then((data) => setImage1(data.image_base64))
            .catch((err) => console.log(err));

        fetch(
            `https://8b6b-2402-3a80-4190-beee-98ef-b30e-7fb3-6cb4.ngrok-free.app/crawl-images?query=${workoutData?.lunch?.name}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({
                //     query: workoutData?.lunch?.name,
                // }),
            }
        )
            .then((res) => res.json())
            .then((data) => setImage2(data.image_base64))
            .catch((err) => console.log(err));

        fetch(
            `https://8b6b-2402-3a80-4190-beee-98ef-b30e-7fb3-6cb4.ngrok-free.app/crawl-images?query=${workoutData?.dinner?.name}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({
                //     query: workoutData?.lunch?.name,
                // }),
            }
        )
            .then((res) => res.json())
            .then((data) => setImage3(data.image_base64))
            .catch((err) => console.log(err));
    }, [workoutData]);

    const options = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
    ];

    const workoutMap = {
        1: {
            name: "Chest, Abs, Back",
            description:
                "This workout focuses on strengthening and toning your chest, abdominal and back muscles, giving you a well rounded and defined physique.",
            url: "chest-abs-back",
            icon: Muscle,
        },
        2: {
            name: "Legs, Triceps, Calves",
            description:
                "This routine is designed to challenge and tone your lower body, upper arms and lower legs.",
            url: "legs-triceps-calves",
            icon: Leg,
        },
        3: {
            name: "Shoulders, Biceps, Forearms",
            description:
                "This workout is designed to strengthen and tone the arm muscles, giving you a well rounded upper body workout.",
            url: "shoulders-biceps-forearms",
            icon: Chest,
        },
        4: {
            name: "Cardio",
            description:
                "This workout is designed to strengthen and tone the arm muscles, giving you a well rounded upper body workout.",
            url: "cardio",
            icon: Heart,
        },
    };

    return (
        <section className="flex flex-col gap-4 min-h-screen w-full p-4">
            <h3 className="text-xl md:text-3xl text-black font-bold">
                Complete Week Plan
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8 w-full border border-gray-300 border-solid p-2 md:p-8 rounded-2xl relative">
                <div className="w-full md:w-2/3">
                    <Select
                        className="w-full"
                        defaultValue={day}
                        onChange={(day) => setDay(day.value)}
                        options={options}
                    />
                    <div className="">
                        <div
                            key={day}
                            className="opacity-100 transition-opacity duration-150 ease-linear"
                            id={day}
                        >
                            {openaiResponse && (
                                <MealComponent
                                    breakfast={openaiResponse["breakfast"]}
                                    lunch={openaiResponse["lunch"]}
                                    dinner={openaiResponse["dinner"]}
                                    day={day}
                                    image1={image1}
                                    image2={image2}
                                    image3={image3}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {/* Horizontali scrollable slider having multiple images */}
                <div className=" md:w-1/3 p-2 md:p-4 h-full">
                    <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide h-full">
                        <div
                            className={`p-4 flex flex-col gap-2 rounded-lg shadow-lg w-full border`}
                        >
                            <h3 className="text-xl font-bold tracking-wide">
                                Complete week plan
                            </h3>
                            <div className="rounded-lg  w-full max-h-60 flex flex-col items-center justify-center overflow-y-scroll scrollbar-hide py-4">
                                {explain &&
                                    explain.map((item, index) => {
                                        return (
                                            <p
                                                key={index}
                                                className="text-sm font-bold w-full"
                                                style={{
                                                    marginBlock: "0",
                                                }}
                                            >
                                                <TypewriterText text={item} />
                                            </p>
                                        );
                                    })}
                            </div>

                            <div className="flex justify-center items-center w-full">
                                <div className="flex flex-col justify-center items-center text-center">
                                    <h3 className="text-xl font-bold tracking-wide">
                                        Today's Workout Goals
                                    </h3>
                                    {/* <p className="text-xl font-semibold">
                        Lets start with some stretching exercises.
                    </p> */}
                                    {workoutData && (
                                        <WorkoutCard
                                            description={
                                                workoutData?.description
                                            }
                                            name={workoutData?.name}
                                            url={workoutData?.url}
                                            icon={workoutData?.icon}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendation;
