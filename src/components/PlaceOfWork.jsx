import React from "react";

function PlaceOfWork() {
  const workExperiences = [
    {
      company: "CVHUB4AFRICA",
      position: "Intern",
      duration: "July 2024 – October 2024",
    },
    {
      company: "Aero Contractors",
      position: "Intern",
      duration: "July 2025 – Present",
    },
  ];
  return (
    <div>
      {workExperiences.map((workExperience) => (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 bg-gray-50 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">{workExperience.company}</h3>
            <p className="text-sm text-gray-600">{workExperience.position}</p>
          </div>
          <div className="text-sm text-gray-500 sm:text-right">
            {workExperience.duration}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlaceOfWork;
