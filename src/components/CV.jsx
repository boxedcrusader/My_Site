import React from "react";

function CV() {
  return (
    <div className="mt-9 flex flex-row gap-4 sm:gap-6 flex-wrap justify-center">
      <h3 className="text-5xl">Check out my CV</h3>
      <a
        href="https://drive.google.com/file/d/1A_6tbo6JePI-HsB7K7JNmnlZGTTkKJog/view?usp=drivesdk"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.707 7.404c-.189-.188-.448-.283-.707-.283s-.518.095-.707.283L13 9.697V3a1 1 0 0 0-2 0v6.697L8.707 7.404a.997.997 0 0 0-1.414 0a1 1 0 0 0 0 1.414L12 13.5l4.709-4.684a1 1 0 0 0-.002-1.412M20.987 16a1 1 0 0 0-.039-.316l-2-6A1 1 0 0 0 18 9h-.219c-.094.188-.21.368-.367.525L15.932 11h1.348l1.667 5H5.054l1.667-5h1.348L6.586 9.525A2 2 0 0 1 6.219 9H6a1 1 0 0 0-.948.684l-2 6a1 1 0 0 0-.039.316C3 16 3 21 3 21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1s0-5-.013-5"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default CV;
