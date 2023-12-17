import React from "react";
import { NavLink } from "react-router-dom";

function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Congratulations, you logged in successfully!
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <NavLink to="/">Go back to the home page</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Page;
