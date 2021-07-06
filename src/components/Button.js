import React from "react";

function Button({ text }) {
  return (
    <button className="py-2 px-4 m-2 rounded-lg bg-purple-800 text-purple-50 text-sm font-bold uppercase shadow-sm">
      {text}
    </button>
  );
}

export default Button;
