import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 py-12 w-full mb-30">

      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6">
        <img
          src="/images/me_2.jpg"
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-semibold">Hello there,</h1>
        <h2 className="text-lg sm:text-2xl md:text-5xl mt-2">I am Bashir Muhammed.</h2>
      </div>

      <div className="text-center mt-4 max-w-xl">
        <p className="text-base sm:text-lg md:text-xl mt-2">
          I am a web developer who focuses on building responsive web apps.
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-2">
          I make use of the PERN stack — PostgreSQL, Express, React, and Node.js.
        </p>
      </div>
    </div>
  );
}

export default Home;
