import React from "react";
import logo from "../imgs/logo.png";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="flex items-center justify-evenly my-4">
        <img src={logo} className="h-8 hidden md:flex" />
        <div class="flex bg-white px-2 w-[95%] max-w-[600px] items-center gap-1 border border-gray-300">
          <button class="border-r border-gray-200 py-2 px-4 bg-white flex items-center">
            {" "}
            India
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            class="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
            placeholder="Job title, keyword, company"
          />

          <button class="border-l border-gray-200 py-2 px-4 bg-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
            Filter
          </button>
        </div>
        <div className="hidden sm:flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <div className="p-2 rounded-full">
            <img
              src={"https://cdn-icons-png.flaticon.com/128/4128/4128176.png"}
              className="h-8"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center">
        {arr.map((item) => (
          <NavLink
            to={`/jobs/job_id`}
            className="p-2 m-2 lg:w-full sm:max-w-md lg:flex-shrink-0"
          >
            <div className="rounded-lg bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF] p-4 ring-1 ring-inset ring-gray-900/5 ">
              <h4 className="">Job title</h4>
              <div className="flex items-center justify-between gap-1 my-2">
                <p className="text-green-600 text-sm">Type: Part Time</p>
                <p className="text-gray-500 text-sm">Salary: $2000-$5000</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center flex-row">
                  <div className="p-2 rounded-full">
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/128/4128/4128176.png"
                      }
                      className="h-8"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 text-base">Google LLC</p>
                    <p className="text-gray-500 text-sm">Newtown, Kolkata</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Jobs;
