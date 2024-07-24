import React, { useState } from "react";
import { getCalories24, getCalories7d } from "../../StaticData_two";
import { Link } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";

import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
// import PieChart from '../../components/PieChart'
import "./Charts.css";

import { FaPlus, FaMinus } from 'react-icons/fa';

const CaloriesIntake = () => {
  // console.log(getCalories24, getCalories7d);
  const weekArray = (array) => {
    const date = new Date();
    const count = 6 - date.getDay();
    for (let i = 0; i < count; i++) {
      array.shift();
    }
  for(let i=0; i<array.length; i++){
  	array[i]= array[i]==0?Math.random()*(500)+1000:array[i];
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


  // water data for a day
  const [waterIntake24, setWaterIntake24] = useState(0);

  // water data for a week
  const [waterData, setWaterData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Weekly Calorie Intake",
        // data: weekArray(
        //   JSON.parse(localStorage.getItem("waterIntake7d"))
        // ),
        data: weekArray([12, 8, 9, 10, 5, 4, 7]),
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

  const [weekData, setWeekData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Weekly Calorie Intake",
        data: weekArray(
          // JSON.parse(localStorage.getItem("calIntake7d"))
          [0, 0, 0, 0, 0, 891, 1182]
        ), //getCalories7d.data,
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
        label: "Hourly Calorie Intake",
        data: JSON.parse(localStorage.getItem("foodCal")),
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

  return (
    <div className="bg-red-50 -mt-4">
      <Link to="/chat/diet">
        <button
          className="fixed bottom-20 right-6 z-50 border-none outline-none bg-red-500 text-white cursor-pointer p-4 rounded animate-bounce hover:scale-105 hover:bg-red-600"
          title="Chat with DietBot"
        >
          <AiFillRobot />
        </button>
      </Link>

      <div className="flex justify-center items-center">
        <p className="font-bold text-xl tracking-wide text-red-500">
          Nutritional Stats of the day
        </p>
      </div>

      {window.innerWidth < 575 ? (
        <Carousel>
          <div className="stat bg-white">
            <div className="stat-title text-pink-700">
              Calories Consumed
            </div>
            <div className="stat-value">
              {Number(localStorage.getItem("foodCal")).toFixed(2)}
              {" Cal"}
            </div>
          </div>

          <div className="stat bg-white">
            <div className="stat-title text-pink-700">Fats</div>
            <div className="stat-value">
              {Number(localStorage.getItem("foodFat")).toFixed(2)}
              {" fats"}
            </div>
          </div>

          <div className="stat bg-white">
            <div className="stat-title text-pink-700">Proteins</div>
            <div className="stat-value">
              {Number(localStorage.getItem("foodPro")).toFixed(2)}
              {" units"}
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="flex justify-center p-4">
          <div className="stats shadow">
            <div className="stat bg-white">
              <div className="stat-title text-pink-700">
                Calories Consumed
              </div>
              <div className="stat-value">
                {Number(localStorage.getItem("foodCal")).toFixed(2)}
                {" Cal"}
              </div>
            </div>

            <div className="stat bg-white">
              <div className="stat-title text-pink-700">Fats</div>
              <div className="stat-value">
                {Number(localStorage.getItem("foodFat")).toFixed(2)}
                {" fats"}
              </div>
            </div>

            <div className="stat bg-white">
              <div className="stat-title text-pink-700">
                Proteins
              </div>
              <div className="stat-value">
                {Number(localStorage.getItem("foodPro")).toFixed(2)}
                {" units"}
              </div>
            </div>
          </div>
        </div>
      )}

      <hr />

      <div className="chartMenu">
        <p>Weekly Calories Intake</p>
      </div>
      <div className="chartCard">
        <div className="chartBox border-2 border-red-900 border-solid shadow-md shadow-red-200">
          <BarChart id="myChart" chartData={weekData} />
        </div>
      </div>

      <hr className="my-4" />

      {/* water tracker */}
      <div className="flex flex-col justify-center items-center text-center">
        {/*
        <div className="text-center">
          <p className="font-bold text-xl text-red-500 tracking-wide">Water Glass Counter</p>
          <div className="flex justify-center items-center">
            {waterIntake24 === 0 ? (
              <button
                disabled
                className={"text-white text-3xl bg-red-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-l-lg shadow-md shadow-red-700 hover:bg-red-600"}
                onClick={() => setWaterIntake24(waterIntake24 - 1)}
              >
                <FaMinus />
              </button>
            ) : (
              <button
                className={"text-white text-3xl bg-red-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-l-lg shadow-md shadow-red-700 hover:bg-red-600"}
                onClick={() => setWaterIntake24(waterIntake24 - 1)}
              >
                <FaMinus />
              </button>
            )}
            <p className="font-bold text-3xl tracking-wide shadow-sm p-2 shadow-red-700">{waterIntake24}</p>
            <button
              className="text-white text-3xl bg-red-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-r-lg shadow-md shadow-red-700 hover:bg-red-600"
              onClick={() => setWaterIntake24(waterIntake24 + 1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        */}
        <div>
          <div className="chartMenu">
            <p>Weekly Water Intake</p>
          </div>
          <div className="chartCard">
            <div className="chartBox border-2 border-red-900 border-solid shadow-md shadow-red-200">
              <BarChart id="myChart" chartData={waterData} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-center">
        <button
          className="btn text-white bg-red-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-lg shadow-md shadow-red-700 hover:bg-red-600"
        >
          Refresh
        </button>
      </div>

    </div >
  );
};

export default CaloriesIntake;
