import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleClick = () => {
        const userId = localStorage.getItem("id");
        console.log("Footer");
        console.log(userId);

        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${month}-${day}-${year}`;
        }

        const formattedDate = formatDate(startDate); // "04-02-2023"

        console.log(startDate);
        console.log(formattedDate);
        const options = {
            method: "POST",
            redirect: "follow",
        };

        const url = `https://e25a-2402-3a80-1677-748-6492-d460-13b8-7606.in..io/create_meeting/?user_id=${userId}&date=${formattedDate}`;
        console.log(url);
        fetch(url, options)
            .then((response) => console.log(response))
            .then(() => {
                toast("Event scheduled in the calendar.");
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <footer className="text-gray-600 z-40">
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
            <div className="border-t border-gray-200">
                <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                            <label className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            {/*               <input type="date" id="footer-field" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-violet-200 focus:border-violet-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={e => setDate(e.target.value)} /> */}
                            <DatePicker
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-violet-200 focus:border-violet-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <button
                            onClick={handleClick}
                            className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded"
                        >
                            Send
                        </button>
                        <p className="text-gray-500 text-sm mx-2 md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                            Want to consult a Doctor?
                        </p>
                    </div>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <a className="text-gray-500 hover:text-violet-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-violet-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-violet-400">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-violet-400">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2023 FitSphere —
                        <a
                            href="#"
                            className="text-gray-600 ml-1 hover:text-violet-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @FitSphere
                        </a>
                    </p>

                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                        <a href="/tnc">Privacy Policy</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
