import React from "react";

export default function CompletedProject() {
  return (
    <section className="bg-gray-900  text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Completed Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/project1.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Name</h2>
              <p className="text-gray-300 text-sm">
                Short description of the project goes here.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/project2.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Name</h2>
              <p className="text-gray-300 text-sm">
                Short description of the project goes here.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/project3.jpg"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Name</h2>
              <p className="text-gray-300 text-sm">
                Short description of the project goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
