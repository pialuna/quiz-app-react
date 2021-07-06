import React from "react";

function Quiz() {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <h2>Geography</h2>
      <div className="w-full flex flex-row items-center justify-between">
        <p>Score: 8/10</p>
        <button className="py-2 px-4 rounded-lg bg-purple-800 text-purple-50 text-sm font-bold uppercase">
          start
        </button>
      </div>
    </div>
  );
}

export default Quiz;
