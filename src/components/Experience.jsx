import React from "react";

function Experience() {
  return (
    <div className="flex flex-col items-center py-12 w-full px-4 sm:px-6 md:px-8 mb-45">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Work Experience & Stack
        </h3>
      </div>

      {/* Experience Items */}
      <div className="space-y-6 w-full max-w-3xl">
        {/* CVHUB4AFRICA */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 bg-gray-50 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">CVHUB4AFRICA</h3>
            <p className="text-sm text-gray-600">Intern</p>
          </div>
          <div className="text-sm text-gray-500 sm:text-right">July 2024 – October 2024</div>
        </div>

        {/* Aero Contractors */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 bg-gray-50 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">Aero Contractors</h3>
            <p className="text-sm text-gray-600">Intern</p>
          </div>
          <div className="text-sm text-gray-500 sm:text-right">July 2025 – Present</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
