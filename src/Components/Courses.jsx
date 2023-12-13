import React from "react";

const Courses = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="py-10 px-3 sm:px-20">
      <div className="flex items-center sm:px-28">
        <button class="border border-gray-200 rounded-full py-2 px-4 bg-white flex items-center">
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
          Filters
        </button>

        <button class="ml-4 border rounded-full border-gray-200 py-2 px-4 bg-white flex items-center">
          <p className="font-light mr-2 text-sm">Sort by:</p>
          Relevance
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center my-3">
        {arr.map((item) => (
          <div class=" max-w-[600px] bg-white shadow-md rounded-lg p-2 m-3 ">
            <div class="overflow-x-hidden rounded-2xl relative">
              <img
                class="h-40 rounded-2xl w-full object-cover"
                src="https://www.aeccglobal.in/images/easyblog_articles/368/basic-computer-courses-list.webp"
              />
            </div>
            <div class="p-2">
              <div className="flex items-center justify-between pt-1.5">
                <p className="text-gray-500 text-sm">6969 students</p>
                <p className="text-gray-500 text-sm">6h 9m</p>
              </div>
              <p class="my-2 text-lg font-semibold text-gray-900 mb-0">
                Master Computer & Programming
              </p>
              <div class="mt-2 flex flex-row justify-between items-center">
                <p class="text-md text-gray-600 mt-0">Mohsin King</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
