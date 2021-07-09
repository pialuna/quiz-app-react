import React from "react";

function Card(params) {
  return (
    <div className="w-full p-4 mb-4 mx-2 bg-white rounded-lg shadow-md">
      {params.children}
    </div>
  );
}

export default Card;
