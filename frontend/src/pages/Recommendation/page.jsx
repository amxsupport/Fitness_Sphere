import React from "react";

const page = () => {
    return (
        <div className="w-full rounded-md p-2">
            <div className="flex flex-col md:flex-row w-full flex-wrap rounded-md p-2">
                <div className="flex flex-col md:flex-row md:w-2/3 w-full justify-center items-center -mb-14 md:mt-12 gap-4 text-md">
                    Select Day
                    <Select
                        className="w-36"
                        defaultValue={day}
                        onChange={(day) => setDay(day.value)}
                        options={options}
                    />
                    <div className="w-full md:w-2/3">
                        {/*Tabs content*/}
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
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-gray-100 rounded-md p-4">
                    <h3 className="mb-12 text-center text-2xl font-semibold">
                        Complete Week Guide
                    </h3>
                    <ul>
                        {explain &&
                            explain.map((item, index) => {
                                return (
                                    <li key={index} className="">
                                        <TypewriterText text={item} />
                                    </li>
                                );
                            })}
                    </ul>
                    {/* <p className="text-md">
                    {openaiResponse && <TypewriterText text={openaiResponse} />}
                </p> */}
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="text-xl font-bold tracking-wide">
                        Today's Workout Goals
                    </h2>
                    {/* <p className="text-xl font-semibold">
                        Lets start with some stretching exercises.
                    </p> */}
                    {workoutData && (
                        <WorkoutCard
                            description={workoutData?.description}
                            name={workoutData?.name}
                            url={workoutData?.url}
                            icon={workoutData?.icon}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
