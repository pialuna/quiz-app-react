import React from "react";

function Card(params) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      {params.children}
    </div>
  );
}

export default Card;
