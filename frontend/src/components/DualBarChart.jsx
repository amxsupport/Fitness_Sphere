import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const DualBarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
    };

    const labels = [
        "Monday",
        "Tuesday",
        "Wedenesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Sets",
                data: [3, 4, 2, 1, 4, 2, 2],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Reps",
                data: [22, 24, 18, 8, 40, 22, 16],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };
    return <Bar options={options} data={data} />;
};

export default DualBarChart;
