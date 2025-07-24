import React from "react";

function Experience() {
  return (
    <div className="flex flex-col items-center py-12 w-full">
      <div>
        <h3 className="text-5xl">Work Experience</h3>
      </div>

        <div className="space-y-6 p-6 rounded-lg w-xl mx-auto">
            <div className="flex justify-between">
                <div>
                    <h3 className="font-semibold text-lg">Vercel</h3>
                    <p className="text-sm">Designer</p>
                </div>
                <div className="text-sm">2025 · Now</div>
            </div>

            <div className="flex justify-between">
                <div>
                    <h3 className="font-semibold text-lg">Height</h3>
                    <p className="text-sm">Designer</p>
                </div>
                <div className="text-sm">2020 · 2025</div>
            </div>

            <div className="flex justify-between">
                <div>
                    <h3 className="font-semibold text-lg">Front</h3>
                    <p className="text-sm">Designer · Front-end Engineer</p>
                </div>
                <div className="text-sm">2016 · 2020</div>
            </div>
        </div>
    </div>
  );
}

export default Experience;
