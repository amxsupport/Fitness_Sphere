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

