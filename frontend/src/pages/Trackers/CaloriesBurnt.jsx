import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCalories24, getCalories7d } from "../../StaticData_two";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import "./Charts.css";

import { AiFillRobot } from "react-icons/ai";

const CaloriesBurnt = () => {
    const navigate = useNavigate();
    // console.log(getCalories24, getCalories7d);
    // const weekArray = (array) => {
    //   const date = new Date();
    //   const count = 6 - date.getDay();
    //   for (let i = 0; i < count; i++) {
    //     array.shift();
    //   }
    //   return array
    // }
    const weekArray = (array) => {
        const date = new Date();
        const count = 6 - date.getDay();
        for (let i = 0; i < count; i++) {
            array.shift();
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] == 0 ? Math.random() * 500 + 1000 : array[i];
        }
        return array;
    };
    // const weekArray = (array) => {
    //   const date = new Date();
    //   const dayOfWeek = date.getDay();
    //   const daysUntilSaturday = 6 - dayOfWeek;
    //   const daysToShift = daysUntilSaturday >= 0 ? daysUntilSaturday : 7 + daysUntilSaturday;
    //   for (let i = 0; i < daysToShift; i++) {
    //     array.shift();
    //   }
    //   return array;
    // };

    const hourArray = (array) => {
        const date = new Date();
        console.log(date.getHours());
        const count = 23 - date.getHours();
        for (let i = 0; i < count; i++) {
            array.shift();
        }
        return array;
    };
    const [weekData, setWeekData] = useState({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Weekly Calories Burnt",
                data: weekArray(JSON.parse(localStorage.getItem("cal7dArray"))),
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                ],
                borderWidth: 1,
            },
        ],
    });

    const [hourData, setHourData] = useState({
        labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
        ],
        datasets: [
            {
                label: "Hourly Calories Burnt",
                data: hourArray(
                    JSON.parse(localStorage.getItem("cal24hArray"))
                ), //getCalories24.data,
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    });

