import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// components
import { AiOutlineMenu } from "react-icons/ai";
import DashboardDropdown from "../components/DashboardDropdown";
import UserDropdown from "../components/UserDropdown";

import Web from "/src/assets/logo/Web.png";

export default function Navbar(props) {
    // useEffect(() => {
    //     Notification.requestPermission().then(function (permission) {
    //         console.log("permiss", permission);
    //     });
    //     let deferredPrompt;
    //     const addBtn = document.querySelector(".add-button");
    //     addBtn.style.display = "none";
    //     window.addEventListener("beforeinstallprompt", (e) => {
    //         e.preventDefault();
    //         deferredPrompt = e;
    //         console.log("Created User A2HS prompt");
    //         addBtn.style.display = "block";

    //         addBtn.addEventListener("click", (e) => {
    //             addBtn.style.display = "none";
    //             deferredPrompt.prompt();
    //             deferredPrompt.userChoice.then((choiceResult) => {
    //                 if (choiceResult.outcome === "accepted") {
    //                     console.log("User accepted the A2HS prompt");
    //                 } else {
    //                     console.log("User dismissed the A2HS prompt");
    //                 }
    //                 deferredPrompt = null;
    //             });
    //         });
    //     });
    // }, []);
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="top-0 fixed w-full flex flex-wrap items-center justify-between px-2 py-3 md:py-0 bg-white shadow mb-48 z-[999]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="flex flex-row justify-center items-center gap-4">
                            <img src={Web} className="h-8 w-8" />
                            <Link
                                to="/"
                                className="text-violet-600 text-md text-xl hover:text-violet-600 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                            >
                                Fitness Sphere
                            </Link>
                        </div>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-[#c759ff]"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center">
                            <li>
                                <div className="flex items-center">
                                    <Link to="/dashboard">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Dashboard
                                        </button>
                                    </Link>
                                </div>
                            </li>

                            <li className="flex items-center">
                                <DashboardDropdown />
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <Link to="/posture">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Posture
                                        </button>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <Link to="/recommendation">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Recommendation
                                        </button>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <Link to="/leaderboard">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Leaderboard
                                        </button>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <Link to="/events">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Events
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <Link to="/store">
                                        <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                            Store
                                        </button>
                                    </Link>
                                </div>
                            </li>

                            {/* <li className="add-button">
                                <div className="flex items-center">
                                    <button className="bg-inherit text-gray-700 hover:text-white hover:bg-[#c759ff] text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 md:mb-3 ease-linear transition-all duration-150">
                                        Install App
                                    </button>
                                </div>
                            </li> */}

                            <li className="md:ml-3">
                                <UserDropdown />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="min-h-[70px] md:min-h-[40px] lg:min-h-[80px]"></div>
        </>
    );
}
