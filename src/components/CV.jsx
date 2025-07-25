import React from "react";

function CV() {
  return (
    <div className="mt-9 flex flex-row gap-4 sm:gap-6 flex-wrap justify-center">
      <h3 className="text-5xl">Check out my CV</h3>
      <a
        href="https://drive.google.com/file/d/1A_6tbo6JePI-HsB7K7JNmnlZGTTkKJog/view?usp=sharing"
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
            d="m21.423 13.888l-6.09-10.55H8.668l6.09 10.55ZM8.09 4.338L2 14.888l3.334 5.774l6.089-10.55Zm1.733 10.55L6.49 20.662h12.178L22 14.887Z"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default CV;
