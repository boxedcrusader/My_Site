import React from "react";
import PlaceOfWork from "./PlaceOfWork";
import Stack from "./Stacks";

function Experience() {
  return (
    <div className="flex flex-col items-center py-12 w-full px-4 sm:px-6 md:px-8 mb-45">
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold underline underline-offset-8">
          Work Experience
        </h3>
      </div>
      <div className="space-y-6 w-full max-w-3xl">
        <PlaceOfWork />
        <Stack />
      </div>
    </div>
  );
}

export default Experience;
