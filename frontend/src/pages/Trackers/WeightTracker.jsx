import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

import {
    getSteps24,
    getSteps7d,
    getCalories24,
    getCalories7d,
    getGoals,
    getmealdetails,
    search,
    find,
} from "../../StaticData_two";

import { Link } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { GiWeight, GiBodyHeight } from "react-icons/gi";
import { MdFactCheck } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeightTracker = () => {
    const [mealData, setMealData] = useState({
        meal: "",
        quantity: "",
        food: "",
    });
    const [message, setMessage] = useState("");

    const bmi =
        (localStorage.getItem("weight") * 10000) /
        (localStorage.getItem("height") * localStorage.getItem("height"));
    const bmiCategory =
        bmi < 18.5
            ? "Under-Weight"
            : bmi >= 18.5 && bmi < 24.9
            ? "Normal"
            : bmi >= 25 && bmi < 29.9
            ? "Over-Weight"
            : bmi >= 30 && bmi < 34.9
            ? "Obese"
            : "Extremely-Obese";

    const changeHandler = (e) => {
        setMealData({ ...mealData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setMessage("Data Updated!");
        console.log(mealData);
        fetch("https://datahack-backend.onrender.com/api/meals/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: mealData.food,
                userid: localStorage.getItem("id"),
                quantity: mealData.quantity,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                localStorage.setItem(
                    "foodCal",
                    res.calories + Number(localStorage.getItem("foodCal"))
                );
                localStorage.setItem(
                    "foodPro",
                    res.proteins + Number(localStorage.getItem("foodPro"))
                );
                localStorage.setItem(
                    "foodFat",
                    res.fats + Number(localStorage.getItem("foodFat"))
                );

                toast("Meal Updated");
            });

        setMealData({ meal: "", food: "", quantity: "" });
        setMessage("");
    };
    return (
        <div className="bg-blue-50">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Chat bot */}
            <Link to="/chat/health">
                <button
                    className="fixed bottom-20 right-6 z-50 border-none outline-none bg-blue-500 text-white cursor-pointer p-4 rounded animate-bounce hover:scale-105 hover:bg-blue-600"
                    title="Chat with HealthBot"
                >
                    <AiFillRobot />
                </button>
            </Link>
            {window.innerWidth < 575 ? (
                <Carousel>
                    <div className="stat bg-white">
                        <div className="stat-figure text-blue-500">
                            <GiWeight className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="stat-title text-pink-700">Weight</div>
                        <div className="stat-value">
                            {localStorage.getItem("weight")}
                            {" Kg"}
                        </div>
                        <div className="stat-title text-emerald-700">
                            {"Weight Goal: "}
                            {localStorage.getItem("weightGoal")}
                            {"Kg"}
                        </div>
                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-blue-500">
                            <MdFactCheck className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="stat-title text-pink-700">BMI</div>
                        <div className="stat-value">{bmi.toFixed(3)}</div>
                        <div className="stat-title text-emerald-700">
                            {bmiCategory}
                        </div>
                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-blue-500">
                            <GiBodyHeight className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="stat-title text-pink-700">Height</div>
                        <div className="stat-value">
                            {localStorage.getItem("height")}
                            {" cm"}
                        </div>
                        <div className="stat-title text-emerald-700">{}</div>
                    </div>
                </Carousel>
            ) : (
                <div className="flex justify-center p-4">
                    <div className="stats shadow">
                        <div className="stat bg-white">
                            <div className="stat-figure text-blue-500">
                                <GiWeight className="inline-block w-8 h-8 stroke-current" />
                            </div>
                            <div className="stat-title text-pink-700">
                                Weight
                            </div>
                            <div className="stat-value">
                                {localStorage.getItem("weight")}
                                {" Kg"}
                            </div>
                            <div className="stat-title text-emerald-700">
                                {"Weight Goal: "}
                                {localStorage.getItem("weightGoal")}
                                {"Kg"}
                            </div>
                        </div>

                        <div className="stat bg-white">
                            <div className="stat-figure text-blue-500">
                                <MdFactCheck className="inline-block w-8 h-8 stroke-current" />
                            </div>
                            <div className="stat-title text-pink-700">BMI</div>
                            <div className="stat-value">{bmi.toFixed(3)}</div>
                            <div className="stat-title text-emerald-700">
                                {bmiCategory}
                            </div>
                        </div>

                        <div className="stat bg-white">
                            <div className="stat-figure text-blue-500">
                                <GiBodyHeight className="inline-block w-8 h-8 stroke-current" />
                            </div>
                            <div className="stat-title text-pink-700">
                                Height
                            </div>
                            <div className="stat-value">
                                {localStorage.getItem("height")}
                                {" cm"}
                            </div>
                            <div className="stat-title text-emerald-700">
                                {}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                    <h6 className="text-zinc-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Add Meal Data
                    </h6>
                    <p style={{ color: "green" }}>{message}</p>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                    htmlFor="Meal"
                                >
                                    Meal
                                </label>
                                <select
                                    name="meal"
                                    id="meal"
                                    value={mealData.meal}
                                    onChange={changeHandler}
                                    className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                >
                                    <option value="">Please select</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                    htmlFor="Food Name"
                                >
                                    Food Name
                                </label>
                                <input
                                    type="text"
                                    name="food"
                                    value={mealData.food}
                                    placeholder="Roti, Bhindi, Samosa etc."
                                    className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                    htmlFor="quantity"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="2"
                                    value={mealData.quantity}
                                    className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center gap-4 mt-3">
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:scale-105 ease-linear transition-all duration-150"
                                type="button"
                                onClick={submitHandler}
                            >
                                Add Meal
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WeightTracker;
