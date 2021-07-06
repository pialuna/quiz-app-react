import React from "react";

import Card from "./Card";

function Answer() {
  const selected = false;
  const buttonStyle = `bg-purple-200 
	border-purple-400 border-2`;
  const selectedButtonStyle = `bg-purple-900 
	border-purple-900 border-2`;
  return (
    <Card>
      <div className="flex flex-row">
        {selected ? (
          <button
            className={`${selectedButtonStyle} rounded-full w-6 h-6`}
          ></button>
        ) : (
          <button className={`${buttonStyle} rounded-full w-6 h-6`}></button>
        )}
        <div className="mx-3">Tokyo</div>
      </div>
    </Card>
  );
}

export default Answer;
