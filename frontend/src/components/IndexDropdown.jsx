import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();

  useEffect(() => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
      });
    }
  }, []);

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="relative">
        <button
          className="bg-inherit text-gray-700 hover:text-white hover:bg-violet-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          Features
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
          }
        >
          <Link
            to="/dashboard"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            onClick={closeDropdownPopover}
          >
            Dashboard
          </Link>
          <Link
            to="/exercise/pick-a-workout"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            onClick={closeDropdownPopover}
          >
            Exercises
          </Link>
          <Link
            to="/chat/health"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            onClick={closeDropdownPopover}
          >
            Health Chat
          </Link>
          <Link
            to="/chat/diet"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            onClick={closeDropdownPopover}
          >
            Diet Chat
          </Link>
          <Link
            to="/chat/injury"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            onClick={closeDropdownPopover}
          >
            Injury Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndexDropdown;
