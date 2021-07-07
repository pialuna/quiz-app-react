import React from "react";

import Card from "./Card";

function Option({ text, checked }) {
  const buttonStyle = `bg-purple-200 
	border-purple-400 border-2`;
  const checkedButtonStyle = `bg-purple-900 
	border-purple-900 border-2`;
  return (
    <Card>
      <div className="flex flex-row">
        <button
          className={`${checked ? checkedButtonStyle : buttonStyle} 
		  rounded-full w-6 h-6`}
        ></button>
        <div className="mx-3">{text}</div>
      </div>
    </Card>
  );
}

export default Option;
